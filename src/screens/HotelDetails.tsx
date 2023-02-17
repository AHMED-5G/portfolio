import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ImageSourcePropType,
  ImageURISource,
} from "react-native";
import React, { useState } from "react";
import { RootStackParamList } from "../types";
import { height, width } from "../constants/Layout";
import { myColors } from "../constants/Colors";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { FontAwesome5 } from "@expo/vector-icons";
import { Rating } from "react-native-ratings";
import MedButton from "../components/mini/MedButton";
import { ImageSlider } from "../components/mini/CustomImageSlider";
import { DataType } from "react-native-image-slider-banner/src";
import Stars from "react-native-stars";

type Props = StackScreenProps<RootStackParamList, "HotelDetails">;

function HotelDetails({ navigation, route }: Props) {
  const hotel = route.params;
  console.log(hotel.rate);
  let imagesForSlider: DataType[] = hotel.images.map((item) => {
    return { img: item as ImageURISource };
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [requestedIndex, setRequestedIndex] = useState(0);

  return (
    <View>
      <View
        style={{
          zIndex: 0,
          // position: "absolute",
          width,
          height: height / 2,
        }}
      >
        <ImageSlider
          data={imagesForSlider}
          requestedIndex={requestedIndex}
          onItemChangedWithIndex={(_, index) => {
            setCurrentImageIndex(index);
          }}
          caroselImageStyle={{
            height: height / 2,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
          closeIconColor="#fff"
        />
      </View>
      <View style={styles.meddleCard}>
        <View style={{ margin: 15, maxWidth: 300, height: 120 }}>
          <FlatList
            horizontal={true}
            data={hotel.images}
            renderItem={({ item, index }) => (
              <View style={{ width: 100 }}>
                {index == currentImageIndex ? (
                  <View style={[styles.miniImageContainerStyle, { margin: 5 }]}>
                    <Image
                      source={{ uri: item as string }}
                      style={styles.miniImageStyle}
                    />
                  </View>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      setCurrentImageIndex(index);
                      setRequestedIndex(index);
                    }}
                    style={{ margin: 5 }}
                  >
                    <Image
                      source={{ uri: item as string }}
                      style={styles.miniImageStyle}
                    />
                  </TouchableOpacity>
                )}
              </View>
            )}
            keyExtractor={(_: string, index: number) => index.toString()}
            showsHorizontalScrollIndicator={false}
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
            <Stars
              default={hotel.rate}
              count={5}
              starSize={50}
              fullStar={
                <AntDesign name={"star"} style={[styles.myStarStyle]} />
              }
              emptyStar={
                <AntDesign
                  name={"staro"}
                  style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                />
              }
            />
            <View
              style={{
                marginLeft: 7,
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
    borderWidth: 5,
    borderColor: "#94C7D2",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  miniImageStyle: {
    width: 86,
    height: 86,
    borderRadius: 10,
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
    fontSize: 22,
  },
  myEmptyStarStyle: {
    color: "white",
    fontSize: 22,
  },
  smallText: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: "700",
    color: "#505050",
  },
  meddleCard: {
    position: "absolute",
    top: height / 2 - 40,
    width: 316,
    height: 326,
    left: (width - 316) / 2,
    borderRadius: 20,
    backgroundColor: "#FAFAFA",
    zIndex: 999,
    overflow: "hidden",
  },
});
