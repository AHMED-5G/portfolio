import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ImageURISource,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { RootStackParamList } from "../types";
import { height, width } from "../constants/Layout";
import { myColors, theme } from "../constants/myColors";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { FontAwesome5 } from "@expo/vector-icons";
import MedButton from "../components/mini/MedButton";
import { ImageSlider } from "../components/mini/CustomImageSlider";
import { DataType } from "react-native-image-slider-banner/src";
//@ts-ignore
import Stars from "react-native-stars";
import BackArrow from "../components/mini/BackArrow";
import { showToast } from "../utils/helperFunctions";

type Props = StackScreenProps<RootStackParamList, "HotelDetails">;

function HotelDetails({ navigation, route }: Props) {
  const hotel = route.params;
  let imagesForSlider: DataType[] = hotel.images.map((item) => {
    return { img: item as ImageURISource };
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [requestedIndex, setRequestedIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [requestResult, setRequestResult] = useState(false);

  const sendFakeRequest = () => {
    setTimeout(() => {
      setLoading(false);
      showToast(
        requestResult
          ? "Request sent successfully!"
          : "Request failed to send.",
        requestResult ? myColors.Baltic : myColors.redFavorite
      );
      setRequestResult(!requestResult);
    }, 3000);
  };
  return (
    <>
      <BackArrow color={"#94C7D2"} />
      <ScrollView style={{ height }}>
        <View
          style={{
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
          <View style={{ margin: 15, maxWidth: 300, height: 105 }}>
            <FlatList
              horizontal={true}
              data={hotel.images}
              renderItem={({ item, index }) => (
                <View style={{ width: 100 }}>
                  {index == currentImageIndex ? (
                    <View
                      style={[styles.miniImageContainerStyle, { margin: 5 }]}
                    >
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
          <View style={{ marginTop: 2, marginLeft: 15 }}>
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
                  <AntDesign
                    accessibilityHint="1 filled star from 5"
                    name={"star"}
                    style={[styles.myStarStyle]}
                  />
                }
                emptyStar={
                  <AntDesign
                    name={"staro"}
                    accessibilityHint="1 empty star from 5"
                    style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                  />
                }
              />
              <View
                style={{
                  marginLeft: 7,
                  borderRadius: 5,
                  backgroundColor: theme.secondary,
                  width: 28,
                  height: 22,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: theme.secondaryText,
                    fontWeight: "300",
                  }}
                  accessibilityHint={hotel.rate + "stars"}
                >
                  {hotel.rate}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ left: 20, marginTop: height / 2 - 140 }}>
          <Text style={styles.title}>{hotel.name}</Text>
          <View style={{ marginBottom: 40 }}>
            <MedButton
              loading={loading}
              textStyle={{ color: theme.actionColorText, fontSize: 20 }}
              style={{ width: 140, height: 50, marginTop: 10 }}
              borderRadius={5}
              onPress={() => {
                setLoading(true);
                sendFakeRequest();
              }}
              title="Book Now"
              color={theme.actionColor}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default HotelDetails;

const styles = StyleSheet.create({
  miniImageContainerStyle: {
    width: 94,
    height: 94,
    borderRadius: 10,
    borderWidth: 7,
    borderColor: "#009ACE",
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
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 36,
  },
  secondlyTitle: {
    fontSize: 22,
    color: myColors.black,
    fontWeight: "bold",
  },
  myStarStyle: {
    color: theme.actionColor,
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
    height: 300,
    left: (width - 316) / 2,
    borderRadius: 20,
    backgroundColor: "#FAFAFA",
    zIndex: 999,
    overflow: "hidden",
  },
});
