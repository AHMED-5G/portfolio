import { Text, View } from "react-native";
import React from "react";
import { fontRatio, hwrosh, width, wwrosw } from "../../constants/Layout";
import { theme } from "../../constants/theme";

type Props = { title: string };

const SettingsSectionTitle = ({ title }: Props) => {
  return (
    <View
      style={{
        justifyContent: "center",
        height: hwrosh(40),
        width: width,
        backgroundColor: theme.primary(),
        marginTop: hwrosh(10),
      }}
    >
      <Text
        style={{
          marginLeft: wwrosw(10),
          fontSize: fontRatio(20),
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
