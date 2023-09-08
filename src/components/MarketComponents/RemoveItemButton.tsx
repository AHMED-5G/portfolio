import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { theme } from "../../constants/theme";
import { productCardWidth } from "./ProductCards/style";
import { Product, ProductInCart } from "../../types";
import { i18n } from "../../translation/i18n";
import {
  averageRatio,
  fontRatio,
  hwrosh,
  wwrosw,
} from "../../constants/Layout";

type Props = {
  isItemInCart: ProductInCart;
  setIsItemInCart: React.Dispatch<React.SetStateAction<ProductInCart>>;
  product: Product;
  allButtonWidth: number;
  callBack?: () => void;
};

const RemoveItemButton = ({
  isItemInCart,
  setIsItemInCart,
  allButtonWidth,
  callBack,
}: Props) => {
  const buttonHeight = hwrosh(55);
  const counterContainerWidth = allButtonWidth * 0.3;
  const buttonWidth = productCardWidth * 0.45 - wwrosw(10);

  const removeItems = () => {
    setIsItemInCart({ id: "0", counter: 0 } as ProductInCart);
    callBack?.();
  };

  return (
    <View style={[{ overflow: "hidden", width: buttonWidth }]}>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          borderWidth: 0.5,
          borderColor: theme.darkTheme ? "undefined" : theme.error,
          height: buttonHeight,
          borderRadius: averageRatio(5),
          flexDirection: "row",
          justifyContent: "space-around",
        }}
        onPress={() => {
          removeItems();
        }}
      >
        <View
          style={[
            {
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              margin: averageRatio(2),
            },
          ]}
        >
          <Text
            style={{
              fontSize: theme.fontSize.s22,
              color: theme.darkTheme ? theme.error : theme.black,
              fontWeight: "bold",
            }}
          >
            {i18n.t("remove")}
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            width: wwrosw(60),
          }}
        >
          <View
            style={{
              width: counterContainerWidth,
              height: hwrosh(40),
              margin: averageRatio(5),
              borderRadius: averageRatio(10),
              backgroundColor: theme.secondaryColor(),
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: theme.secondaryColorText(),
                fontSize: fontRatio(20),
                fontWeight: "bold",
                margin: averageRatio(5),
              }}
              numberOfLines={1}
            >
              {isItemInCart.counter}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RemoveItemButton;
