import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { Contributor, ContributorAccount } from "../types";
import { LinearGradient } from "expo-linear-gradient";
import ContributorAccountCard from "./ContributorAccountCard";
import { shuffleArray } from "../utils/helperFunctions";

type Props = {
  contributor: Contributor;
};

const ContributorCard = ({ contributor }: Props) => {
  return (
    <View
      style={{
        margin: 10,
        // height: 280,
        // width: 200,
        width: 180,
        padding: 15,
        borderRadius: 10,
        marginBottom: 90,
        backgroundColor: "white",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        elevation: 1,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
      }}
    >
      <View style={styles.imageContainer}>
        <Image
          resizeMode="center"
          style={{ width: 80, height: 80, borderRadius: 80 }}
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
          backgroundColor: "black",
          width: "100%",
          opacity: 0.5,
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
  imageContainer: {
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
    marginTop: 0,
    height: 30,
  },
  titleText: {
    fontSize: 12,
    color: "black",
    fontWeight: "700",
    textTransform: "uppercase",
  },
  socialContainer: {
    marginLeft: 5,
    height: 40,
    marginTop: 5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginBottom: 5,
  },
});
