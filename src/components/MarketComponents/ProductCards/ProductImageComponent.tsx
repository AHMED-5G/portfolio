import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { width } from "../../../constants/Layout";
import { Product } from "../../../types";
import { productCardWidth } from "./style";

type Props = { product: Product };

const ProductImageComponent = ({ product }: Props) => {
  return (
    <View
      style={{
        // backgroundColor: "#EEE",
        borderRadius: 20,
        // width: productCardWidth * 0.3,
      }}
    >
      <Image
        source={{
          uri: product.image,
        }}
        resizeMode="cover"
        style={{
          width: productCardWidth / 2 - 10,
          height: 170,
          borderRadius: 20,
        }}
      />
    </View>
  );
};

export default ProductImageComponent;

const styles = StyleSheet.create({});
