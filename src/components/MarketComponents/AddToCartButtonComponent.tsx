import { AccessibilityInfo, StyleSheet, Text, View } from "react-native";
import React from "react";
import MedButton from "../mini/MedButton";
import { theme } from "../../constants/myColors";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks/hooks";
import { SET_CART } from "../../redux/reducers/dataSlice";
import { InitialStateInterface, Product, ProductInCart } from "../../types";
import { i18n } from "../../translation/i18n";

type Props = {
  counter: number;
  product: Product;
  isItemInCart: ProductInCart;
  setIsItemInCart: React.Dispatch<React.SetStateAction<ProductInCart>>;
  callBack?: (lastValue: number) => void;
  openRemoveButton: () => void;
};

const AddToCartButtonComponent = ({
  counter,
  product,
  isItemInCart,
  setIsItemInCart,
  callBack,
  openRemoveButton,
}: Props) => {
  const dispatch = useAppDispatch();
  const state: InitialStateInterface = useAppSelector(
    (state) => state.dataSlice
  );

  const addCounterToCart = () => {
    if (isItemInCart.id != "0") {
      if (isItemInCart.counter < 999 && isItemInCart.counter + counter < 999) {
        const newArray = state.itemsInCart.filter(
          (item) => item.id != product.id
        );
        dispatch(
          SET_CART([
            ...newArray,
            { ...product, counter: counter + isItemInCart.counter },
          ])
        );
        setIsItemInCart({
          ...product,
          counter: counter + isItemInCart.counter,
        });
      }
      callBack?.(counter + isItemInCart.counter);
    } else {
      dispatch(
        SET_CART([
          ...state.itemsInCart,
          { ...product, counter: counter + isItemInCart.counter },
        ])
      );
      openRemoveButton();
      setIsItemInCart({ ...product, counter: counter + isItemInCart.counter });
      callBack?.(counter + isItemInCart.counter);
    }
  };

  return (
    <MedButton
      title={i18n.t("addToCart")}
      accessibilityHint={"Add " + counter + "to Cart"}
      width={"100%"}
      borderRadius={5}
      color={theme.actionColor}
      textStyle={{ fontSize: 24 }}
      onPress={() => {
        addCounterToCart();
      }}
    />
  );
};

export default AddToCartButtonComponent;

const styles = StyleSheet.create({});
