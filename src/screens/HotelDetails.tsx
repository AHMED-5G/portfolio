import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { RootStackParamList } from "../types";
import { height, width } from "../constants/Layout";
import { myColors } from "../constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { FontAwesome5 } from "@expo/vector-icons";
import { Rating } from "react-native-ratings";
import MedButton from "../components/mini/MedButton";

type Props = StackScreenProps<RootStackParamList, "HotelDetails">;

function HotelDetails({ navigation, route }: Props) {
  const hotel = route.params;

  return (
    <View>
      <Image
        source={{ uri: hotel.images[0] }}
        style={{
          zIndex: 0,
          position: "absolute",
          width,
          height: height / 2,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: height / 2 - 50,
          width: 316,
          height: 326,
          left: (width - 316) / 2,
          borderRadius: 20,
          backgroundColor: "#FAFAFA",
          zIndex: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 21,
          }}
        >
          <Image
            source={{ uri: hotel.images[1] }}
            style={styles.miniImageStyle}
          />
          <Image
            source={{ uri: hotel.images[2] }}
            style={styles.miniImageStyle}
          />
          <Image
            source={{ uri: hotel.images[3] }}
            style={styles.miniImageStyle}
          />
        </View>
        <View style={{ marginTop: 15, marginLeft: 15 }}>
          <TouchableOpacity>
            <Text style={styles.secondlyTitle}>Address</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Text>
              <Entypo name="map" size={24} color="black" />
            </Text>
            <Text style={styles.smallText}> {hotel.address}</Text>
          </View>
        </View>
        <View style={{ marginTop: 15, marginLeft: 15 }}>
          <TouchableOpacity>
            <Text style={styles.secondlyTitle}>Reviews</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text>
              <FontAwesome5 name="smile" size={24} color="black" />{" "}
            </Text>
            <Rating
              type="custom"
              ratingCount={+hotel.rate}
              imageSize={30}
              ratingColor="#94C7D2"
              tintColor="#FAFAFA"
            />
            <View
              style={{
                borderRadius: 5,
                backgroundColor: "#94C7D2",
                width: 28,
                height: 22,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 12, color: "white", fontWeight: "300" }}>
                {hotel.rate}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ position: "absolute", top: height - 100, left: 20 }}>
        <Text style={styles.title}>{hotel.name}</Text>
        <View>
          <MedButton
            textStyle={{ color: "#FFF" }}
            style={{ width: 149, height: 43 }}
            borderRadius={11}
            onPress={() => {}}
            title="Book now"
            color={"#94C7D2"}
          />
        </View>
      </View>
    </View>
  );
}

export default HotelDetails;

const styles = StyleSheet.create({
  miniImageContainerStyle: {
    width: 91,
    height: 91,
    borderRadius: 10,
    borderWidth: 3,
    borderStartColor: "#94C7D2",
  },
  miniImageStyle: {
    width: 86,
    height: 86,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 36,
  },
  secondlyTitle: {
    fontSize: 22,
    color: myColors.black,
    fontWeight: "bold",
  },
  myStarStyle: {
    color: "#94C7D2",
    backgroundColor: "transparent",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: "white",
  },
  smallText: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: "700",
    color: "#505050",
  },
});
