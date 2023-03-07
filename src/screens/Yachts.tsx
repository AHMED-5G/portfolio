import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { RootStackParamList } from "../types";

import { StackScreenProps } from "@react-navigation/stack";
import { yachtImages, yachtInterior } from "../../dummy/yachtDummy/images";
import { height, width } from "../constants/Layout";
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import LongestDetails from "../components/yachtComponents/LongestDetails";
import LongestGallery from "../components/yachtComponents/LongestGallery";
import { myColors } from "../constants/myColors";
import { generateRandomBoolean } from "../utils/helperFunctions";
import RightSide from "../components/yachtComponents/RightSide";
import BackArrow from "../components/mini/BackArrow";

type Props = StackScreenProps<RootStackParamList, "Yachts">;

function Yachts({ navigation }: Props) {
  const openLongestProgress = useSharedValue(0);
  const openGalleryProgress = useSharedValue(0);
  const imagePastAwayProgress = useSharedValue(0);
  const imagePastAwayProgress1 = useSharedValue(0);
  const imagePastAwayProgress2 = useSharedValue(0);
  const imagePastAwayProgress3: SharedValue<number> = useSharedValue(0);

  let longestRotate = useDerivedValue(() => {
    return interpolate(
      openLongestProgress.value,
      [0, 1],
      [0, 90],
      Extrapolation.CLAMP
    );
  });

  const longestMarinTop = height * 0.15;
  const leftContainerHeight = height * 0.7;

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

  const rightSideHeight = height;
  const rightSideRStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      openLongestProgress.value,
      [0, 1],
      [0, width]
    );
    const heightStyle = interpolate(
      openLongestProgress.value,
      [0, 0.5],
      [rightSideHeight, height / 2]
    );
    return {
      height: heightStyle,
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

  const galleryContainerTop = -20;
  const galleryContainerHeight = 230;
  const longestGalleryRStyle = useAnimatedStyle(() => {
    const top = interpolate(
      openGalleryProgress.value,
      [0, 1],
      [galleryContainerTop, -200]
    );
    const heightStyle = interpolate(
      openGalleryProgress.value,
      [0, 1],
      [galleryContainerHeight, height / 2]
    );

    const left = interpolate(openLongestProgress.value, [0, 1], [-width, 0]);
    // const left = interpolate(openLongestProgress.value, [0, 1], [width, 0]);
    return {
      left,
      top,
      height: heightStyle,
    };
  });
  const imageSize = 210;
  const imageLeft = width / 2 - imageSize / 2;
  const bigImageLeft = width / 2 - (imageSize * 1.5) / 2;

  const imageAnimatedViewRStyleWithOPenGallery = useAnimatedStyle(() => {
    const widthStyle = interpolate(
      openGalleryProgress.value,
      [0, 1],
      [imageSize, imageSize * 1.5]
    );
    const heightStyle = interpolate(
      openGalleryProgress.value,
      [0, 1],
      [imageSize, imageSize * 1.5]
    );
    const left = interpolate(
      openGalleryProgress.value,
      [0, 1],
      [imageLeft, bigImageLeft]
    );

    return {
      width: widthStyle,
      height: heightStyle,
      left,
    };
  });
  const openCloseGallery = (value = 1, duration = 300) => {
    openGalleryProgress.value = withTiming(value, { duration: duration });
  };

  const lastStepForImageRStyle = (
    imagePastAwayProgress: SharedValue<number>
  ) => {
    const imagePastAwayRStyle = useAnimatedStyle(() => {
      const left = interpolate(
        imagePastAwayProgress.value,
        [0, 1],
        [bigImageLeft, -width]
      );
      return {
        left,
      };
    });
    return imagePastAwayRStyle;
  };

  const getStyle = (index: number) => {
    switch (index) {
      case 3:
        return lastStepForImageRStyle(imagePastAwayProgress3);

      case 2:
        return lastStepForImageRStyle(imagePastAwayProgress2);

      case 1:
        return lastStepForImageRStyle(imagePastAwayProgress1);

      case 0:
        return lastStepForImageRStyle(imagePastAwayProgress);

      default:
    }
  };

  const refactorKillImage = (
    progressValue: SharedValue<number>,
    index: number
  ) => {
    return (progressValue.value = withTiming(
      1,
      {
        duration: 500,
      },
      () => {
        if (index == 0) {
          imagePastAwayProgress.value = withTiming(0, {
            duration: 100,
          });
          imagePastAwayProgress1.value = withTiming(0, {
            duration: 200,
          });
          imagePastAwayProgress2.value = withTiming(0, {
            duration: 300,
          });
          imagePastAwayProgress3.value = withTiming(0, {
            duration: 400,
          });
          openGalleryProgress.value = withDelay(
            400,
            withTiming(0, { duration: 200 })
          );
        }
      }
    ));
  };

  const killThisImage = (index: number) => {
    switch (index) {
      case 0:
        refactorKillImage(imagePastAwayProgress, index);
      case 1:
        refactorKillImage(imagePastAwayProgress1, index);
        break;
      case 2:
        refactorKillImage(imagePastAwayProgress2, index);
        break;
      case 3:
        refactorKillImage(imagePastAwayProgress3, index);
        break;
      default:
        break;
    }
  };

  const imageRotateValue = (index: number): number => {
    return (3 - index) * 2 - 2 * (generateRandomBoolean() ? -1 : 1);
  };
  return (
    <View style={{ backgroundColor: "#EEE" }}>
      {Platform.OS == "ios" && <BackArrow position="absolute" />}
      <View style={{ flexDirection: "row" }}>
        <Animated.View
          style={[
            {
              marginTop: longestMarinTop,
              height: leftContainerHeight,
              width: width / 2,
            },
            longestRStyle,
          ]}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={{}}
            onPress={() => {
              let value = openLongestProgress.value == 1 ? 0 : 1;

              value == 0 && openCloseGallery(0);
              openLongestProgress.value = withTiming(value, {
                duration: 500,
              });
            }}
          >
            <Image
              source={{ uri: yachtImages[0] }}
              style={{ width: "100%", height: "100%", borderRadius: 15 }}
            />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          style={[
            {
              position: "absolute",
              marginTop: height / 2 - 30,
              left: -width,
              width: width,
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
              height: galleryContainerHeight,
              top: galleryContainerTop,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            },
            longestGalleryRStyle,
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              let value = openGalleryProgress.value == 1 ? 0 : 1;
              openCloseGallery(value);
              // openGalleryProgress.value = withTiming(value, { duration: 300 });
            }}
            style={[
              {
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                width,
                height: "100%",
                backgroundColor: myColors.black,
              },
            ]}
          >
            {yachtInterior.slice(0, 4).map((image, index) => {
              return (
                <Animated.View
                  key={index}
                  style={[
                    {
                      width: imageSize,
                      height: imageSize,
                      position: "absolute",
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "center",
                      left: imageLeft,
                      backgroundColor: "white",
                      borderRadius: 3,
                      // zIndex: 10 - index,
                      transform: [{ rotate: imageRotateValue(index) + "deg" }],
                    },
                    getStyle(index),
                    imageAnimatedViewRStyleWithOPenGallery,
                  ]}
                >
                  <TouchableOpacity
                    activeOpacity={1}
                    style={{
                      width: "90%",
                      height: "90%",
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                    onPress={() => {
                      if (openGalleryProgress.value != 1) {
                        openCloseGallery();
                      } else {
                        killThisImage(index);
                      }
                    }}
                  >
                    <Image
                      source={{ uri: image }}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </TouchableOpacity>
                </Animated.View>
              );
            })}
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={[
            {
              position: "absolute",
              maxHeight: leftContainerHeight,
              overflow: "hidden",
              // backgroundColor: "pink",
              // backgroundColor :'white' ,
              width: width / 2,
              left: width / 2,
              top: longestMarinTop,
              // justifyContent: "space-evenly",
              // alignContent: "space-between",
              alignItems: "center",
            },
            rightSideRStyle,
          ]}
        >
          <RightSide />
        </Animated.View>
      </View>
    </View>
  );
}
export { Yachts };

const styles = StyleSheet.create({});
