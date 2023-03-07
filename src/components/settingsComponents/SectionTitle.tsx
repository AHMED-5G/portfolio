import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { width } from "../../constants/Layout";
import { myColors } from "../../constants/myColors";
import { i18n } from "../../translation/i18n";

type Props = { title: string };

const SectionTitle = ({ title }: Props) => {
  return (
    <View
      style={{
        justifyContent: "center",
        height: 40,
        width: width - 5,
        backgroundColor: myColors.grey5,
        marginTop: 10,
      }}
    >
      <Text
        style={{
          marginLeft: 10,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({});
