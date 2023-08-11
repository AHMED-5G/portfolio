import { TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../constants/myColors";
import { circularRatio, hwrosh, wwrosw } from "../../constants/Layout";

const Cart = () => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: wwrosw(48),
        height: hwrosh(48),
        marginLeft: wwrosw(10),
        transform: theme.iconLocalizationTransform(),
      }}
    >
      <AntDesign
        name="shoppingcart"
        size={circularRatio(38)}
        color={theme.iconColor()}
      />
    </TouchableOpacity>
  );
};

export default Cart;
