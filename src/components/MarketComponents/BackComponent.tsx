import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import { theme } from "../../constants/myColors";

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
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
        transform: theme.iconLocalizationTransform(),
      }}
      accessibilityHint="navigation back"
      onPress={() => {
        navigation.goBack();
      }}
    >
      <AntDesign
        disabled
        name="arrowleft"
        size={38}
        color={theme.iconColor()}
      />
    </TouchableOpacity>
  );
};

export default BackComponent;

const styles = StyleSheet.create({});
