import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Hotel,  } from "../types";
import { useNavigation } from "@react-navigation/native";
import { myColors } from "../constants/Colors";

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
      style={{ width: 270, height: 320, margin: 20 }}
    >
      <ImageBackground
        source={{ uri: hotel.images[0] as string }}
        style={{ height: 300, justifyContent: "space-between" }}
        imageStyle={{ borderRadius: 12 }}
      >
        <View
          style={{
            margin: 15,
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              marginLeft: 7,
              borderRadius: 5,
              backgroundColor: "#94C7D2",
              width: 32,
              height: 22,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 12, color: "black", fontWeight: "900" }}>
              {hotel.rate}
            </Text>
            <AntDesign name={"star"} color="black" style={{ marginLeft: 4 }} />
          </View>
        </View>
        <View
          style={{
            alignContent: "flex-end",
            justifyContent: "flex-end",

            opacity: 0.8,
            backgroundColor: myColors.grey4,
          }}
        >
          <View
            style={{
              marginLeft: 20,
              marginBottom: 15,
            }}
          >
            <Text style={styles.title}>{hotel.name}</Text>
            <Text style={styles.secondlyTitle}>{hotel.address}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default HotelCard;

const styles = StyleSheet.create({
  title: {
    fontSize: 27,
    fontWeight: "700",
    lineHeight: 36,
    color: "black",
  },
  secondlyTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "black",
  },
});
