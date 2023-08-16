import { StyleSheet, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import TopSection from "./TopSection";
import {
  InitialStateInterface,
  Product,
  ProductInCart,
  ProductTypes,
} from "../../../types";
import BottomSection from "./BottomSection";
import { productCardWidth, productCardBorderRadius } from "./style";
import { useSharedValue, withTiming } from "react-native-reanimated";
import { useAppSelector } from "../../../redux/Hooks/hooks";
import { theme } from "../../../constants/theme";
import { hwrosh } from "../../../constants/Layout";

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
  const multiplyViewFadeInProgress = useSharedValue(
    product.type == ProductTypes.upTo100 ? 1 : 0
  );

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
    try {
      const thisProduct = state.itemsInCart.find(
        (item) => item.id == product.id
      );

      if (thisProduct != undefined) {
        openRemoveButtonProgress.value = withTiming(1, { duration: 100 });

        setTimeout(() => {
          setIsItemInCart(thisProduct);
        }, 100);
      }
    } catch (error) {
      console.warn(error);
    }
  }, []);

  // functions
  function openMultiplyView() {
    multiplyViewFadeInProgress.value = withTiming(1, {
      duration: openMultiplyViewTime,
    });
  }

  function closeMultiplyView() {
    multiplyViewFadeInProgress.value = withTiming(0, {
      duration: openMultiplyViewTime,
    });
  }

  const openRemoveButton = useCallback(() => {
    if (openRemoveButtonProgress.value == 0) {
      openRemoveButtonProgress.value = withTiming(1, {
        duration: 700,
      });
    }
  }, []);

  return (
    <View
      style={[
        styles.cardContainer,
        { backgroundColor: theme.cardBackground() },
      ]}
    >
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
          openRemoveButton,
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
    // backgroundColor: "white",
    marginTop: hwrosh(20),
    // marginBottom: 20,
    borderRadius: productCardBorderRadius,
    height: hwrosh(420),
  },
});
