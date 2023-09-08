import { Text, View } from "react-native";
import React from "react";
import { i18n } from "../../../translation/i18n";
import { theme } from "../../../constants/theme";

type Props = {
  title?: string;
};

const ModalTitle = ({ title = i18n.t("help") }: Props) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: theme.fontSize.s18,
          fontWeight: "bold",
          color: theme.baseTextColor(),
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default ModalTitle;
