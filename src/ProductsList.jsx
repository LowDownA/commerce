import React from "react";
import Products from "./Products";
function ProductsList() {
  return (
    <div>
      <h1>Products</h1>
      <Products item="Iphone 14" price="$120" imgSrc="./public/iphone-14.jpg"/>
      <Products item="gaming laptop" price="$160" imgSrc="./public/gaming.avif" />
      <Products item="macbook" price="$180" imgSrc="./public/mac.jpg" />
      <Products item="headphones" price="$100" imgSrc="./public/headphones.jpg" />
      <Products item="ipad" price="$140" imgSrc="./public/ipad.jpg"  />
      <Products item="watch" price="$222" imgSrc="./public/rolex.webp" />
    </div>
  );
}
export default ProductsList;
