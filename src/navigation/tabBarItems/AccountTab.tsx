import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { tabContainerStyle, tabColor, tabTextStyle } from "./styles";
import Animated, { StyleProps } from "react-native-reanimated";

type Props = {
  isFocused: boolean;
  label: string;
};

const AccountTab = (props: Props) => {
  return (
    <View style={[tabContainerStyle, { marginTop: 0 }]}>
      <Ionicons
        name="person-outline"
        size={33}
    
        color={tabColor(props.isFocused)}
      />
      <Text style={tabTextStyle(props.isFocused)}>{/* {props.label} */}</Text>
    </View>
  );
};

export { AccountTab };

const styles = StyleSheet.create({});
