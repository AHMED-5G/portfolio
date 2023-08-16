import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  I18nManager,
} from "react-native";
import React, { useState } from "react";
import { ContributorAccount, RootStackParamList } from "../types";
import {
  circularRatio,
  fontRatio,
  hwrosh,
  width,
  wwrosw,
} from "../constants/Layout";
import { theme } from "../constants/theme";
import { StackScreenProps } from "@react-navigation/stack";
import ScreenWithCustomBottomTab from "../components/ScreenWithCustomBottomTab";
import ContributorAccountCard from "../components/ContributorAccountCard";
import MyCustomSkeleton from "../components/MyCustomSkeleton";
import Animated, {
  Extrapolate,
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { RouteProp } from "@react-navigation/native";
import AAContent from "../components/ContributorsContant/AAContent/AAContent";

interface Props {
  navigation: StackScreenProps<RootStackParamList, "ContributorsDetails">;
  route: RouteProp<RootStackParamList, "ContributorsDetails">;
}
const imageSize = circularRatio(80);

function ContributorsDetails({ route }: Props) {
  const contributor = route.params;

  const Content = () => {
    const onScrollProgress = useSharedValue(0);
    const [imageLoading, setImageLoading] = useState(true);
    const imageContainerInitialTop = hwrosh(20);
    const marginHeight10 = hwrosh(10);
    const nameAndTitleContainerHeight = hwrosh(60);
    const nameAndTitleContainerRStyleInitialTop =
      imageContainerInitialTop + imageSize + marginHeight10;

    const socialContainerRStyleInitialTop =
      imageContainerInitialTop +
      nameAndTitleContainerRStyleInitialTop +
      nameAndTitleContainerHeight;
    const finalHeight = imageSize + marginHeight10 * 3;

    const headerContainerRStyle = useAnimatedStyle(() => {
      const initialHeight = socialContainerRStyleInitialTop + marginHeight10;

      const toHeight = interpolate(
        onScrollProgress.value,
        [0, finalHeight],
        [initialHeight, finalHeight],
        Extrapolate.CLAMP,
      );

      return {
        height: toHeight,
      };
    });

    const imageFinalPaddingLeft = wwrosw(20);
    const imageContainerRStyle = useAnimatedStyle(() => {
      return {
        // top: imageContainerInitialTop,
        left: interpolate(
          onScrollProgress.value,
          [0, finalHeight * 0.8],
          [width / 2 - imageSize / 2, imageFinalPaddingLeft],
          Extrapolate.CLAMP,
        ),
        top: interpolate(
          onScrollProgress.value,
          [0, finalHeight / 2, finalHeight],
          [
            imageContainerInitialTop,
            imageContainerInitialTop * 2,
            imageContainerInitialTop,
          ],
          Extrapolate.CLAMP,
        ),
      };
    });

    const nameAndTitleContainerRStyleFinalTop =
      imageContainerInitialTop + imageSize / 2 - marginHeight10 * hwrosh(2.5);
    const nameAndTitleContainerRStyle = useAnimatedStyle(() => {
      const initialTop = nameAndTitleContainerRStyleInitialTop;
      return {
        top: interpolate(
          onScrollProgress.value,
          [0, finalHeight],
          [initialTop, nameAndTitleContainerRStyleFinalTop],
          Extrapolate.CLAMP,
        ),
      };
    });

    const scrollHandler = useAnimatedScrollHandler({
      onScroll: (event) => {
        if (event.contentOffset.y == 0) {
          onScrollProgress.value = withSpring(0);
        }
        onScrollProgress.value = event.contentOffset.y;
      },
    });

    const rotateOutput = I18nManager.isRTL ? [-360, 0] : [0, -360];
    const imageRotate = useDerivedValue(() => {
      return interpolate(
        onScrollProgress.value,
        [0, finalHeight * 0.8],
        rotateOutput,
        Extrapolation.CLAMP,
      );
    });

    const imageRStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            rotate: imageRotate.value + "deg",
          },
        ],
        position: "absolute",
      };
    });

    return (
      <View style={{ flex: 1 }}>
        <Animated.View
          style={[
            { backgroundColor: theme.cardBackground() },
            styles.container,
            headerContainerRStyle,
          ]}
        >
          <Animated.View style={[styles.imageContainer, imageContainerRStyle]}>
            <Animated.View style={imageRStyle}>
              {imageLoading && (
                <View
                  style={[
                    styles.image,
                    {
                      position: "absolute",
                      zIndex: 1,
                      overflow: "hidden",
                    },
                  ]}
                >
                  <MyCustomSkeleton style={styles.image} />
                </View>
              )}
              <Image
                onLoadStart={() => {
                  setImageLoading(true);
                }}
                onLoad={() => {
                  setImageLoading(false);
                }}
                onLoadEnd={() => {
                  setImageLoading(false);
                }}
                resizeMode="cover"
                style={styles.image}
                source={{ uri: contributor.image }}
              />
            </Animated.View>
          </Animated.View>
          <Animated.View
            style={[
              {
                position: "absolute",
                height: nameAndTitleContainerHeight,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                width,
              },
              nameAndTitleContainerRStyle,
            ]}
          >
            <View style={styles.nameContainer}>
              <Text style={[styles.nameText, { color: theme.cardText() }]}>
                {contributor.name}
              </Text>
            </View>
            <View style={styles.titleContainer}>
              <Text style={[styles.titleText, { color: theme.cardText() }]}>
                {contributor.title}
              </Text>
            </View>
          </Animated.View>
        </Animated.View>
        <Animated.ScrollView
          contentContainerStyle={{
            alignContent: "center",
            alignItems: "center",
          }}
          onScroll={scrollHandler}
        >
          {contributor.name == "AA" && <AAContent />}
        </Animated.ScrollView>
      </View>
    );
  };

  return (
    <ScreenWithCustomBottomTab
      content={<Content />}
      CustomBottomTabComponents={
        <View key={"accounts"}>
          <FlatList
            data={contributor.accounts.slice(0, 3)}
            numColumns={4}
            renderItem={({ item }: { item: ContributorAccount }) => (
              <ContributorAccountCard account={item} />
            )}
            keyExtractor={(_item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      }
    />
  );
}

export default ContributorsDetails;

const styles = StyleSheet.create({
  container: {
    width: width,
    borderRadius: theme.borderRadius,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    overflow: "hidden",
  },
  imageContainer: {
    position: "absolute",
    width: "100%",
  },
  nameContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  nameText: {
    fontSize: fontRatio(22),
    fontWeight: "800",
    textTransform: "uppercase",
  },
  titleContainer: {
    marginBottom: hwrosh(5),
  },
  titleText: {
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: fontRatio(12),
  },

  image: {
    height: imageSize,
    width: imageSize,
    borderRadius: imageSize,
  },
});
