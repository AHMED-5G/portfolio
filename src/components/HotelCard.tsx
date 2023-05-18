import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Hotel } from "../types";
import { theme } from "../constants/myColors";
import { useNavigation } from "@react-navigation/native";
import { getRandomOneItemFromList } from "../utils/helperFunctions";
import MyCustomSkeleton from "./MyCustomSkeleton";
import { height } from "../constants/Layout";

type Props = {
  hotel: Hotel;
};
const imageHeight = 200;
const HotelCard = ({ hotel }: Props) => {
  const navigation = useNavigation();
  const cardWidth = 200;
  const [imageLoading, setImageLoading] = useState(true);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("HotelDetails", hotel);
      }}
      style={{
        width: cardWidth,
        marginRight: 20,
        backgroundColor: theme.cardBackground(),
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
      {imageLoading && (
        <View
          style={[
            styles.image,
            {
              position: "absolute",
              zIndex: 1,
            },
          ]}
        >
          <MyCustomSkeleton style={{ height: imageHeight, width: cardWidth }} />
        </View>
      )}

      <Image
        source={{ uri: hotel.images[1] }}
        onLoadStart={() => {
          setImageLoading(true);
        }}
        onLoad={() => {
          setImageLoading(false);
        }}
        onLoadEnd={() => {
          setImageLoading(false);
        }}
        style={styles.image}
      />

      <View
        style={{
          marginLeft: 5,
          marginBottom: 10,
          flexDirection: theme.freezeInLeftWhenIsRTLTrue(),
        }}
      >
        <View
          style={{
            marginLeft: 5,
          }}
        >
          <Text style={[styles.title, { color: theme.baseTextColor() }]}>
            {hotel.name}
          </Text>
          <Text
            numberOfLines={1}
            style={[styles.secondlyTitle, { color: theme.baseTextColor() }]}
          >
            {hotel.address}
          </Text>
        </View>
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
  },
  secondlyTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  image: {
    height: imageHeight,
    borderRadius: theme.borderRadius,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
});
