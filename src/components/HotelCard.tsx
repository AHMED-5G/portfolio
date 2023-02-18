import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import navigation from "../navigation";
import { Hotel, RootStackParamList, RootTabParamList } from "../types";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

type Props = {
  hotel: Hotel;
  //   navigation: StackNavigationProp<RootStackParamList>;
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
        style={{ height: 300 }}
        imageStyle={{ borderRadius: 12 }}
      >
        <View
          style={{
            flex: 1,
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
            <Text style={{ fontSize: 12, color: "white", fontWeight: "900" }}>
              {hotel.rate}
            </Text>
            <AntDesign name={"star"} color="white" style={{ marginLeft: 4 }} />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
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
    color: "white",
  },
  secondlyTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
});
