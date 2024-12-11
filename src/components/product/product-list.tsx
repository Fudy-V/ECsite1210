import React from "react";
import ProductCard from "./product-card";
import { productsMock } from "@/mock/products";

const ProductList = () => {
  return (
    <div className=" grid grid-flow-col grid-rows-3 gap-2 m-3">
      {productsMock.map((item) => (
        <ProductCard
          key={item.name}
          name={item.name}
          description={item.description}
          price={item.price}
        ></ProductCard>
      ))}
    </div>
  );
};

export default ProductList;
