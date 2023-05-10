import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React, { useState } from "react";
import { Contributor, ContributorAccount } from "../types";
import ContributorAccountCard from "./ContributorAccountCard";
import { theme } from "../constants/myColors";
import MyCustomSkeleton from "./MyCustomSkeleton";

type Props = {
  contributor: Contributor;
};
const imageSize = 80;
const cardWidth = 160;
const ContributorCard = ({ contributor }: Props) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <View style={styles.container}>
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
          resizeMode="center"
          style={styles.image}
          source={{ uri: contributor.image }}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{contributor.name}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{contributor.title}</Text>
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
    </View>
  );
};

export default ContributorCard;

const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    marginRight: 10,
    borderRadius: theme.borderRadius,
    backgroundColor: "white",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  imageContainer: {
    marginTop: 10,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  nameContainer: {
    marginTop: 5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  nameText: {
    fontSize: 22,
    color: "black",
    fontWeight: "800",
    textTransform: "uppercase",
  },
  titleContainer: {
    marginBottom: 5,
  },
  titleText: {
    color: "black",
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: 12,
  },
  socialContainer: {
    height: 40,
    marginTop: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginBottom: 5,
  },
  image: {
    height: imageSize,
    width: imageSize,
    borderRadius: imageSize,
  },
});
