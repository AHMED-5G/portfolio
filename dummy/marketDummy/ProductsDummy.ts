import { Product, ProductTypes } from "../../src/types";
import { stickyImage } from "./marketImages";

export const productsData: Product[] = [
  // {
  // id: '1' ,
  //   name: "mug",
  //   price: 3,
  //   type: ProductTypes.max10,
  //   image:
  //     "https://images.unsplash.com/photo-1555447014-7ead71574544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bXVnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  // },
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
