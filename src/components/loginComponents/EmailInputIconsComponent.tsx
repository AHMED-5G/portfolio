import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import {
  Feather,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  averageRatio,
  hwrosh,
  theme,
  circularRatio,
  wwrosw,
} from "../../constants";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};

const EmailInputIconsComponent = ({ email, setEmail }: Props) => {
  const iconColor = theme.iconColor();
  const iconSize = circularRatio(24);
  const iconContainerWidth = averageRatio(45);
  const iconContainerHeight = hwrosh(55);
  const iconContainerBorderRadius = averageRatio(10);
  const marginBetweenIcons = wwrosw(5);
  const openEmailViewProgress = useSharedValue(0);

  const openEmailView = () => {
    openEmailViewProgress.value = withTiming(1);
  };

  const closeEmailView = () => {
    openEmailViewProgress.value = withTiming(0);
  };
  const containerRStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(
        openEmailViewProgress.value,
        [0, 1],
        [
          iconContainerWidth + marginBetweenIcons * 2,
          4 * iconContainerWidth + 5 * marginBetweenIcons,
        ],
      ),
    };
  });

  const validateEmailNotCompleted = (email: string) => {
    //check if email already has part after @
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailRegex.test(email)) {
      //remove all text after @
      return email.substring(0, email.indexOf("@"));
    }
    return email;
  };

  useEffect(() => {
    if (!email) {
      closeEmailView();
    }
  }, [email]);

  return (
    <Animated.View
      style={[{ flexDirection: "row", paddingHorizontal: 1 }, containerRStyle]}
    >
      <TouchableOpacity
        style={[
          styles.iconContainerStyle,
          {
            marginLeft: marginBetweenIcons,
            width: iconContainerWidth,
            height: iconContainerHeight,
            borderRadius: iconContainerBorderRadius,
          },
        ]}
        onPress={() => openEmailView()}
        disabled={!email}
      >
        <Feather
          name="at-sign"
          size={iconSize}
          color={!email ? theme.disableColor : iconColor}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.iconContainerStyle,
          {
            marginLeft: marginBetweenIcons,
            width: iconContainerWidth,
            height: iconContainerHeight,
            borderRadius: iconContainerBorderRadius,
          },
        ]}
        onPress={() => {
          setEmail((prev) => validateEmailNotCompleted(prev) + "@gmail.com");
          closeEmailView();
        }}
      >
        <MaterialCommunityIcons
          name="gmail"
          size={iconSize}
          color={iconColor}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.iconContainerStyle,
          {
            marginLeft: marginBetweenIcons,
            width: iconContainerWidth,
            height: iconContainerHeight,
            borderRadius: iconContainerBorderRadius,
          },
        ]}
        onPress={() => {
          setEmail((prev) => validateEmailNotCompleted(prev) + "@yahoo.com");
          closeEmailView();
        }}
      >
        <Foundation name="social-yahoo" size={iconSize} color={iconColor} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.iconContainerStyle,
          {
            marginLeft: marginBetweenIcons,
            width: iconContainerWidth,
            height: iconContainerHeight,
            borderRadius: iconContainerBorderRadius,
          },
        ]}
        onPress={() => {
          setEmail((prev) => validateEmailNotCompleted(prev) + "@outlook.com");
          closeEmailView();
        }}
      >
        <MaterialCommunityIcons
          name="microsoft-outlook"
          size={iconSize}
          color={iconColor}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default EmailInputIconsComponent;

const styles = StyleSheet.create({
  iconContainerStyle: {
    borderWidth: 0.5,
    borderColor: theme.borderColor,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
