import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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
      style={{ width: 270, height: 320, marginRight: 20 }}
    >
      <ImageBackground
        source={{ uri: hotel.images[0] as string }}
        style={{ height: 300, justifyContent: 'flex-end' }}
        imageStyle={{ borderRadius: 12 }}
      >

        <View
          style={{
            alignContent: "flex-end",
            justifyContent: "flex-end",

            borderBottomRightRadius: 12,
            borderBottomStartRadius: 12,

            backgroundColor: theme.secondary,
          }}
        >
          <View
            style={{
              marginLeft: 20,
              marginBottom: 5,
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
    fontSize: 22,
    fontWeight: "700",
    lineHeight: 36,
    color: theme.secondaryText,
  },
  secondlyTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: theme.secondaryText,
  },
});
