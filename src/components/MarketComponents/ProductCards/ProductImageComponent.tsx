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
        backgroundColor: "#EEE",
        borderRadius: 10,
        width: productCardWidth,
      }}
    >
      <Image
        source={{
          uri: product.image,
        }}
        resizeMode="cover"
        style={{ width: productCardWidth, height: 200, borderRadius: 10 }}
      />
      <View style={{ margin: 5 }}>
        <Text style={{ fontSize: 15, fontWeight: "400" }}>{product.name}</Text>
      </View>

    </View>
  );
};

export default ProductImageComponent;

const styles = StyleSheet.create({});
