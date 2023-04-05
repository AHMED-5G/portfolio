import { Product, ProductTypes } from "../../src/types";

export const productsData: Product[] = [
  {
    name: "mug",
    price: 3,
    type: ProductTypes.max10,
    image:
      "https://images.unsplash.com/photo-1555447014-7ead71574544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bXVnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Sticky Notes 3x3 Inches,Bright Colors Self-Stick",
    image:
      "https://images.unsplash.com/photo-1587145820137-a9dbc8c5ed99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    price: 0.3,
    type: ProductTypes.upTo100,
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2013/03/02/01/25/american-express-89024_960_720.jpg",
    name: "Visa Gifted Cars",
    price: 10,
    type: ProductTypes.every10,
  },
];
