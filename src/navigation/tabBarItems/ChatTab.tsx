import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { tabContainerStyle, tabColor, tabTextStyle } from "./styles";
import Animated, { StyleProps } from "react-native-reanimated";
import TabText from "./TabText";

type Props = {
  isFocused: boolean;
  label: string;
};

const ChatTab = ({ ...props }: Props) => {
  return (
    <View style={[tabContainerStyle, { marginTop: 0 }]}>
      <Ionicons
        name="chatbox-outline"
        size={34}
        color={tabColor(props.isFocused)}
      />
      <TabText isFocused={props.isFocused} />
    </View>
  );
};

export { ChatTab };

const styles = StyleSheet.create({});
