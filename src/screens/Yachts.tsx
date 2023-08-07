import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { RootStackParamList } from "../types";
import { StackScreenProps } from "@react-navigation/stack";
import { yachtImages, yachtInterior } from "../../dummy/yachtDummy/images";
import {
  averageRatio,
  fontRatio,
  height,
  hwrosh,
  width,
} from "../constants/Layout";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import LongestDetails from "../components/yachtComponents/LongestDetails";
import { theme } from "../constants/myColors";
import { generateRandomBoolean } from "../utils/helperFunctions";
import RightSide from "../components/yachtComponents/RightSide";
import ScreenWithCustomBottomTab from "../components/ScreenWithCustomBottomTab";

type Props = StackScreenProps<RootStackParamList, "Yachts">;

const longestMarinTop = height * hwrosh(0.15);
const leftContainerHeight = height * 0.7;
const rightSideHeight = height;
const imageSize = averageRatio(210);
const galleryScaleUpRatioNumber = 1.5;
const galleryScaleUpRatio = imageSize * galleryScaleUpRatioNumber;
const imageLeft = width / 2 - imageSize / 2;
const bigImageLeft = width / 2 - galleryScaleUpRatio / 2;
const informationCardContainerHeight = hwrosh(120);
const imageInTopHeight = height / 2 - hwrosh(20);
const galleryContainerHeight = imageSize;
const BarTitleFontSize = fontRatio(25);

