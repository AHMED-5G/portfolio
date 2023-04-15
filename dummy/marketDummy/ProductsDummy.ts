import { Product, ProductTypes } from "../../src/types";
import { stickyImage, water } from "./marketImages";

export const productsData: Product[] = [
  {
    id: "1",
    name: "Drinking Water",
    description: "Natural Drinking Water - 600ml",
    price: 2,
    type: ProductTypes.max10,
    image: water,
  },
  {
    id: "2",
    name: "Sticky Notes ",
    description: "3x3 Inches,Bright Colors Self-Stick",
    image: stickyImage,
    price: 0.3,
    type: ProductTypes.upTo100,
  },
  // {
  // id: "2",
  //   image:
  //     "https://cdn.pixabay.com/photo/2022/11/23/13/25/gift-7612174_1280.png",
  //   name: "Prepaid Gift Cards",
  //   price: 10,
  //   type: ProductTypes.Product10Step,
  //   listOfPrice: [10, 20, 50, 100, 200],
  // },
];
