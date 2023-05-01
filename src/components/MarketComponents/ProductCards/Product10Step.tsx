import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Product } from "../../../types";

type Props = {
  product: Product;
};

const Product10Step = ({ product }: Props) => {
  return (
    <View>
      <Text>ProductEvery10</Text>
    </View>
  );
};

export default Product10Step;

const styles = StyleSheet.create({});
