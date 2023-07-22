import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Contributor, ContributorAccount } from "../types";
import ContributorAccountCard from "./ContributorAccountCard";
import { theme } from "../constants/myColors";
import MyCustomSkeleton from "./MyCustomSkeleton";
import {
  averageRatio,
  circularRatio,
  fontRatio,
  hwrosh,
  wwrosw,
} from "../constants/Layout";
import Animated from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

type Props = {
  contributor: Contributor;
};

const imageSize = circularRatio(80);
const cardWidth = wwrosw(160);
const ContributorCard = ({ contributor }: Props) => {
  const [imageLoading, setImageLoading] = useState(true);
  const navigation = useNavigation();
  return (
    <Animated.View
      sharedTransitionTag={contributor.id.toString()}
      style={[styles.container, { backgroundColor: theme.cardBackground() }]}
    >
      <TouchableOpacity
        style={{
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("ContributorsDetails", contributor)}
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
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ContributorCard;

const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    marginRight: wwrosw(10),
    borderRadius: theme.borderRadius,
    overflow: "hidden",
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
