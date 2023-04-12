import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MedButton from "../mini/MedButton";
import { width } from "../../constants/Layout";
import { theme } from "../../constants/myColors";
import { useAppDispatch } from "../../redux/Hooks/hooks";
import { ADD_ITEM_TO_CART } from "../../redux/reducers/dataSlice";
import { InitialStateInterface, Product, ProductInCart } from "../../types";

type Props = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  product: Product;
  isItemInCart: ProductInCart;
  setIsItemInCart: React.Dispatch<React.SetStateAction<ProductInCart>>;
};

const AddToCartButtonComponent = ({
  counter,
  setCounter,
  product,
  isItemInCart,
  setIsItemInCart,
}: Props) => {
  const dispatch = useAppDispatch();
  const state: InitialStateInterface = useAppSelector(
    (state) => state.dataSlice
  );
  const addCounterToCart = () => {
    if (isItemInCart.id != "0") {
      console.log("in if", isItemInCart.counter);
      const thisProduct: ProductInCart = state.itemsInCart.filter(
        (item) => (item.id = product.id)
      )[1];
      // dispatch(
      //   ADD_ITEM_TO_CART({
      //     ...product,
      //     counter: isItemInCart.counter + counter,
      //   })
      // );
    } else {
      console.log("else");
      dispatch(ADD_ITEM_TO_CART({ ...product, counter }));
      setIsItemInCart({ ...product, counter });
    }
  };
  return (
    <MedButton
      title="Add to cart"
      width={"100%"}
      borderRadius={10}
      color={theme.actionColor}
      textStyle={{ fontSize: 24 }}
      onPress={() => {
        addCounterToCart();
      }}
    />
  );
};

export default AddToCartButtonComponent;

const styles = StyleSheet.create({});
function useAppSelector(arg0: (state: any) => any): InitialStateInterface {
  throw new Error("Function not implemented.");
}

