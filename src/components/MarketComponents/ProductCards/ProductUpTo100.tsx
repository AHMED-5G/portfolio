import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { InitialStateInterface, Product, ProductInCart } from "../../../types";
import { myColors, theme } from "../../../constants/myColors";
import AddToCartButtonComponent from "../AddToCartButtonComponent";
import {
  productCardBorderRadius,
  productCardHeight,
  productCardWidth,
} from "./style";
import RemoveItemButton from "../RemoveItemButton";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useAppSelector } from "../../../redux/Hooks/hooks";
import { MySlider } from "../../mini/MySlider";

type Props = {
  product: Product;
};

const ProductUpTo100 = ({ product }: Props) => {
  // constants
  const showImageProgress = useSharedValue(0);
  const multiplyViewFadeInProgress = useSharedValue(0);
  const openRemoveButtonProgress = useSharedValue(0);

  const showImageFullCardTime = 500;
  const openMultiplyViewTime = 500;
  const buttonWidth = productCardWidth * 0.45 - 10;
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
  const [counter, setCounter] = useState(1);
  const [isItemInCart, setIsItemInCart] = useState({
    id: "0",
    counter: 0,
  } as ProductInCart);
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
        setIsItemInCart(state.itemsInCart[0]);
        openRemoveButton();
      }
    }
  }, []);

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

  const openRemoveButton = () => {
    openRemoveButtonProgress.value = withTiming(1, { duration: 500 });
  };

  // Use Animated Styles
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
    const toBorderBottomLeftRadius = interpolate(
      showImageProgress.value,
      [0, 1],
      [0, productCardBorderRadius]
    );

    const toIndex = interpolate(showImageProgress.value, [0, 0.3], [0, 1]);
    return {
      borderBottomLeftRadius: toBorderBottomLeftRadius,
      borderTopRightRadius: toBorderBottomLeftRadius,
      width: toWidth,
      height: toHeight,
      zIndex: toIndex,
    };
  });

  const productImageRStyle = useAnimatedStyle(() => {
    const toBorderBottomLeftRadius = interpolate(
      showImageProgress.value,
      [0, 1],
      [0, productCardBorderRadius]
    );
    return {
      borderBottomLeftRadius: toBorderBottomLeftRadius,
      borderTopRightRadius: toBorderBottomLeftRadius,
    };
  });

  const priceContainerRStyle = useAnimatedStyle(() => {
    const toMarginLift = interpolate(
      multiplyViewFadeInProgress.value,
      [0, 1],
      [0, 20]
    );
    return {
      marginLeft: toMarginLift,
    };
  });

  const multiplyViewContainerRStyle = useAnimatedStyle(() => {
    const toOpacity = interpolate(
      multiplyViewFadeInProgress.value,
      [0, 1],
      [0, 1]
    );
    return { opacity: toOpacity };
  });

  return (
    <View style={styles.cardContainer}>
      <View style={styles.topSectionContainer}>
        <AnimatedTouchable
          activeOpacity={1}
          style={[styles.productImageCard, imageContainerRStyle]}
          onPress={() => {
            showImageFullCard();
          }}
        >
          <Animated.Image
            source={product.image}
            resizeMode="cover"
            style={[styles.productImageStyle, productImageRStyle]}
          />
        </AnimatedTouchable>
        <View style={styles.topRightSection}>
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
          <View style={styles.priceSectionContainer}>
            <Animated.View
              style={[styles.priceContainerStyle, priceContainerRStyle]}
            >
              <Text style={styles.priceCurrencyText}>$</Text>
              {
                <Text
                  style={{
                    fontSize: 40,
                    fontWeight: "bold",
                    color: theme.secondary,
                  }}
                >
                  {product.price.toFixed(2)}
                </Text>
              }
            </Animated.View>
            <Animated.View
              style={[
                styles.multiplyViewContainerStyle,
                multiplyViewContainerRStyle,
              ]}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 30, fontWeight: "400", marginRight: 20 }}
                >
                  {"X"}
                </Text>
                <Text style={styles.counterContainer}>{counter}</Text>
              </View>
              <View
                style={{ width: "100%", backgroundColor: "black", height: 2 }}
              ></View>

              <Text style={styles.totalText}>
                ${(product.price * counter).toFixed(2)}
              </Text>
            </Animated.View>
          </View>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.sliderContainer}>
          <MySlider
            min={1}
            max={100}
            step={1}
            valueOnChange={(value) => {
              setCounter(value);
            }}
            containerStyle={styles.slierStyle}
            initialValue={1}
            knobColor={theme.actionColor}
            valueLabelsBackgroundColor="black"
            inRangeBarColor={myColors.grey5}
            outOfRangeBarColor={myColors.grey2}
          />
        </View>
        {/* <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            width: productCardWidth,
            marginTop: 40,
            backgroundColor :'red'
          }}
        > */}
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
              callBack={(lastValue) => {
                if (multiplyViewFadeInProgress.value == 0 && counter != 1) {
                  openMultiplyView();
                }
              }}
            />
          </View>
          <Animated.View style={[]}>
            <RemoveItemButton
              {...{
                counter,
                isItemInCart,
                setIsItemInCart,
                product,
              }}
              openRemoveButton={openRemoveButtonProgress}
              allButtonWidth={buttonWidth}
              callBack={() => {
                closeMultiplyView();
              }}
            />
          </Animated.View>
        </View>
        {/* </View> */}
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
    borderRadius: productCardBorderRadius,
    height: productCardHeight,
  },
  buttonsContainer: {
    width: productCardWidth * 0.9,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  productImageCard: {
    position: "absolute",
    top: 0,
    left: 0,
    width: productCardWidth / 2 + 15,
    height: productCardHeight / 2 + 5,
    backgroundColor: theme.primary,
    borderRadius: productCardBorderRadius,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    borderWidth: 0.5,
    borderColor: theme.borderColor,
    shadowColor: "#EEE",
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  },
  topSectionContainer: {
    flexDirection: "row",
    width: productCardWidth,
    height: productCardHeight / 2,
    position: "absolute",
    top: 0,
  },
  productImageStyle: {
    width: "100%",
    height: "100%",
    borderRadius: productCardBorderRadius,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  topRightSection: {
    margin: 5,
    position: "absolute",
    left: productCardWidth / 2,
    width: productCardWidth / 2,
    height: productCardHeight / 2,
    alignContent: "center",
  },
  priceContainerStyle: {
    //TODO:  check this width use set in constant
    width: 120,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  multiplyViewContainerStyle: {
    width: 120,
    marginTop: 3,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  counterContainer: {
    fontSize: 40,
    fontWeight: "bold",
    color: theme.secondary,
    margin: 5,
  },
  bottomSection: {
    position: "absolute",
    top: productCardHeight / 2,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  slierStyle: {
    height: 70,
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  totalText: {
    fontSize: 30,
    fontWeight: "bold",
    color: theme.secondary,
    margin: 5,
  },
  priceCurrencyText: {
    fontSize: 35,
    fontWeight: "400",
    color: theme.secondary,
  },
  priceSectionContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
