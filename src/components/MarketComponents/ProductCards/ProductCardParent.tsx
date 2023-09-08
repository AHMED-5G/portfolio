import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import TopSection from "./TopSection";
import { Product, ProductInCart, ProductTypes } from "../../../types";
import BottomSection from "./BottomSection";
import { productCardWidth, productCardBorderRadius } from "./style";
import { useSharedValue, withTiming } from "react-native-reanimated";
import { theme } from "../../../constants/theme";
import { hwrosh } from "../../../constants/Layout";

type Props = {
  product: Product;
};

const ProductCardParent = ({ product }: Props) => {
  const openMultiplyViewTime = 500;
  const [isItemInCart, setIsItemInCart] = useState({
    id: "0",
    counter: 0,
  } as ProductInCart);

  const [counter, setCounter] = useState(1);
  const multiplyViewFadeInProgress = useSharedValue(
    product.type == ProductTypes.upTo100 ? 1 : 0,
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

  return (
    <View
      style={[
        styles.cardContainer,
        {
          marginTop: hwrosh(20),
          height: hwrosh(420),
          backgroundColor: theme.cardBackground(),
        },
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
    borderRadius: productCardBorderRadius,
    overflow: "hidden",
  },
});
