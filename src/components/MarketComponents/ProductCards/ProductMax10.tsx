import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Product } from "../../../types";

type Props = {
  product: Product;
};

const ProductMax10 = ({ product }: Props) => {
  return (
    <View>
      <Text>ProductMax10</Text>
    </View>
  );
};

export default ProductMax10;

const styles = StyleSheet.create({});
