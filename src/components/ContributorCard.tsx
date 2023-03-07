import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { Contributor, ContributorAccount } from "../types";
import { LinearGradient } from "expo-linear-gradient";
import ContributorAccountCard from "./ContributorAccountCard";
import { shuffleArray } from "../utils/helperFunctions";
import { theme } from "../constants/myColors";

type Props = {
  contributor: Contributor;
};

const ContributorCard = ({ contributor }: Props) => {
  return (
    <View
      style={{
        marginRight: 15,

        width: 180,
        borderRadius: 10,
        backgroundColor: "white",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
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
});
