import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Hotel } from "../types";
import { myColors, theme } from "../constants/myColors";
import {
  useNavigation,
  useNavigationContainerRef,
} from "@react-navigation/native";

type Props = {
  hotel: Hotel;
};
const HotelCard = ({ hotel }: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("HotelDetails", hotel);
      }}
      style={{
        width: 200,
        // height: 320,
        marginRight: 20,
        backgroundColor: theme.white,
        borderRadius: 15,
        elevation: 1,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
      }}
    >
      <Image
        source={{ uri: hotel.images[0] as string }}
        style={{
          height: 200,
          borderRadius: 15,
          borderBottomRightRadius: 12,
          borderBottomLeftRadius: 12,
          // borderBottomStartRadius: 12,
        }}

      />

      <View
        style={{
          marginLeft: 5,
        }}
      >
        <Text style={styles.title}>{hotel.name}</Text>
        <Text style={styles.secondlyTitle}>{hotel.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HotelCard;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "700",
    lineHeight: 36,
    color: theme.black,
  },
  secondlyTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: theme.black,
  },
});
