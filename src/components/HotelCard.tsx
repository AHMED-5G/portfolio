import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { Hotel } from "../types";
import { theme } from "../constants/myColors";
import { useNavigation } from "@react-navigation/native";
import { getRandomOneItemFromList } from "../utils/helperFunctions";

type Props = {
  hotel: Hotel;
};
const HotelCard = ({ hotel }: Props) => {
  const navigation = useNavigation();
  const cardWidth = 200;
  const borderRadius = theme.cardBorderRadiusWidthFactor * cardWidth;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("HotelDetails", hotel);
      }}
      style={{
        width: cardWidth,
        marginRight: 20,
        backgroundColor: theme.white,
        borderRadius: theme.borderRadius,
        elevation: 1,
        shadowColor: "#EEE",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
      }}
    >
      <Image
        source={{ uri: getRandomOneItemFromList(hotel.images) as string }}
        style={{
          height: 200,
          borderRadius: theme.borderRadius,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
        }}
      />

      <View
        style={{
          marginLeft: 5,
          marginBottom: 10,
        }}
      >
        <Text style={styles.title}>{hotel.name}</Text>
        <Text numberOfLines={1} style={styles.secondlyTitle}>
          {hotel.address}
        </Text>
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
