import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { RootStackParamList } from "../types";

import { StackScreenProps } from "@react-navigation/stack";
import { yachtImages, yachtInterior } from "../../dummy/yachtDummy/images";
import { height, width } from "../constants/Layout";
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import LongestDetails from "../components/yachtComponents/LongestDetails";
import LongestGallery from "../components/yachtComponents/LongestGallery";
import { myColors } from "../constants/myColors";

type Props = StackScreenProps<RootStackParamList, "Yachts">;

function Yachts({ navigation }: Props) {
  const openLongestProgress = useSharedValue(0);
  const openGalleryProgress = useSharedValue(0);
  const imagePastAwayProgress0 = useSharedValue(0);
  const imagePastAwayProgress1 = useSharedValue(0);
  const imagePastAwayProgress2 = useSharedValue(0);
  const imagePastAwayProgress3 = useSharedValue(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(3);

  let longestRotate = useDerivedValue(() => {
    return interpolate(
      openLongestProgress.value,
      [0, 1],
      [0, 90],
      Extrapolation.CLAMP
    );
  });
  useEffect(() => {
    console.log("set", currentImageIndex);
  }, [currentImageIndex]);

  const longestMarinTop = height * 0.3;
  const longestRStyle = useAnimatedStyle(() => {
    const widthStyle = interpolate(
      openLongestProgress.value,
      [0, 1],
      [width / 2, width]
    );
    const heightStyle = interpolate(
      openLongestProgress.value,
      [0, 1],
      [height * 0.7, width]
    );
    const marginTop = interpolate(
      openLongestProgress.value,
      [0, 1],
      [longestMarinTop, 0]
    );
    return {
      width: widthStyle,
      height: heightStyle,
      marginTop,
      transform: [
        {
          rotate: longestRotate.value + "deg",
        },
      ],
    };
  });

  const rightSideRStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      openLongestProgress.value,
      [0, 1],
      [0, width]
    );
    return {
      transform: [
        {
          translateX: translateX,
        },
      ],
    };
  });
  const longestDetailsRStyle = useAnimatedStyle(() => {
    const left = interpolate(openLongestProgress.value, [0, 1], [-width, 0]);
    return {
      left,
    };
  });
  const imagePastAwayRStyle = useAnimatedStyle(() => {
    const left = interpolate(
      imagePastAwayProgress.value,
      [0, 1],
      [150, -width]
    );
    return {
      left,
    };
  });

  const longestGalleryRStyle = useAnimatedStyle(() => {
    const scale = interpolate(openGalleryProgress.value, [0, 1], [1, 3]);
    const top = interpolate(openGalleryProgress.value, [0, 1], [0, -100]);

    const left = interpolate(openLongestProgress.value, [0, 1], [-width, 0]);
    return {
      left,
      top,
      transform: [
        {
          scale,
        },
      ],
    };
  });

  const getStyle = (index: number) => {
    // console.log("in func ", index);
    if (currentImageIndex == index) return imagePastAwayRStyle;
  };
  return (
    <View style={{}}>
      <View style={{ flexDirection: "row" }}>
        <Animated.View
          style={[
            {
              marginTop: longestMarinTop,
              height: height * 0.7,
              width: width / 2,
              backgroundColor: "pink",
            },
            longestRStyle,
          ]}
        >
          <TouchableOpacity
            style={{}}
            onPress={() => {
              let value = openLongestProgress.value == 1 ? 0 : 1;
              openLongestProgress.value = withTiming(value, {
                duration: 500,
              });
            }}
          >
            <Image
              source={{ uri: yachtImages[0] }}
              style={{ width: "100%", height: "100%" }}
            />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={[
            { height, backgroundColor: "pink", width: width / 2 },
            rightSideRStyle,
          ]}
        ></Animated.View>
        <Animated.View
          style={[
            {
              position: "absolute",

              marginTop: height / 2 - 30,
              left: -width,
              width: width,
              // backgroundColor: "orange",
            },
            longestDetailsRStyle,
          ]}
        >
          <LongestDetails />
        </Animated.View>
        <Animated.View
          style={[
            {
              position: "absolute",

              marginTop: height / 2 + 120,
              left: -width,
              width: width,
              // height,
              top: 0,
            },
            longestGalleryRStyle,
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              let value = openGalleryProgress.value == 1 ? 0 : 1;
              openGalleryProgress.value = withTiming(value, { duration: 300 });
            }}
            style={[
              {
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                width,
                height: 200,
                backgroundColor: myColors.black,
              },
            ]}
          >
            {yachtInterior.map((image, index) => {
              return (
                <Animated.View
                  key={index}
                  style={[
                    {
                      width: 100,
                      height: 100,
                      position: "absolute",
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "center",
                      left: 150,
                      transform: [{ rotate: 4 * index + "deg" }],
                    },
                    getStyle(index),
                    // imagePastAwayRStyle
                  ]}
                >
                  <TouchableOpacity
                    style={{
                      width: 100,
                      height: 100,
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                    onPress={() => {
                      // setCurrentImageIndex(index);
                      console.log(index);
                      imagePastAwayProgress.value = withTiming(
                        1,
                        {
                          duration: 1000,
                        },
                        () => {
                          runOnJS(setCurrentImageIndex)(currentImageIndex - 1);
                        }
                      );
                    }}
                  >
                    <Image
                      source={{ uri: image }}
                      style={{ width: 100, height: 100 }}
                    />
                  </TouchableOpacity>
                </Animated.View>
              );
            })}
            {/* <Animated.View
              style={[
                {
                  width: 100,
                  height: 100,
                  position: "absolute",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  left: 150,
                },

                imagePastAwayRStyle,
              ]}
            >
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 100,
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  imagePastAwayProgress.value = withTiming(1, {
                    duration: 1000,
                  });
                }}
              >
                <Image
                  source={{ uri: yachtImages[0] }}
                  style={{ width: 100, height: 100 }}
                />
              </TouchableOpacity>
            </Animated.View> */}
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}
export { Yachts };

const styles = StyleSheet.create({});
