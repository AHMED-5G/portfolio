import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { ContributorAccount, RootStackParamList } from "../types";
import { circularRatio, fontRatio, hwrosh, width } from "../constants/Layout";
import { theme } from "../constants/myColors";
import { StackScreenProps } from "@react-navigation/stack";
import ScreenWithCustomBottomTab from "../components/ScreenWithCustomBottomTab";
import ContributorAccountCard from "../components/ContributorAccountCard";
import MyCustomSkeleton from "../components/MyCustomSkeleton";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
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

    const headerContainerRStyle = useAnimatedStyle(() => {
      const initialHeight = socialContainerRStyleInitialTop + marginHeight10;

      return {
        height: initialHeight,
      };
    });

    const imageContainerRStyle = useAnimatedStyle(() => {
      return { top: imageContainerInitialTop };
    });

    const nameAndTitleContainerRStyle = useAnimatedStyle(() => {
      const initialTop = nameAndTitleContainerRStyleInitialTop;
      return {
        top: initialTop,
      };
    });

    const imageAnimatedView = useAnimatedStyle(() => {
      const imageStartLeft = width / 2 - imageSize / 2;
      return {
        position: "absolute",
        left: imageStartLeft,
      };
    });

    return (
      <View style={{ flex: 1 }}>
        <Animated.View
          sharedTransitionTag={contributor.id.toString()}
          style={[
            styles.container,
            { backgroundColor: theme.cardBackground() },
            headerContainerRStyle,
          ]}
        >
          <View
            style={{
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Animated.View
              style={[styles.imageContainer, imageContainerRStyle]}
            >
              <Animated.View style={imageAnimatedView}>
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
          </View>
        </Animated.View>
        <ScrollView
          contentContainerStyle={{
            // justifyContent: "center",
            alignContent: "center",
            flex: 1,
            alignItems: "center",
          }}
        >
          {contributor.name == "AA" && <AAContent />}
        </ScrollView>
      </View>
    );
  };

  return (
    <ScreenWithCustomBottomTab
      content={<Content />}
      // navigation={navigation}
      CustomBottomTabComponents={[
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
        </View>,
      ]}
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
  },
  imageContainer: {
    // alignItems: "center",
    // alignContent: "center",
    // justifyContent: "center",
    position: "absolute",
    width: "100%",
    backgroundColor: "pink",
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
