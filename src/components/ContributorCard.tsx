import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { Contributor, ContributorAccount } from "../types";
import { LinearGradient } from "expo-linear-gradient";
import ContributorAccountCard from "./ContributorAccountCard";

type Props = {
  contributor: Contributor;
};

const ContributorCard = ({ contributor }: Props) => {
  return (
    <View
      style={{
        margin: 10,
        width: 240,
        height: 320,
        borderRadius: 20,
        marginBottom: 90,
      }}
    >
      <LinearGradient
        colors={["#008fa1", "#2fe0fe", "#2b68dd"]}
        //   style={styles.button}
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          height: 320,
        }}
      >
        <View
          style={{
            marginTop: 20,
          }}
        >
          <View style={styles.imageContainer}>
            <Image
              resizeMode="center"
              style={{ width: 99, height: 99, borderRadius: 100 }}
              source={{ uri: contributor.image }}
            />
          </View>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{contributor.name}</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{contributor.title}</Text>
        </View>
        <View style={styles.socialContainer}>
          <View
            style={{
              marginTop: 25,
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "black",
                fontWeight: "bold",
              }}
              accessibilityHint={"for " + contributor.name}
            >
              Get in touch at
            </Text>
          </View>
          <View>
            <FlatList
              data={contributor.accounts}
              numColumns={4}
              renderItem={({ item }: { item: ContributorAccount }) => (
                <ContributorAccountCard account={item} />
              )}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default ContributorCard;

const styles = StyleSheet.create({
  imageContainer: {
    width: 110,
    height: 110,
    borderRadius: 100,

    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  nameContainer: {
    marginTop: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  nameText: {
    fontSize: 22,
    color: "black",
    fontWeight: "800",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
    textTransform: "uppercase",
  },
  titleContainer: {
    marginTop: 10,
    height: 30,
  },
  titleText: {
    fontSize: 12,
    color: "black",
    fontWeight: "700",
    textTransform: "uppercase",
  },
  socialContainer: {
    width: 190,
    height: 100,
    backgroundColor: "white",
    borderColor: "white",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginBottom: 5,
  },
});
