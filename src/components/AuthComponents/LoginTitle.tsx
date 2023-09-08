import { Text, View } from "react-native";
import React from "react";
import { theme } from "../../constants";

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
        Login
      </Text>
    </View>
  );
};

export default LoginTitle;
