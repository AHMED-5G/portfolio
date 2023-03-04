//https://www.figma.com/file/B9OgBKLpDWj4JjwsdYYRFW/auction-app-(Community)?node-id=6%3A764&t=80vYuaDUFt5RAYhI-0
import { StyleSheet, View, FlatList, Text } from "react-native";
import React from "react";
import { HorseInAuction } from "../../types";
import AuctionCard from "./AuctionCard";
import AuctionIcon from "../../../assets/icons";
import { myColors } from "../../constants/myColors";
import { horsesInAuction } from "../../../dummy/horsesDummy/horsesDummy";

type Props = {
  auctions: HorseInAuction[];
  isModalActive: boolean;
};

const HorseAuction = ({ auctions, isModalActive }: Props) => {
  return (
    <>
      {isModalActive ? (
        <View>
          <View style={{ marginBottom: 7 }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                color: myColors.black,
                marginLeft: 5,
              }}
            >
              Auctions
            </Text>
          </View>
          <FlatList
            style={{ marginBottom: 60 }}
            data={auctions}

            renderItem={({ item }) => {
              return <AuctionCard auction={item} />;
            }}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      ) : (
        <View
          style={{
            justifyContent: "center",
            alignSelf: "flex-end",
            alignContent: "center",
            alignItems: "flex-end",
            borderRadius: 28,
            margin: 10,
            backgroundColor: "#8d1a45",
          }}
        >
          <AuctionIcon height={28} width={28} style={{ margin: 10 }} />
        </View>
      )}
    </>
  );
};

export default HorseAuction;

const styles = StyleSheet.create({});
