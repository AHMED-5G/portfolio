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
};

const BackArrow = ({ color, size }: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        position: "absolute",
        zIndex: 1,
        top: 0.051 * height,
        left: 12,
        backgroundColor: "white",
        borderRadius: 12,
      }}
    >
      <Ionicons name="arrow-back" size={size ?? 48} color={color} />
    </TouchableOpacity>
  );
};

export default BackArrow;

const styles = StyleSheet.create({});
