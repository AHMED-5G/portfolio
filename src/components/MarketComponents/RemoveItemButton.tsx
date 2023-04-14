import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import MedButton from "../mini/MedButton";
import { width } from "../../constants/Layout";
import { theme } from "../../constants/myColors";
import { AntDesign, Feather } from "@expo/vector-icons";
import { productCardWidth } from "./ProductCards/style";
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { InitialStateInterface, Product, ProductInCart } from "../../types";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks/hooks";
import { SET_CART } from "../../redux/reducers/dataSlice";
import { Extrapolate } from "react-native-reanimated";
import { withSpring } from "react-native-reanimated";

type Props = {
  counter: number;
  isItemInCart: ProductInCart;
  setIsItemInCart: React.Dispatch<React.SetStateAction<ProductInCart>>;
  product: Product;
  allButtonWidth: number;
  callBack?: () => void;
  // openRemoveButton: number;
  openRemoveButton: SharedValue<number>;
};

const RemoveItemButton = ({
  counter,
  isItemInCart,
  setIsItemInCart,
  product,
  allButtonWidth,
  callBack,
  openRemoveButton,
}: Props) => {
  const buttonHeight = 55;

  const counterContainerWidth = allButtonWidth * 0.3;
  const RemoveTextContainerWidth = 1 - counterContainerWidth;
  const buttonWidth = productCardWidth * 0.45 - 10;
  const openRemoveButtonTime = 900;
  const closeRemoveButtonTime = 900;
  const removeButtonRStyle = useAnimatedStyle(() => {
    const toWidth = interpolate(
      openRemoveButton.value,
      [0.5, 1],
      [0, buttonWidth],
      Extrapolate.CLAMP
    );
    return {
      width: toWidth,
    };
  });

  const RemoveTextContainerRStyle = useAnimatedStyle(() => {
    const toWidth = interpolate(
      openRemoveButton.value,
      [0, 0.5],
      [0, RemoveTextContainerWidth],
      Extrapolate.CLAMP
    );
    return {
      width: toWidth,
    };
  });
  const state: InitialStateInterface = useAppSelector(
    (state) => state.dataSlice
  );
  const openCloseButton = () => {
    openRemoveButton.value = withTiming(1, {
      duration: openRemoveButtonTime,
    });
  };

  useEffect(() => {
    if (isItemInCart.counter > 0) {
      openCloseButton();
    }
  }, [isItemInCart]);
  const dispatch = useAppDispatch();

  const removeItems = () => {
    const newArray = state.itemsInCart.filter((item) => item.id != product.id);
    dispatch(SET_CART(newArray));
    setIsItemInCart({ id: "0", counter: 0 } as ProductInCart);
    openRemoveButton.value = withTiming(0, { duration: closeRemoveButtonTime });
    callBack?.();
  };
  const [totalPressed, setTotalPressed] = useState(false);
  return (
    <Animated.View style={[{ overflow: "hidden" }, removeButtonRStyle]}>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          borderWidth: 0.5,
          borderColor: theme.warning,
          height: buttonHeight,
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
        onPress={() => {
          removeItems();
        }}
      >
        <Animated.View
          style={[
            {
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              margin: 2,
            },
            RemoveTextContainerRStyle,
          ]}
        >
          <Text
            style={{
              fontSize: 22,
              color: theme.actionColor,
              fontWeight: "bold",
            }}
          >
            Remove
          </Text>
        </Animated.View>
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            width: 60,
          }}
        >
          <View
            style={{
              opacity: totalPressed ? 0.8 : 1,
              width: counterContainerWidth,
              height: 40,
              margin: 5,
              borderRadius: 10,
              backgroundColor: theme.secondary,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: theme.secondaryText,
                fontSize: 20,
                fontWeight: "bold",
                margin: 5,
              }}
              numberOfLines={1}
            >
              {isItemInCart.counter}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default RemoveItemButton;

const styles = StyleSheet.create({});
