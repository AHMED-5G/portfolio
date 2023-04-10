import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Product } from "../../../types";
import { width } from "../../../constants/Layout";
import { myColors } from "../../../constants/myColors";
import { Slider } from "react-native-range-slider-expo";
import ProductImageComponent from "./ProductImageComponent";
import AddToCartButtonComponent from "./AddToCartButtonComponent";
import { productCardWidth } from "./style";

type Props = {
  product: Product;
};

const ProductUpTo100 = ({ product }: Props) => {
  const [counter, setCounter] = useState(1);
  return (
    <View
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: productCardWidth,
        backgroundColor: "white",
        marginTop: 100,
        borderRadius: 20,
      }}
    >
      <ProductImageComponent product={product} />
      <View
        style={{
          marginTop: 10,
          backgroundColor: "white",
          marginLeft: 5,
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "400" }}>
          {"$" + product.price}
        </Text>
        <Text style={{ fontSize: 24, fontWeight: "400", marginLeft: 10 }}>
          {"X"}
        </Text>
        <Text style={{ fontSize: 24, fontWeight: "400", marginLeft: 10 }}>
          {counter}
        </Text>
        <Text style={{ fontSize: 24, fontWeight: "400", marginLeft: 10 }}>
          {"="}
        </Text>
        <Text style={{ fontSize: 24, fontWeight: "400", marginLeft: 10 }}>
          {"$" + Math.round(product.price * counter * 100) / 100}
        </Text>
      </View>
      <View style={styles.sliderContainer}>
        <Slider
          min={1}
          max={100}
          step={1}
          valueOnChange={(value) => {
            setCounter(value);
          }}
          initialValue={18}
          knobColor="black"
          valueLabelsBackgroundColor="black"
          inRangeBarColor={myColors.grey2}
          outOfRangeBarColor={myColors.grey5}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <AddToCartButtonComponent />
      </View>
    </View>
  );
};

export default ProductUpTo100;

const styles = StyleSheet.create({
  sliderContainer: {
    height: 100,
    marginTop: 20,
    width: productCardWidth * 0.6,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
