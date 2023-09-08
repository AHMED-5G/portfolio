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
import { theme } from "../constants/theme";
import MyCustomSkeleton from "./MyCustomSkeleton";
import {
  averageRatio,
  circularRatio,
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

const ContributorCardInDetailsScreen = ({ contributor }: Props) => {
  const [imageLoading, setImageLoading] = useState(true);
  const navigation = useNavigation();
  return (
    <Animated.View
      sharedTransitionTag={contributor.id.toString()}
      style={[
        styles.container,
        {
          marginRight: wwrosw(10),
          backgroundColor: theme.cardBackground(),
        },
      ]}
    >
      <TouchableOpacity
        style={{
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("ContributorsDetails", contributor)}
      >
        <View style={[styles.imageContainer, { marginTop: hwrosh(10) }]}>
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
        <View style={[styles.nameContainer, { marginTop: hwrosh(5) }]}>
          <Text style={[styles.nameText, { color: theme.cardText() }]}>
            {contributor.name}
          </Text>
        </View>
        <View style={{ marginBottom: hwrosh(5) }}>
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
        <View
          style={[
            styles.socialContainer,
            {
              height: hwrosh(40),
              marginTop: hwrosh(10),
              borderRadius: averageRatio(12),
              marginBottom: hwrosh(5),
            },
          ]}
        >
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

export default ContributorCardInDetailsScreen;

const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    borderRadius: theme.borderRadius,
    overflow: "hidden",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  imageContainer: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  nameContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  nameText: {
    fontSize: theme.fontSize.s22,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  titleContainer: {},
  titleText: {
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: theme.fontSize.small,
  },
  socialContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  image: {
    height: imageSize,
    width: imageSize,
    borderRadius: imageSize,
  },
});
