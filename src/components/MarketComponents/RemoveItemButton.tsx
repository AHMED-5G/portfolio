import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { theme } from "../../constants/theme";
import { productCardWidth } from "./ProductCards/style";
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { InitialStateInterface, Product, ProductInCart } from "../../types";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks/hooks";
import { SET_CART } from "../../redux/reducers/dataSlice";
import { Extrapolate } from "react-native-reanimated";
import { i18n } from "../../translation/i18n";
import {
  averageRatio,
  fontRatio,
  hwrosh,
  wwrosw,
} from "../../constants/Layout";

type Props = {
  isItemInCart: ProductInCart;
  setIsItemInCart: React.Dispatch<React.SetStateAction<ProductInCart>>;
  product: Product;
  allButtonWidth: number;
  callBack?: () => void;
  openRemoveButtonProgress: SharedValue<number>;
};

const RemoveItemButton = ({
  isItemInCart,
  setIsItemInCart,
  product,
  allButtonWidth,
  callBack,
  openRemoveButtonProgress,
}: Props) => {
  const buttonHeight = hwrosh(55);
  const counterContainerWidth = allButtonWidth * 0.3;
  const RemoveTextContainerWidth = 1 - counterContainerWidth;
  const buttonWidth = productCardWidth * 0.45 - wwrosw(10);
  const closeRemoveButtonTime = 900;
  const removeButtonRStyle = useAnimatedStyle(() => {
    const toWidth = interpolate(
      openRemoveButtonProgress.value,
      [0, 1],
      [0, buttonWidth],
      Extrapolate.CLAMP
    );
    return {
      width: toWidth,
    };
  });

  const RemoveTextContainerRStyle = useAnimatedStyle(() => {
    const toWidth = interpolate(
      openRemoveButtonProgress.value,
      [0, 1],
      [0, RemoveTextContainerWidth],
      Extrapolate.CLAMP
    );

    const toOpacity = interpolate(
      openRemoveButtonProgress.value,
      [0.5, 1],
      [0, 1],
      Extrapolate.CLAMP
    );

    return {
      opacity: toOpacity,
      width: toWidth,
    };
  });

  const state: InitialStateInterface = useAppSelector(
    (state) => state.dataSlice
  );

  const dispatch = useAppDispatch();

  const removeItems = () => {
    const newArray = state.itemsInCart.filter((item) => item.id != product.id);
    dispatch(SET_CART(newArray));
    setIsItemInCart({ id: "0", counter: 0 } as ProductInCart);
    openRemoveButtonProgress.value = withTiming(0, {
      duration: closeRemoveButtonTime,
    });
    callBack?.();
  };

  return (
    <Animated.View
      style={[{ overflow: "hidden", width: buttonWidth }, removeButtonRStyle]}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          borderWidth: 0.5,
          borderColor: theme.darkTheme ? "undefined" : theme.error,
          height: buttonHeight,
          borderRadius: averageRatio(5),
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
              margin: averageRatio(2),
            },
            RemoveTextContainerRStyle,
          ]}
        >
          <Text
            style={{
              fontSize: fontRatio(22),
              color: theme.darkTheme ? theme.error : theme.black,
              fontWeight: "bold",
            }}
          >
            {i18n.t("remove")}
          </Text>
        </Animated.View>
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            width: wwrosw(60),
          }}
        >
          <View
            style={{
              width: counterContainerWidth,
              height: hwrosh(40),
              margin: averageRatio(5),
              borderRadius: averageRatio(10),
              backgroundColor: theme.secondaryColor(),
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: theme.secondaryColorText(),
                fontSize: fontRatio(20),
                fontWeight: "bold",
                margin: averageRatio(5),
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

