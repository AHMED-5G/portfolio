import { Animated, StyleSheet, View } from "react-native";
import React from "react";
import AddToCartButtonComponent from "../AddToCartButtonComponent";
import RemoveItemButton from "../RemoveItemButton";
import { Product, ProductInCart } from "../../../types";
import { productCardHeight, productCardWidth } from "./style";
import { SharedValue } from "react-native-reanimated";
import InputComponent from "./inputsComponents/InputComponent";
import { hwrosh, wwrosw } from "../../../constants/Layout";

type Props = {
  product: Product;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  isItemInCart: ProductInCart;
  setIsItemInCart: React.Dispatch<React.SetStateAction<ProductInCart>>;
  openRemoveButtonProgress: SharedValue<number>;
  multiplyViewFadeInProgress: SharedValue<number>;
  openRemoveButton: () => void;
};

const actionButtonWidth = productCardWidth * 0.45 - wwrosw(10);

const BottomSection = ({
  product,
  counter,
  setCounter,
  isItemInCart,
  setIsItemInCart,
  openRemoveButtonProgress,
  multiplyViewFadeInProgress,
  openRemoveButton,
}: Props) => {
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
              product,
              isItemInCart,
              setIsItemInCart,
              openRemoveButton,
            }}
            callBack={() => {
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
    height: hwrosh(30),
    marginTop: hwrosh(35),
    width: productCardWidth * 0.9,
    // justifyContent: 'center' ,alignContent: 'center' ,alignItems :'center'
  },
  buttonsContainer: {
    width: productCardWidth * 0.9,
    marginTop: hwrosh(50),
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
