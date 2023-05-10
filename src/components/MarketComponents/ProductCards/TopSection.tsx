import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AccessibilityInfo,
} from "react-native";
import React from "react";
import {
  inCalculationTextSize,
  productCardBorderRadius,
  productCardHeight,
  productCardWidth,
} from "./style";
import { theme } from "../../../constants/myColors";
import { Product } from "../../../types";
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  product: Product;
  counter: number;
  multiplyViewFadeInProgress: SharedValue<number>;
};

const priceInitialSize = 45;
const TopSection = ({
  product,
  counter,
  multiplyViewFadeInProgress,
}: Props) => {
  const showImageProgress = useSharedValue(0);
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
  const showImageFullCardTime = 300;

  //functions
  function showImageFullCard() {
    if (showImageProgress.value == 0) {
      showImageProgress.value = withTiming(1, {
        duration: showImageFullCardTime,
      });
    } else {
      showImageProgress.value = withTiming(0, {
        duration: showImageFullCardTime,
      });
    }
  }

  //reanimated style
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

    const toIndex = interpolate(showImageProgress.value, [0, 0.3], [0, 2]);
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

  const priceTextRStyle = useAnimatedStyle(() => {
    const toSize = interpolate(
      multiplyViewFadeInProgress.value,
      [0, 1],
      [priceInitialSize, inCalculationTextSize]
    );
    return { fontSize: toSize };
  });

  const priceCurrencyRStyle = useAnimatedStyle(() => {
    const toOpacity = interpolate(
      multiplyViewFadeInProgress.value,
      [0, 1],
      [1, 0]
    );
    return { opacity: toOpacity };
  });

  const topSectionRStyle = useAnimatedStyle(() => {
    const toIndex = interpolate(showImageProgress.value, [0, 0.3], [0, 2]);

    return { zIndex: toIndex };
  });
  return (
    <Animated.View style={[styles.topSectionContainer, topSectionRStyle]}>
      <AnimatedTouchable
        activeOpacity={1}
        style={[styles.productImageCard, imageContainerRStyle]}
        onPress={() => {
          showImageFullCard();
          AccessibilityInfo.announceForAccessibility(
            showImageProgress.value == 0
              ? "opening image in 100% of card"
              : "closing image in 25% of card"
          );
        }}
        accessibilityHint={"Product Image tab to show image bigger"}
      >
        <Animated.Image
          source={product.image}
          resizeMode="cover"
          style={[styles.productImageStyle, productImageRStyle]}
        />
      </AnimatedTouchable>
      <View style={[styles.topRightSection]}>
        <View
          style={{
            marginLeft: theme.localizationRtl ? 10 : 0,
            flexDirection: theme.freezeInLeftWhenIsRTLTrue(),
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            {product.name}
          </Text>
        </View>
        <View
          style={{
            marginTop: 5,
            marginLeft: theme.localizationRtl ? 5 : 0,
            flexDirection: theme.freezeInLeftWhenIsRTLTrue(),
          }}
        >
          <Text style={{ fontSize: 12, fontWeight: "400", marginRight: 5 }}>
            {product.description}
          </Text>
        </View>
        <View style={styles.priceSectionContainer}>
          <Animated.View
            style={[styles.priceContainerStyle, priceContainerRStyle]}
          >
            <Animated.Text
              style={[styles.priceCurrencyText, priceCurrencyRStyle]}
            >
              $
            </Animated.Text>
            {
              <Animated.Text style={[styles.priceText, priceTextRStyle]}>
                {product.price.toFixed(2)}
              </Animated.Text>
            }
          </Animated.View>
          <Animated.View
            style={[
              styles.multiplyViewContainerStyle,
              multiplyViewContainerRStyle,
            ]}
          >
            <View style={styles.multiplicationSignText}>
              <Text
                style={{ fontSize: 30, fontWeight: "400", marginRight: 20 }}
              >
                {"X"}
              </Text>
              <Text style={styles.counterText}>{counter}</Text>
            </View>
            <View
              style={{ width: "100%", backgroundColor: "black", height: 2 }}
            ></View>
            <View style={{}}>
              <Text style={styles.totalText}>
                ${(product.price * counter).toFixed(2)}
              </Text>
            </View>
          </Animated.View>
        </View>
      </View>
    </Animated.View>
  );
};

export default TopSection;

const styles = StyleSheet.create({
  productImageCard: {
    position: "absolute",
    top: 0,
    left: 0,
    width: productCardWidth / 2,
    height: productCardHeight / 2,
    backgroundColor: theme.white,
    borderRadius: productCardBorderRadius,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    borderWidth: 0.8,
    borderColor: theme.borderColor,
    shadowColor: "#EEE",
    elevation: 5,
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
    // zIndex: 1,
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
    // backgroundColor: "pink",
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
  counterText: {
    fontSize: inCalculationTextSize,
    fontWeight: "bold",
    color: theme.secondary,
    margin: 5,
  },
  totalText: {
    fontSize: 30,
    fontWeight: "bold",
    color: theme.secondary,
    margin: 5,
    direction: "rtl",
  },
  priceCurrencyText: {
    fontSize: inCalculationTextSize,
    fontWeight: "400",
    color: theme.secondary,
  },
  priceSectionContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  priceText: {
    fontSize: inCalculationTextSize,
    fontWeight: "bold",
    color: theme.secondary,
  },
  multiplicationSignText: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
