import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { width } from "../../constants/Layout";
import { theme } from "../../constants/myColors";

type Props = { title: string };

const SettingsSectionTitle = ({ title }: Props) => {
  return (
    <View
      style={{
        justifyContent: "center",
        height: 40,
        width: width,
        backgroundColor: theme.primary(),
        marginTop: 10,
        // marginLeft: 10,
      }}
    >
      <Text
        style={{
          marginLeft: 10,
          fontSize: 20,
          fontWeight: "bold",
          color: theme.primaryText(),
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default SettingsSectionTitle;

const styles = StyleSheet.create({});
