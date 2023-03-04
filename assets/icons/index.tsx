import * as React from "react";
import { ColorValue, StyleProp, ViewStyle } from "react-native";
import { NumberProp } from "react-native-svg";

import Auction from "./auction.svg";

export default function AuctionIcon({
  height = "300",
  width = "100",
  color,
  style,
}: {
  height?: NumberProp;
  width?: NumberProp;
  color?: ColorValue;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <Auction
      fontSize={20}
      fontWeight="bold"
      style={style}
      width={width}
      height={height}
      color={color}
    />
  );
}
