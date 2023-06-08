import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Product, ProductTypes } from "../../../../types";
import SliderInput from "./SliderInput";
import Max10Input from "./Max10Input";

type Props = {
  product: Product;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  counter: number;
};

const InputComponent = ({ product, setCounter, counter }: Props) => {
  return product.type == ProductTypes.upTo100 ? (
    <SliderInput {...{ setCounter , counter }} />
  ) : product.type == ProductTypes.max10 ? (
    <Max10Input {...{ setCounter, counter }} />
  ) : (
    <View></View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({});
