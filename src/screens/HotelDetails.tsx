import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { RootStackParamList } from "../types";
import {
  averageRatio,
  circularRatio,
  fontRatio,
  height,
  hwrosh,
  width,
  wwrosw,
} from "../constants/Layout";
import { myColors, theme } from "../constants/myColors";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { FontAwesome5 } from "@expo/vector-icons";
import MedButton from "../components/mini/MedButton";
//import { DataType } from "react-native-image-slider-banner/src";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import Stars from "react-native-stars";
import { showToast } from "../utils/helperFunctions";
import ScreenWithCustomBottomTab from "../components/ScreenWithCustomBottomTab";
import ImageSliderComponent from "../components/HotelDetailsComponents/ImageSliderComponent";
// import DateTimePicker from "@react-native-community/datetimepicker";
import { i18n } from "../translation/i18n";
// import DatePicker from "react-native-datepicker";
import { RouteProp } from "@react-navigation/native";
interface Props {
  navigation: StackScreenProps<RootStackParamList, "HotelDetails">;
  route: RouteProp<RootStackParamList, "HotelDetails">;
}
function HotelDetails({ route }: Props) {
  // const [date, setDate] = useState("09-10-2020");

  const hotel = route.params;
  const Content = () => {
    // const imagesForSlider: DataType[] = hotel.images.map((item) => {
    //   return { img: item as ImageURISource };
    // });
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [requestedIndex, setRequestedIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [requestResult, setRequestResult] = useState(false);

    function sendFakeRequest() {
      setTimeout(() => {
        setLoading(false);
        showToast(
          requestResult
            ? i18n.t("requestSentSuccessfully")
            : i18n.t("requestFailedToSend"),
          requestResult
            ? (theme.alertSuccessColor as string)
            : (theme.alertFailColor as string)
        );
        setRequestResult(!requestResult);
      }, 3000);
    }
    return (
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <ImageSliderComponent
          {...{ hotel, requestedIndex, setCurrentImageIndex }}
        />
        <View
          style={[
            styles.meddleCard,
            { backgroundColor: theme.cardBackground() },
          ]}
        >
          <View
            style={{
              margin: averageRatio(15),
              maxWidth: wwrosw(300),
              height: hwrosh(105),
            }}
          >
            <FlatList
              horizontal={true}
              data={hotel.images}
              renderItem={({ item, index }) => (
                <View style={{ width: wwrosw(100) }}>
                  <TouchableOpacity
                    style={[
                      styles.miniImageContainerStyle,
                      { margin: averageRatio(5) },
                    ]}
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
                          borderWidth:
                            index == currentImageIndex ? averageRatio(1) : 0,
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
          <View style={{ marginTop: hwrosh(2), marginLeft: wwrosw(15) }}>
            <View>
              <Text
                style={[styles.secondlyTitle, { color: theme.baseTextColor() }]}
              >
                {i18n.t("address")}
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                alignContent: "center",
                flexDirection: theme.freezeInLeftWhenIsRTLTrue(),
                marginLeft: wwrosw(5),
              }}
            >
              <Text>
                <Entypo
                  disabled
                  name="map"
                  size={circularRatio(24)}
                  color={theme.iconColor()}
                />
              </Text>
              <View
                style={{
                  marginLeft: wwrosw(5),
                }}
              >
                <Text
                  style={[styles.smallText, { color: theme.baseTextColor() }]}
                >
                  {hotel.address}
                </Text>
              </View>
            </View>
          </View>
          <View style={{ marginTop: hwrosh(15), marginLeft: wwrosw(15) }}>
            <View>
              <Text
                style={[styles.secondlyTitle, { color: theme.baseTextColor() }]}
              >
                {i18n.t("reviews")}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <View>
                <Text>
                  <FontAwesome5
                    name="smile"
                    size={circularRatio(24)}
                    color={theme.iconColor()}
                  />
                </Text>
              </View>
              <View style={{ marginLeft: wwrosw(5) }}>
                <Stars
                  default={hotel.rate}
                  count={5}
                  starSize={circularRatio(50)}
                  fullStar={
                    <AntDesign
                      accessibilityHint="1 filled star from 5"
                      name={"star"}
                      style={[
                        styles.myStarStyle,
                        {
                          color: !theme.darkTheme
                            ? theme.actionColor
                            : "#c7d0e0",
                        },
                      ]}
                    />
                  }
                  emptyStar={
                    <AntDesign
                      name={"staro"}
                      accessibilityHint="1 empty star from 5"
                      style={[
                        styles.myStarStyle,
                        styles.myEmptyStarStyle,

                        { color: theme.baseTextColor() },
                      ]}
                    />
                  }
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginLeft: wwrosw(20),
            marginTop: height / 2 - hwrosh(140),
          }}
        >
          <View style={{ margin: averageRatio(20) }}>
            <Text style={[styles.title, { color: theme.baseTextColor() }]}>
              {hotel.name}
            </Text>
          </View>
          <View
            style={{
              marginBottom: hwrosh(20),
              marginLeft: wwrosw(20),
              width: wwrosw(120),
            }}
          >
            <MedButton
              loading={loading}
              textStyle={{
                color: theme.actionButtonTextColor(),
                fontSize: fontRatio(20),
              }}
              style={{
                width: "100%",
                height: hwrosh(50),
                marginTop: hwrosh(10),
                borderRadius: theme.buttonBorderRadius,
                backgroundColor: theme.actionButtonBackground(),
              }}
              onPress={() => {
                setLoading(true);
                sendFakeRequest();
              }}
              title={i18n.t("bookNow")}
            />
          </View>
        </View>
        {/* <DateTimePicker mode="date" display="spinner" value={new Date()} /> */}
      </ScrollView>
    );
  };
  return (
    <ScreenWithCustomBottomTab
      content={<Content />}
      CustomBottomTabComponents={[
        <Text
          key={hotel.name}
          style={{
            fontSize: fontRatio(22),
            fontWeight: "700",
            color: theme.baseTextColor(),
          }}
        >
          {hotel.name}
        </Text>,
      ]}
    />
  );
}

export default HotelDetails;

const styles = StyleSheet.create({
  miniImageContainerStyle: {
    width: wwrosw(90),
    height: hwrosh(90),
    borderRadius: averageRatio(10),
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  miniImageStyle: {
    width: wwrosw(90),
    height: hwrosh(90),
    borderRadius: averageRatio(10),
  },
  title: {
    fontSize: fontRatio(28),
    fontWeight: "700",
    lineHeight: fontRatio(36),
  },
  secondlyTitle: {
    fontSize: fontRatio(22),
    color: myColors.black,
    fontWeight: "bold",
  },
  myStarStyle: {
    color: theme.actionColor,
    backgroundColor: "transparent",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    fontSize: fontRatio(22),
  },
  myEmptyStarStyle: {
    color: "white",
    fontSize: fontRatio(22),
  },
  smallText: {
    fontSize: fontRatio(14),
    lineHeight: fontRatio(17),
    fontWeight: "700",
    color: "#505050",
  },
  meddleCard: {
    position: "absolute",
    top: height / 2 - 40,
    width: wwrosw(316),
    height: hwrosh(300),
    left: (width - wwrosw(316)) / 2,
    borderRadius: averageRatio(20),
    backgroundColor: "#FAFAFA",
    zIndex: 999,
    overflow: "hidden",
  },
});
