import React, { FunctionComponent, ReactElement, ReactNode } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ViewStyle,
  ColorValue,
  GestureResponderEvent,
  TextStyle,
  StyleProp,
} from "react-native";
import { theme } from "../../constants/myColors";
import LoadingIndicator from "./LoadingIndicator";
import {
  circularRatio,
  fontRatio,
  hwrosh,
  wwrosw,
} from "../../constants/Layout";
interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void | undefined | Promise<void>;
  disabled?: boolean;
  loading?: boolean | ReactElement;
  style?: StyleProp<ViewStyle> | undefined;
  width?: number | string | undefined;
  height?: number | string | undefined;
  square?: boolean;
  circle?: boolean;
  color?: ColorValue;
  borderRadius?: number;
  textStyle?: TextStyle;
  title?: string;
  icon?: ReactNode;
  leftIcon?: ReactNode;
  iconContainerStyle?: ViewStyle;
  accessibilityHint?: string | undefined;
}

const MedButton: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  return (
    <View>
      {!props.loading ? (
        <TouchableOpacity
          onPress={props.onPress}
          disabled={props.disabled}
          accessibilityHint={props.accessibilityHint}
        >
          <View
            style={[
              styles.container,
              {
                backgroundColor: props.disabled
                  ? "#bdc6cf"
                  : props.color
                  ? props.color
                  : theme.actionButtonBackground(),
                width: props.width
                  ? props.width
                  : props.circle
                  ? wwrosw(100)
                  : wwrosw(244),
                height: props.height
                  ? props.height
                  : props.square || props.circle
                  ? props.width
                    ? props.width
                    : props.circle
                    ? hwrosh(100)
                    : hwrosh(244)
                  : hwrosh(55),
                borderRadius: props.borderRadius
                  ? props.borderRadius
                  : props.circle
                  ? props.width
                    ? +props.width
                    : props.circle
                    ? 100
                    : 0
                  : 0,
              },
              props.style,
            ]}
          >
            <View
              style={[{ marginRight: wwrosw(4) }, props.iconContainerStyle]}
            >
              <Text>{props.leftIcon}</Text>
            </View>
            <View>
              <Text style={[styles.titleText, props.textStyle]}>
                {props.title}
              </Text>
            </View>
            <View style={[{ marginLeft: wwrosw(4) }, props.iconContainerStyle]}>
              <Text>{props.icon}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ) : typeof props.loading !== "boolean" ? (
        <View style={props.style}>{props.loading}</View>
      ) : (
        <LoadingIndicator
          color={props.color}
          containerStyle={props.style}
          size={props.width ? +props.width / 2 : circularRatio(40)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wwrosw(244),
    height: hwrosh(55),
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderColor: "white",
    flexDirection: "row",
  },
  titleText: {
    color: theme.actionColorText,
    fontWeight: "bold",
    fontSize: fontRatio(28),
  },
});

export default MedButton;
