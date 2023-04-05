import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {};

const SearchComponent = (props: Props) => {
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
    >
      <Ionicons disabled name="search-sharp" size={38} color="black" />
    </TouchableOpacity>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({});
