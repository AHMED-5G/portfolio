import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { ContributorAccount, RootStackParamList } from "../types";
import {
  averageRatio,
  circularRatio,
  fontRatio,
  hwrosh,
  wwrosw,
} from "../constants/Layout";
import { theme } from "../constants/myColors";
import { StackScreenProps } from "@react-navigation/stack";
import ScreenWithCustomBottomTab from "../components/ScreenWithCustomBottomTab";
import ContributorAccountCard from "../components/ContributorAccountCard";
import MyCustomSkeleton from "../components/MyCustomSkeleton";
import Animated from "react-native-reanimated";

type Props = StackScreenProps<RootStackParamList, "ContributorsDetails">;
const imageSize = circularRatio(80);
const cardWidth = wwrosw(160);
function ContributorsDetails({ navigation, route }: Props) {
  const contributor = route.params;
  const Content = () => {
    const [imageLoading, setImageLoading] = useState(true);

    return (
      <View style={{ flex: 1 }}>
 
        <Animated.View
          sharedTransitionTag={contributor.id.toString()}
          style={[
            styles.container,
            { backgroundColor: theme.cardBackground() },
          ]}
        >
          <View style={styles.imageContainer}>
            {imageLoading && (
              <View
                style={[
                  styles.image,
                  {
                    position: "absolute",
                    zIndex: 1,
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
          </View>
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
          <View
            style={{
              height: 1,
              backgroundColor: theme.borderColor,
              width: "100%",
            }}
          />
          <View style={styles.socialContainer}>
            <FlatList
              data={contributor.accounts.slice(0, 3)}
              numColumns={4}
              renderItem={({ item }: { item: ContributorAccount }) => (
                <ContributorAccountCard account={item} />
              )}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </Animated.View>
      </View>
    );
  };

  return (
    <ScreenWithCustomBottomTab
      content={<Content />}
      navigation={navigation}
      CustomBottomTabComponents={[
        <Text
          style={{
            fontSize: fontRatio(22),
            fontWeight: "700",
            color: theme.baseTextColor(),
          }}
        >
          {contributor.name}
        </Text>,
      ]}
    />
  );
}

export default ContributorsDetails;

const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    marginRight: wwrosw(10),
    borderRadius: theme.borderRadius,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  imageContainer: {
    marginTop: hwrosh(10),
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  nameContainer: {
    marginTop: hwrosh(5),
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
  socialContainer: {
    height: hwrosh(40),
    marginTop: hwrosh(10),
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: averageRatio(12),
    marginBottom: hwrosh(5),
  },
  image: {
    height: imageSize,
    width: imageSize,
    borderRadius: imageSize,
  },
});
