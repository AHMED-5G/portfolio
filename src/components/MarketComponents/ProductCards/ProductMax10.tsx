import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Product, ProductTypes } from "../../../types";
import ProductCardParent from "./ProductCardParent";
import SliderInput from "./inputsComponents/SliderInput";

type Props = {
  product: Product;
};

// const ProductMax10 = ({ product }: Props) => {
//   const [counter, setCounter] = useState(1);
//   return (
//     <ProductCardParent
//       product={product}
//       // InputComponent={
//       //   product.type == ProductTypes.upTo100 ? (
//       //     <SliderInput {...{ setCounter }} />
//       //   ) : (
//       //     <View></View>
//       //   )
//       // }
//       counter={counter}
//       setCounter={setCounter}
//     />
//   );
// };

// export default ProductMax10;

const styles = StyleSheet.create({});
