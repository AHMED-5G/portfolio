import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../constants/myColors";

const DrawerProfileCard = () => {
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <View style={styles.imageContainer}>
        <Image
          resizeMode="center"
          style={{ width: 60, height: 60, borderRadius: 80 }}
          source={{
            uri: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60u",
          }}
        />
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            color: theme.baseTextColor(),
          }}
        >
          {"Gamal Baksh"}
        </Text>
        <Text style={{ fontSize: 12, color: theme.baseTextColor() }}>
          {"@Gamal_Baksh"}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          width: 70,
          flexDirection: "row",
        }}
      >
        <MaterialCommunityIcons
          name="dots-horizontal-circle-outline"
          size={37}
          color={theme.iconColor()}
          disabled
        />
      </TouchableOpacity>
    </View>
  );
};

export default DrawerProfileCard;

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 10,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});
