import { ColorValue, StyleSheet } from "react-native";
import React from "react";
import SkeletonLoader from "expo-skeleton-loader";
import { theme } from "../constants/myColors";
import { LoaderItemStyle } from "expo-skeleton-loader/lib/Constants";

type Props = {
  style: LoaderItemStyle;
  duration?: number;
  boneColor?: string;
  highlightColor?: ColorValue;
};

const MyCustomSkeleton = ({
  style,
  duration = 1000,
  boneColor = "#EEE",
  highlightColor = theme.primary(),
}: Props) => {
  return (
    <SkeletonLoader
      boneColor={boneColor}
      highlightColor={highlightColor as string}
      duration={duration}
    >
      <SkeletonLoader.Item style={style} />
    </SkeletonLoader>
  );
};

export default MyCustomSkeleton;

const styles = StyleSheet.create({});
