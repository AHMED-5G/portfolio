import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { InitialStateInterface, Product, ProductInCart } from "../../../types";
import { myColors, theme } from "../../../constants/myColors";
import { Slider } from "react-native-range-slider-expo";
import AddToCartButtonComponent from "../AddToCartButtonComponent";
import { productCardHeight, productCardWidth } from "./style";
import RemoveItemButton from "../RemoveItemButton";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useAppSelector } from "../../../redux/Hooks/hooks";

type Props = {
  product: Product;
};

const ProductUpTo100 = ({ product }: Props) => {
  const [counter, setCounter] = useState<number>(1);
  const buttonWidth = productCardWidth * 0.45 - 10;
  const [isItemInCart, setIsItemInCart] = useState({
    id: "0",
    counter: 0,
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

  const showImageFullCardTime = 700;
  const showImageFullCard = () => {
    if (showImageProgress.value == 0) {
      showImageProgress.value = withTiming(1, {
        duration: showImageFullCardTime,
      });
    } else {
      showImageProgress.value = withTiming(0, {
        duration: showImageFullCardTime,
      });
    }
  };

  const showImageProgress = useSharedValue(0);
  const imageContainerRStyle = useAnimatedStyle(() => {
    const toWidth = interpolate(
      showImageProgress.value,
      [0, 1],
      [productCardWidth / 2, productCardWidth]
    );
    const toHeight = interpolate(
      showImageProgress.value,
      [0, 1],
      [productCardHeight / 2, productCardHeight]
    );
    const toIndex = interpolate(showImageProgress.value, [0, 0.3], [0, 1]);
    return {
      width: toWidth,
      height: toHeight,
      zIndex: toIndex,
    };
  });

  const productImageRStyle = useAnimatedStyle(() => {
    const toBorderBottomLeftRadius = interpolate(
      showImageProgress.value,
      [0, 1],
      [0, 20]
    );
    return {
      borderBottomLeftRadius: toBorderBottomLeftRadius,
      borderTopRightRadius: toBorderBottomLeftRadius,
    };
  });

  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <View style={styles.cardContainer}>
      <View
        style={{
          flexDirection: "row",
          width: productCardWidth,
          height: productCardHeight / 2,
          position: "absolute",
          top: 0,
        }}
      >
        <AnimatedTouchable
          activeOpacity={1}
          style={[
            {
              position: "absolute",
              top: 0,
              left: 0,
              width: productCardWidth / 2 + 15,
              height: productCardHeight / 2 + 5,
              borderRadius: 20,
              shadowColor: "#EEE",
              elevation: 1,
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.18,
              shadowRadius: 1.0,
            },
            imageContainerRStyle,
          ]}
          onPress={() => {
            showImageFullCard();
          }}
        >
          <Animated.Image
            source={{
              uri: product.image,
            }}
            resizeMode="cover"
            style={[
              {
                width: "100%",
                height: "100%",
                borderRadius: 20,
                borderBottomLeftRadius: 0,
                borderTopRightRadius: 0,
              },
              productImageRStyle,
            ]}
          />
        </AnimatedTouchable>
        <View
          style={{
            margin: 5,
            position: "absolute",
            left: productCardWidth / 2,
            width: productCardWidth / 2,
            height: productCardHeight / 2,

            // backgroundColor: "orange",
            // justifyContent: "center",
            alignContent: "center",
            // alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              {product.name}
            </Text>
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={{ fontSize: 12, fontWeight: "400", marginRight: 5 }}>
              {product.description}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 40,
                fontWeight: "bold",
                color: theme.secondary,
                margin: 5,
              }}
            >
              ${product.price}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          top: productCardHeight / 2,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
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
            <Animated.View style={[]}>
              <RemoveItemButton
                {...{ counter, isItemInCart, setIsItemInCart, product }}
                allButtonWidth={buttonWidth}
              />
            </Animated.View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductUpTo100;

const styles = StyleSheet.create({
  sliderContainer: {
    height: 30,
    marginTop: 35,
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
    height: productCardHeight,
  },
  buttonsContainer: {
    width: productCardWidth * 0.9,
    marginTop: 10,

    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
});
