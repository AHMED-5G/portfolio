import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../constants/myColors";

type Props = {};

const SearchComponent = ({}: Props) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: 48,
        height: 48,
        marginLeft: 10,
      }}
      onPress={() => {}}
    >
      <Ionicons
        disabled
        name="search-sharp"
        size={38}
        color={theme.iconColor()}
      />
    </TouchableOpacity>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({});
