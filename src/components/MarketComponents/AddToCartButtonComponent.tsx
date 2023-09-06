import React from "react";
import MedButton from "../mini/MedButton";
import { theme } from "../../constants/theme";
import { Product, ProductInCart } from "../../types";
import { i18n } from "../../translation/i18n";
import { averageRatio, fontRatio } from "../../constants/Layout";

type Props = {
  counter: number;
  product: Product;
  isItemInCart: ProductInCart;
  setIsItemInCart: React.Dispatch<React.SetStateAction<ProductInCart>>;
  callBack?: (lastValue: number) => void;
};

const AddToCartButtonComponent = ({
  counter,
  product,
  isItemInCart,
  setIsItemInCart,
  callBack,
}: Props) => {
  const addCounterToCart = () => {
    if (isItemInCart.id != "0") {
      if (isItemInCart.counter < 999 && isItemInCart.counter + counter < 999) {
        setIsItemInCart({
          ...product,
          counter: counter + isItemInCart.counter,
        });
      }
      callBack?.(counter + isItemInCart.counter);
    } else {
      setIsItemInCart({ ...product, counter: counter + isItemInCart.counter });
      callBack?.(counter + isItemInCart.counter);
    }
  };

  return (
    <MedButton
      title={i18n.t("addToCart")}
      accessibilityHint={"Add " + counter + "to Cart"}
      width={"100%"}
      borderRadius={averageRatio(5)}
      color={theme.darkTheme ? theme.secondaryColor() : theme.actionColor}
      textStyle={{ fontSize: fontRatio(24), color: theme.secondaryColorText() }}
      onPress={() => {
        addCounterToCart();
      }}
    />
  );
};

export default AddToCartButtonComponent;
