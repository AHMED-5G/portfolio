import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { RootStackParamList } from "../types";
import { StackScreenProps } from "@react-navigation/stack";
import { SharedElement } from "react-navigation-shared-element";
import { height, width } from "../constants/Layout";
import { myColors } from "../constants/myColors";
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import HorsesImages from "../components/horseComponents/HorsesImages";

import HorseAuction from "../components/horseComponents/HorseAuction";
import { horsesInAuction } from "../../dummy/horsesDummy/horsesDummy";
import HorseHistory from "../components/horseComponents/HorseHistory";
import BackArrow from "../components/mini/BackArrow";

type Props = StackScreenProps<RootStackParamList, "HorseDetails">;

const imageContainerHeight = height / 4 + 20;

const inActiveModalHeight = height * 0.1;
const activeModalHeight = height * 0.57;

const activeModalTop = 0;

const firstModalTop = height * 0.15;
const paddingForInactiveModals = 15;
const secondModalTop =
  firstModalTop + inActiveModalHeight + paddingForInactiveModals;
const thirdModalTop =
  secondModalTop + inActiveModalHeight + paddingForInactiveModals;

const activeModalIndex = 1;
const inactiveModalIndex = 0;

const selectedModalWidth = width * 0.85;
const unselectedModalWidth = width;
const Horses = ({ navigation, route }: Props) => {
  const horse = route.params;

  const leftToRightProgress = useSharedValue(0);
  const firstModalActiveProgress = useSharedValue(1);
  const secondModalActiveProgress = useSharedValue(0);
  const thirdModalActiveProgress = useSharedValue(0);

  const [leftToRightCompleted, setLeftToRightCompleted] = useState(false);
  const [currentActiveModalNumber, setCurrentActiveModalNumber] = useState(1);
  useEffect(() => {
    leftToRightProgress.value = withDelay(
      200,
      withSpring(1, { restSpeedThreshold: 3 }, () => {
        runOnJS(setLeftToRightCompleted)(true);
      })
    );
  }, []);

  const activeModal = (modalNumber: number) => {
    switch (currentActiveModalNumber) {
      case 1:
        firstModalActiveProgress.value = withTiming(0, undefined);
        break;
      case 2:
        secondModalActiveProgress.value = withTiming(0, undefined);
        break;
      case 3:
        thirdModalActiveProgress.value = withTiming(0, undefined);
        break;

      default:
        break;
    }

    switch (modalNumber) {
      case 1:
        setCurrentActiveModalNumber(modalNumber);
        firstModalActiveProgress.value = withSpring(1, undefined, () => {});
        break;
      case 2:
        setCurrentActiveModalNumber(modalNumber);
        secondModalActiveProgress.value = withTiming(1, undefined, () => {});
        break;
      case 3:
        setCurrentActiveModalNumber(modalNumber);
        thirdModalActiveProgress.value = withSpring(1, undefined, () => {});
        break;

      default:
        break;
    }
  };

  const firstModalReanimatedStyle = useAnimatedStyle(() => {
    const width = interpolate(
      leftToRightProgress.value,
      [0, 1],
      [100, selectedModalWidth]
    );

    const width2 = interpolate(
      firstModalActiveProgress.value,
      [0, 1],
      [unselectedModalWidth, selectedModalWidth]
    );

    const height = interpolate(
      firstModalActiveProgress.value,
      [0, 1],
      [inActiveModalHeight, activeModalHeight]
    );

    const top = interpolate(
      firstModalActiveProgress.value,
      [0, 1],
      [firstModalTop, activeModalTop]
    );
    const zIndex = interpolate(
      firstModalActiveProgress.value,
      [0, 1],
      [inactiveModalIndex, activeModalIndex]
    );

    return {
      width: leftToRightCompleted ? width2 : width,
      height,
      top,
      zIndex,
    };
  });

  const secondModalReanimatedStyle = useAnimatedStyle(() => {
    let width = interpolate(
      leftToRightProgress.value,
      [0, 1],
      [100, unselectedModalWidth]
    );

    const width2 = interpolate(
      secondModalActiveProgress.value,
      [0, 1],
      [unselectedModalWidth, selectedModalWidth]
    );

    const height = interpolate(
      secondModalActiveProgress.value,
      [0, 1],
      [inActiveModalHeight, activeModalHeight]
    );

    const top = interpolate(
      secondModalActiveProgress.value,
      [0, 1],
      [secondModalTop, activeModalTop]
    );
    const zIndex = interpolate(
      secondModalActiveProgress.value,
      [0, 1],
      [inactiveModalIndex, activeModalIndex]
    );

    return {
      width: leftToRightCompleted ? width2 : width,
      height,
      top,
      zIndex,
    };
  });

  const thirdModalReanimatedStyle = useAnimatedStyle(() => {
    const width = interpolate(
      leftToRightProgress.value,
      [0, 1],
      [100, unselectedModalWidth]
    );

    const width2 = interpolate(
      thirdModalActiveProgress.value,
      [0, 1],
      [unselectedModalWidth, selectedModalWidth]
    );

    const height = interpolate(
      thirdModalActiveProgress.value,
      [0, 1],
      [inActiveModalHeight, activeModalHeight]
    );

    const top = interpolate(
      thirdModalActiveProgress.value,
      [0, 1],
      [thirdModalTop, activeModalTop]
    );
    const zIndex = interpolate(
      thirdModalActiveProgress.value,
      [0, 1],
      [inactiveModalIndex, activeModalIndex]
    );

    return {
      width: leftToRightCompleted ? width2 : width,
      height,
      top,
      zIndex,
    };
  });

  return (
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <BackArrow top={height * 0.01} />
      <View
        style={{
          marginTop: 30,
          height: imageContainerHeight,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <SharedElement id={horse.id.toString()}>
          <Image
            resizeMethod="scale"
            source={{ uri: horse.image }}
            style={{
              width: width * 0.9,
              height: imageContainerHeight,
              borderRadius: 10,
            }}
            resizeMode={"cover"}
          />
        </SharedElement>
      </View>
      <View style={{ marginTop: 20 }}>
        <Animated.View style={[styles.firstModal, firstModalReanimatedStyle]}>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              currentActiveModalNumber != 1 && activeModal(1);
            }}
            disabled={currentActiveModalNumber == 1}
          >
            <HorseAuction
              auctions={horsesInAuction}
              isModalActive={currentActiveModalNumber == 1}
            />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.secondModal, secondModalReanimatedStyle]}>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              currentActiveModalNumber != 2 && activeModal(2);
            }}
            disabled={currentActiveModalNumber == 2}
          >
            <HorseHistory
              history={horse.history}
              isModalActive={currentActiveModalNumber == 2}
            />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.thirdModal, thirdModalReanimatedStyle]}>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              currentActiveModalNumber != 3 && activeModal(3);
            }}
            disabled={currentActiveModalNumber == 3}
          >
            <HorsesImages
              images={horse.images!}
              isModalActive={currentActiveModalNumber == 3}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

export default Horses;

const styles = StyleSheet.create({
  firstModal: {
    backgroundColor: myColors.white,
    position: "absolute",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  secondModal: {
    backgroundColor: myColors.white,
    position: "absolute",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  thirdModal: {
    backgroundColor: myColors.black,
    position: "absolute",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
});
