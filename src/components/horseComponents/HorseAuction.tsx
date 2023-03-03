//https://www.figma.com/file/B9OgBKLpDWj4JjwsdYYRFW/auction-app-(Community)?node-id=6%3A764&t=80vYuaDUFt5RAYhI-0
import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { HorseInAuction } from "../../types";
import AuctionCard from "./AuctionCard";

type Props = {
  auctions: HorseInAuction[];
};

const HorseAuction = ({ auctions }: Props) => {
  return (
    <View
      style={{ marginTop: 20, width: "100%", padding: 5,}}
    >
      <FlatList
        data={auctions}
        renderItem={({ item }) => {
          return <AuctionCard auction={item} />;
        }}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HorseAuction;

const styles = StyleSheet.create({});
