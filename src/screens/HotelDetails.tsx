import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ImageURISource,
  ScrollView,
  Platform,
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
import { showToast } from "../utils/helperFunctions";
import ScreenWithCustomBottomTab from "../components/ScreenWithCustomBottomTab";
import ImageSliderComponent from "../components/HotelDetailsComponents/ImageSliderComponent";

type Props = StackScreenProps<RootStackParamList, "HotelDetails">;

function HotelDetails({ navigation, route }: Props) {
  const Content = () => {
    const hotel = route.params;
    let imagesForSlider: DataType[] = hotel.images.map((item) => {
      return { img: item as ImageURISource };
    });
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [requestedIndex, setRequestedIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [requestResult, setRequestResult] = useState(false);

    function sendFakeRequest() {
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
    }
    return (
      <ScrollView style={{ flex: 1 }}>
        <ImageSliderComponent
          {...{ hotel, requestedIndex, setCurrentImageIndex }}
        />
        <View style={styles.meddleCard}>
          <View style={{ margin: 15, maxWidth: 300, height: 105 }}>
            <FlatList
              horizontal={true}
              data={hotel.images}
              renderItem={({ item, index }) => (
                <View style={{ width: 100 }}>
                  <TouchableOpacity
                    style={[styles.miniImageContainerStyle, { margin: 5 }]}
                    disabled={index == currentImageIndex}
                    onPress={() => {
                      setCurrentImageIndex(index);
                      setRequestedIndex(index);
                    }}
                  >
                    <Image
                      source={{ uri: item as string }}
                      style={[
                        styles.miniImageStyle,
                        {
                          borderWidth: index == currentImageIndex ? 1 : 0,
                          borderColor:
                            index == currentImageIndex
                              ? theme.secondary
                              : undefined,
                        },
                      ]}
                    />
                  </TouchableOpacity>
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
            </View>
          </View>
        </View>
        <View style={{ left: 20, marginTop: height / 2 - 140 }}>
          <Text style={styles.title}>{hotel.name}</Text>
          <View style={{ marginBottom: 40 }}>
            <MedButton
              loading={loading}
              textStyle={{ color: theme.actionColorText, fontSize: 20 }}
              style={{
                width: 140,
                height: 50,
                marginTop: 10,
                borderRadius: theme.buttonBorderRadius,
              }}
              onPress={() => {
                setLoading(true);
                sendFakeRequest();
              }}
              title="Book now"
              color={theme.actionColor}
            />
          </View>
        </View>
      </ScrollView>
    );
  };
  // return <Content />;
  return (
    <ScreenWithCustomBottomTab content={<Content />} navigation={navigation} />
  );
}

export default HotelDetails;

const styles = StyleSheet.create({
  miniImageContainerStyle: {
    width: 90,
    height: 90,
    borderRadius: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  miniImageStyle: {
    width: 90,
    height: 90,
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
