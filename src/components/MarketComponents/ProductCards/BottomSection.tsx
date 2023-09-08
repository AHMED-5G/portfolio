import { StyleSheet, View } from "react-native";
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
  multiplyViewFadeInProgress: SharedValue<number>;
};

const actionButtonWidth = productCardWidth * 0.45 - wwrosw(10);

const BottomSection = ({
  product,
  counter,
  setCounter,
  isItemInCart,
  setIsItemInCart,
}: Props) => {
  return (
    <View style={styles.bottomSection}>
      <View
        style={[
          styles.inputContainer,
          { height: hwrosh(30), marginTop: hwrosh(35) },
        ]}
      >
        <InputComponent {...{ product, setCounter, counter }} />
      </View>
      <View style={[styles.buttonsContainer, { marginTop: hwrosh(50) }]}>
        <View style={{ width: actionButtonWidth }}>
          <AddToCartButtonComponent
            {...{
              counter,
              product,
              isItemInCart,
              setIsItemInCart,
            }}
            callBack={() => {}}
          />
        </View>

        {isItemInCart.counter > 0 && (
          <RemoveItemButton
            {...{
              counter,
              isItemInCart,
              setIsItemInCart,
              product,
            }}
            allButtonWidth={actionButtonWidth}
            callBack={() => {
              // closeMultiplyView();
            }}
          />
        )}
      </View>
    </View>
  );
};

export default BottomSection;
const styles = StyleSheet.create({
  inputContainer: {
    width: productCardWidth * 0.9,
  },
  buttonsContainer: {
    width: productCardWidth * 0.9,

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