function Yachts({ navigation }: Props) {
  const openLongestProgress = useSharedValue(0);
  const openGalleryProgress = useSharedValue(0);
  const imagePastAwayProgress = useSharedValue(0);
  const imagePastAwayProgress1 = useSharedValue(0);
  const imagePastAwayProgress2 = useSharedValue(0);
  const imagePastAwayProgress3 = useSharedValue(0);

  const Content = () => {
    const longestRotate = useDerivedValue(() => {
      return interpolate(
        openLongestProgress.value,
        [0, 1],
        [0, 90],
        Extrapolation.CLAMP
      );
    });

    const longestRStyle = useAnimatedStyle(() => {
      const widthStyle = interpolate(
        openLongestProgress.value,
        [0, 1],
        [width / 2, width]
      );
      const heightStyle = interpolate(
        openLongestProgress.value,
        [0, 1],
        [height * 0.7, imageInTopHeight]
      );
      const marginTop = interpolate(
        openLongestProgress.value,
        [0, 1],
        [longestMarinTop, 0]
      );
      const marginLeft = interpolate(openLongestProgress.value, [0, 1], [2, 0]);

      return {
        width: widthStyle,
        height: heightStyle,
        marginTop,
        marginLeft,
        transform: [
          {
            rotate: longestRotate.value + "deg",
          },
        ],
      };
    });

    const longestImageRStyle = useAnimatedStyle(() => {
      const borderAtTop = interpolate(
        openLongestProgress.value,
        [0, 1],
        [10, 0]
      );
      return {
        borderTopLeftRadius: borderAtTop,
        borderBottomLeftRadius: borderAtTop,
      };
    });

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

    const detailsRStyle = useAnimatedStyle(() => {
      const left = interpolate(
        openLongestProgress.value,
        [0.5, 1],
        [-width, 0],
        Extrapolation.CLAMP
      );
      let toOpacity = interpolate(openLongestProgress.value, [1, 0.5], [1, 0]);

      return {
        left,
        opacity: toOpacity,
      };
    });

    const detailsRStyleWithGallery = useAnimatedStyle(() => {
      let toOpacityWithGallery = interpolate(
        openGalleryProgress.value,
        [0, 1],
        [1, 0.5]
      );
      return {
        opacity: toOpacityWithGallery,
      };
    });

    const longestGalleryRStyle = useAnimatedStyle(() => {
      const top = interpolate(
        openGalleryProgress.value,
        [0, 1],
        [
          imageInTopHeight + informationCardContainerHeight,
          height / 2 - informationCardContainerHeight / 2,
        ]
      );

      const toHeight = interpolate(
        openGalleryProgress.value,
        [0, 1],
        [galleryContainerHeight, height / 2]
      );

      const left = interpolate(openLongestProgress.value, [0, 1], [-width, 0]);

      const toOpacity = interpolate(
        openLongestProgress.value,
        [1, 0.25],
        [1, 0]
      );
      return {
        left,
        top,
        height: toHeight,
        opacity: toOpacity,
      };
    });

    const imageAnimatedViewRStyle = useAnimatedStyle(() => {
      const widthStyle = interpolate(
        openGalleryProgress.value,
        [0, 1],
        [imageSize, galleryScaleUpRatio]
      );
      const heightStyle = interpolate(
        openGalleryProgress.value,
        [0, 1],
        [imageSize, galleryScaleUpRatio]
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

    function openCloseGallery(value = 1, duration = 300) {
      openGalleryProgress.value = withTiming(value, { duration });
    }

    function lastStepForImageRStyle(
      imagePastAwayProgress: SharedValue<number>
    ) {
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
    }

    function getStyle(index: number) {
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
    }

    function refactorKillImage(
      progressValue: SharedValue<number>,
      index: number
    ) {
      if (index === 0) {
        imagePastAwayProgress3.value = withTiming(0, {
          duration: 400,
        });
        imagePastAwayProgress2.value = withTiming(0, {
          duration: 300,
        });
        imagePastAwayProgress1.value = withTiming(0, {
          duration: 200,
        });
        openGalleryProgress.value = withDelay(
          400,
          withTiming(0, { duration: 200 })
        );
      } else {
        progressValue.value = withTiming(1, {
          duration: 500,
        });
      }
    }

    function killThisImage(index: number) {
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
    }

    function imageRotateValue(index: number): number {
      return (3 - index) * 2 - 2 * (generateRandomBoolean() ? -1 : 1);
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: theme.localizationRtl ? "row-reverse" : "row",
        }}
      >
        <Animated.View style={[styles.longestRStyle, longestRStyle]}>
          <TouchableOpacity
            activeOpacity={1}
            style={{}}
            onPress={() => {
              let value = openLongestProgress.value == 1 ? 0 : 1;
              value == 0 && openCloseGallery(0);
              openLongestProgress.value = withTiming(value, {
                duration: 600,
              });
            }}
          >
            <Animated.Image
              source={{ uri: yachtImages[0] }}
              style={[
                { width: "100%", height: "100%", borderRadius: 10 },
                longestImageRStyle,
              ]}
            />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.longestDetails, detailsRStyle]}>
          <Animated.View style={[detailsRStyleWithGallery]}>
            <LongestDetails />
          </Animated.View>
        </Animated.View>
        <Animated.View
          style={[styles.longestGalleryStyle, longestGalleryRStyle]}
        >
          {yachtInterior.slice(0, 4).map((image, index) => {
            return (
              <Animated.View
                key={index}
                style={[
                  styles.imageAnimatedViewStyle,
                  {
                    transform: [{ rotate: imageRotateValue(index) + "deg" }],
                  },
                  getStyle(index),
                  imageAnimatedViewRStyle,
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
        </Animated.View>
        <Animated.View style={[styles.rightSide, rightSideRStyle]}>
          <RightSide />
        </Animated.View>
      </View>
    );
  };
  const BarTitle = () => {
    const yachtNameRStyle = useAnimatedStyle(() => {
      return {
        opacity: interpolate(openLongestProgress.value, [0, 1], [0, 1]),
      };
    });

    const yachtTextRStyle = useAnimatedStyle(() => {
      const toTop = interpolate(
        openLongestProgress.value,
        [0, 1],
        [theme.tabBarHeight / 2 - BarTitleFontSize / 2, theme.tabBarHeight]
      );
      return {
        opacity: interpolate(openLongestProgress.value, [0, 1], [1, 0]),
        top: toTop,
      };
    });
    return (
      <View
        style={{
          flexDirection: "row",
          height: theme.tabBarHeight,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Animated.Text
          style={[
            {
              fontSize: BarTitleFontSize,
              fontWeight: "800",
              color: theme.baseTextColor(),
              position: "absolute",
              top: theme.tabBarHeight / 2 - BarTitleFontSize / 2,
            },
            yachtTextRStyle,
          ]}
        >
          Yachts
        </Animated.Text>
        <Animated.Text
          style={[
            {
              fontSize: BarTitleFontSize,
              fontWeight: "800",
              position: "absolute",
              top: theme.tabBarHeight / 2 - BarTitleFontSize / 2,
              color: theme.baseTextColor(),
            },
            yachtNameRStyle,
          ]}
        >
          TACANUY
        </Animated.Text>
      </View>
    );
  };

  return (
    <ScreenWithCustomBottomTab
      content={<Content />}
      navigation={navigation}
      CustomBottomTabComponents={[<BarTitle />]}
    />
  );
}
export { Yachts };

const styles = StyleSheet.create({
  longestRStyle: {
    marginTop: longestMarinTop,
    height: leftContainerHeight,
    width: width / 2,
    marginLeft: 2,
    zIndex: 1,
  },
  rightSide: {
    position: "absolute",
    maxHeight: leftContainerHeight,
    overflow: "hidden",
    width: width / 2,
    left: width / 2,
    top: longestMarinTop,
    alignItems: "center",
  },
  longestGalleryStyle: {
    position: "absolute",
    left: -width,
    width: width,
    height: galleryContainerHeight,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  longestDetails: {
    position: "absolute",
    marginTop: imageInTopHeight,
    left: -width,
    width: width,
    height: informationCardContainerHeight,
  },
  imageAnimatedViewStyle: {
    width: imageSize,
    height: imageSize,
    position: "absolute",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    left: imageLeft,
    backgroundColor: "white",
    borderRadius: averageRatio(3),
  },
});
