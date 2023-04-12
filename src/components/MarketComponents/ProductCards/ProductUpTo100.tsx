import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { InitialStateInterface, Product, ProductInCart } from "../../../types";
import { width } from "../../../constants/Layout";
import { myColors, theme } from "../../../constants/myColors";
import { Slider } from "react-native-range-slider-expo";
import ProductImageComponent from "./ProductImageComponent";
import AddToCartButtonComponent from "../AddToCartButtonComponent";
import { productCardWidth } from "./style";
import RemoveItemButton from "../RemoveItemButton";
import Animated from "react-native-reanimated";
import { useAppSelector } from "../../../redux/Hooks/hooks";

type Props = {
  product: Product;
};

const ProductUpTo100 = ({ product }: Props) => {
  const [counter, setCounter] = useState<number>(1);
  const buttonWidth = productCardWidth * 0.45 - 10;
  const [isItemInCart, setIsItemInCart] = useState({
    id: "0",
  } as ProductInCart);
  const state: InitialStateInterface = useAppSelector(
    (state) => state.dataSlice
  );

  useEffect(() => {
    if (isItemInCart.id != "0") {
      if (state.itemsInCart.length > 0) {
        const thisProduct: ProductInCart = state.itemsInCart.filter(
          (item) => (item.id = product.id)
        )[1];
        if (thisProduct) {
          setIsItemInCart(thisProduct);
        }
      }
    }
  }, []);

  // const thisProduct = state.itemsInCart.filter((item) => item.id == product.id);
  return (
    <View style={styles.cardContainer}>
      <View style={{ flexDirection: "row", width: productCardWidth }}>
        <View>
          <ProductImageComponent product={product} />
        </View>
        <View
          style={{
            margin: 5,
          }}
        >
          <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              {product.name}
            </Text>
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={{ fontSize: 12, fontWeight: "400" }}>
              {product.description}
            </Text>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              ${product.price}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.sliderContainer}>
        <Slider
          min={1}
          max={100}
          step={1}
          valueOnChange={(value) => {
            setCounter(value);
          }}
          containerStyle={{
            height: 70,
            padding: 10,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
          initialValue={1}
          knobColor={theme.actionColor}
          valueLabelsBackgroundColor="black"
          inRangeBarColor={myColors.grey5}
          outOfRangeBarColor={myColors.grey2}
        />
      </View>
      <Text>in Cart :{isItemInCart.counter} </Text>
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          width: productCardWidth,
          marginTop: 40,
        }}
      >
        <View style={styles.buttonsContainer}>
          <View style={{ width: buttonWidth }}>
            <AddToCartButtonComponent
              {...{
                counter,
                setCounter,
                product,
                isItemInCart,
                setIsItemInCart,
              }}
            />
          </View>
          {/* <Animated.View style={[]}>
            <RemoveItemButton counter={counter} />
          </Animated.View> */}
        </View>
      </View>
    </View>
  );
};

export default ProductUpTo100;

const styles = StyleSheet.create({
  sliderContainer: {
    height: 30,
    marginTop: 20,
    width: productCardWidth * 0.9,
  },
  cardContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: productCardWidth,
    backgroundColor: "white",
    marginTop: 100,
    borderRadius: 20,
  },
  buttonsContainer: {
    width: productCardWidth * 0.9,
    marginTop: 15,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
});
