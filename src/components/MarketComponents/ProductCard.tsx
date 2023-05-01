import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Product, ProductTypes } from "../../types";
import Product10Step from "./ProductCards/Product10Step";
// import ProductMax10 from "./ProductCards/ProductMax10";
import ProductUpTo100 from "./ProductCards/ProductUpTo100";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <View>
      {product.type == ProductTypes.Product10Step ? (
        <Product10Step product={product} />
      ) : product.type == ProductTypes.upTo100 ? (
        <ProductUpTo100 product={product} />
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
