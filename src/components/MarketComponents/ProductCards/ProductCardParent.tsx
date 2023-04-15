import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import TopSection from "./TopSection";
import { InitialStateInterface, Product, ProductInCart } from "../../../types";
import BottomSection from "./BottomSection";
import {
  productCardWidth,
  productCardBorderRadius,
  productCardHeight,
} from "./style";
import { useSharedValue, withTiming } from "react-native-reanimated";
import { useAppSelector } from "../../../redux/Hooks/hooks";

type Props = {
  product: Product;
};

const ProductCardParent = ({ product }: Props) => {
  const openMultiplyViewTime = 700;
  const [isItemInCart, setIsItemInCart] = useState({
    id: "0",
    counter: 0,
  } as ProductInCart);

  const [counter, setCounter] = useState(1);
  const multiplyViewFadeInProgress = useSharedValue(0);
  const openRemoveButtonProgress = useSharedValue(0);
  const state: InitialStateInterface = useAppSelector(
    (state) => state.dataSlice
  );
  //useEffects
  // on Component load multiplyView control listening to counter
  useEffect(() => {
    if (counter > 1) {
      openMultiplyView();
    } else {
      closeMultiplyView();
    }
  }, [counter]);

  //check if the product in cart
  useEffect(() => {
    if (state.itemsInCart.length) {
      state.itemsInCart.filter((item) => item.id == product.id);
      if (state.itemsInCart[0]) {
        openRemoveButtonProgress.value = withTiming(1, { duration: 100 });
        setTimeout(() => {
          setIsItemInCart(state.itemsInCart[0]);
        }, 100);
      }
    }
  }, []);

  useEffect(() => {
    if (isItemInCart.counter > 0) {
      openRemoveButton();
    }
  }, [isItemInCart]);

  // functions
  const openMultiplyView = () => {
    multiplyViewFadeInProgress.value = withTiming(1, {
      duration: openMultiplyViewTime,
    });
  };

  const closeMultiplyView = () => {
    multiplyViewFadeInProgress.value = withTiming(0, {
      duration: openMultiplyViewTime,
    });
  };

  const openRemoveButton = () => {
    if (openRemoveButtonProgress.value == 0) {
      openRemoveButtonProgress.value = withTiming(1, {
        duration: 700,
      });
    }
  };
  return (
    <View style={styles.cardContainer}>
      <TopSection {...{ product, counter, multiplyViewFadeInProgress }} />
      <BottomSection
        {...{
          product,
          counter,
          setCounter,
          isItemInCart,
          setIsItemInCart,
          openRemoveButtonProgress,
          multiplyViewFadeInProgress,
        }}
      />
    </View>
  );
};

export default ProductCardParent;

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: productCardWidth,
    backgroundColor: "white",
    marginTop: 140,
    marginBottom: 90,
    borderRadius: productCardBorderRadius,
    height: productCardHeight,
  },
});
