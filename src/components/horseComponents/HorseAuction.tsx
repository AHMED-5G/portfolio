//https://www.figma.com/file/B9OgBKLpDWj4JjwsdYYRFW/auction-app-(Community)?node-id=6%3A764&t=80vYuaDUFt5RAYhI-0
import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import { HorseInAuction } from "../../types";
import AuctionCard from "./AuctionCard";
import AuctionIcon from "../../../assets/icons";
import { myColors } from "../../constants/myColors";

type Props = {
  auctions: HorseInAuction[];
  isModalActive: boolean;
};

const HorseAuction = ({ auctions, isModalActive }: Props) => {
  return (
    <>
      {isModalActive ? (
        <View style={{ width: "100%", padding: 5 }}>
          <FlatList
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
            backgroundColor: myColors.white,
            borderRadius: 28,
            marginTop: 10,
          }}
        >
          <AuctionIcon
            color={myColors.black}
            height={40}
            width={40}
            style={{ margin: 10 }}
          />
        </View>
      )}
    </>
  );
};

export default HorseAuction;

const styles = StyleSheet.create({});
