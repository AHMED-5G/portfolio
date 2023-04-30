import { Animated, StyleSheet, View } from "react-native";
import React from "react";
import AddToCartButtonComponent from "../AddToCartButtonComponent";
import RemoveItemButton from "../RemoveItemButton";
import { Product, ProductInCart } from "../../../types";
import { productCardHeight, productCardWidth } from "./style";
import {
  SharedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import InputComponent from "./inputsComponents/InputComponent";

type Props = {
  product: Product;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  isItemInCart: ProductInCart;
  setIsItemInCart: React.Dispatch<React.SetStateAction<ProductInCart>>;
  openRemoveButtonProgress: SharedValue<number>;
  multiplyViewFadeInProgress: SharedValue<number>;
};

const actionButtonWidth = productCardWidth * 0.45 - 10;

const BottomSection = ({
  product,
  counter,
  setCounter,
  isItemInCart,
  setIsItemInCart,
  openRemoveButtonProgress,
  multiplyViewFadeInProgress,
}: Props) => {
  // const multiplyViewFadeInProgress = useSharedValue(0);
  // const openMultiplyViewTime = 700;
  // const openRemoveButtonProgress = useSharedValue(0);

  // const openMultiplyView = () => {
  //   multiplyViewFadeInProgress.value = withTiming(1, {
  //     duration: openMultiplyViewTime,
  //   });
  // };

  // const closeMultiplyView = () => {
  //   multiplyViewFadeInProgress.value = withTiming(0, {
  //     duration: openMultiplyViewTime,
  //   });
  // };

  return (
    <View style={styles.bottomSection}>
      <View style={styles.inputContainer}>
        <InputComponent {...{ product, setCounter, counter }} />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={{ width: actionButtonWidth }}>
          <AddToCartButtonComponent
            {...{
              counter,
              setCounter,
              product,
              isItemInCart,
              setIsItemInCart,
            }}
            callBack={(lastValue) => {
              if (multiplyViewFadeInProgress.value == 0 && counter != 1) {
                // openMultiplyView();
              }
            }}
          />
        </View>
        <Animated.View>
          <RemoveItemButton
            {...{
              counter,
              isItemInCart,
              setIsItemInCart,
              product,
            }}
            openRemoveButtonProgress={openRemoveButtonProgress}
            allButtonWidth={actionButtonWidth}
            callBack={() => {
              // closeMultiplyView();
            }}
          />
        </Animated.View>
      </View>
    </View>
  );
};

export default BottomSection;
const styles = StyleSheet.create({
  inputContainer: {
    height: 30,
    marginTop: 35,
    width: productCardWidth * 0.9,
  },
  buttonsContainer: {
    width: productCardWidth * 0.9,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  bottomSection: {
    position: "absolute",
    top: productCardHeight / 2,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",

  },
});
