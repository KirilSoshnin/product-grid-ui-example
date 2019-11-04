import MockProductData from "./MockProductData";
import { Products } from "./Products";

export default async function App() {
  var products = await MockProductData();
  document.getElementById("products").appendChild(Products(products));
}
