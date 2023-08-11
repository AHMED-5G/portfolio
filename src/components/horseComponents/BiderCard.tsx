import { Text, View, Image } from "react-native";
import React from "react";
import { myColors } from "../../constants/myColors";
import TimeAgo from "react-native-timeago";
import { Bid } from "../../types";


const BiderCard = ({ bid }: { bid: Bid }) => {
  const textColor = myColors.white;
  return (
    <View
      style={{
        marginBottom: 5,
        borderRadius: 10,
        flexDirection: "row",
        borderWidth: 0.5,
        borderColor: myColors.black,
        marginTop: 3,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          {bid.user.image && (
            <View>
              <Image
                source={{ uri: bid.user.image }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  margin: 5,
                }}
              />
            </View>
          )}
          <View style={{ marginTop: 5 }}>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: textColor }}
            >
              {bid.user.name}
            </Text>
            <Text style={{ color: textColor }}>
              <TimeAgo time={new Date(bid.timeStamp)} />
            </Text>
          </View>
        </View>
        <View style={{ margin: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: textColor }}>
            ${bid.amount}K
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BiderCard;


