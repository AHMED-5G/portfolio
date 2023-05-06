import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
  // "MarketHomeScreen",
  // undefined
};

const BackComponent = ({ navigation }: Props) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: 48,
        height: 48,
      }}
      accessibilityHint="navigation back"
      onPress={() => {
        navigation.goBack();
      }}
    >
      <AntDesign disabled name="arrowleft" size={38} color="black" />
    </TouchableOpacity>
  );
};

export default BackComponent;

const styles = StyleSheet.create({});
