import {  TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../constants/theme";
import { circularRatio, hwrosh, wwrosw } from "../../constants/Layout";



const SearchComponent = () => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: wwrosw(48),
        height: hwrosh(48),
        marginLeft: 10,
      }}
      onPress={() => {}}
    >
      <Ionicons
        disabled
        name="search-sharp"
        size={circularRatio(38)}
        color={theme.iconColor()}
      />
    </TouchableOpacity>
  );
};

export default SearchComponent;

