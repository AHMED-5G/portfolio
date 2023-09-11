import { Text, View } from "react-native";
import React from "react";
import { theme } from "../../constants";
import { i18n } from "../../translation/i18n";

const LoginTitle = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: theme.fontSize.s18,
          fontWeight: "bold",
          color: theme.baseTextColor(),
        }}
      >
        {i18n.t("login")}
      </Text>
    </View>
  );
};

export default LoginTitle;
