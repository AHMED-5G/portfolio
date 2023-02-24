import {
  OpaqueColorValue,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import navigation from "../../navigation";
import { useNavigation } from "@react-navigation/native";
import { height } from "../../constants/Layout";

type Props = {
  color?: string | OpaqueColorValue | undefined;
  size?: number;
  position?: "relative" | undefined;
  top?: string | number;
};

const BackArrow = ({ color, size, position, top }: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      accessibilityHint="back"
      onPress={() => navigation.goBack()}
      style={{
        position: position ?? "absolute",
        zIndex: 1,
        top: top ?? 0.051 * height,
        left: 12,
        backgroundColor: "white",
        borderRadius: 12,
        height: 48,
        width: 48,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Ionicons name="arrow-back" size={size ?? 42} color={color} />
    </TouchableOpacity>
  );
};

export default BackArrow;

const styles = StyleSheet.create({});
