import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MedButton from "../../mini/MedButton";
import { width } from "../../../constants/Layout";

type Props = {};

const AddToCartButtonComponent = (props: Props) => {
  return (
    <View style={{ marginTop: 10, marginBottom: 10 }}>
      <MedButton
        title="Add to cart"
        width={width / 2 - 15}
        borderRadius={10}
        color={"#0461cf"}
        onPress={() => {}}
      />
    </View>
  );
};

export default AddToCartButtonComponent;

const styles = StyleSheet.create({});
