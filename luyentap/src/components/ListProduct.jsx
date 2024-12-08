import { Button } from "antd";
import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { CartContext } from "../providers/GlobalState";

export default function ListProduct() {
  const { products } = useContext(CartContext);
  console.log(products);

  return (
    <>
      <main className="container m-auto max-w-[1360px] px-[60px] pt-[24px]">
        <h3 className="text-center text-[32px] font-semibold">List Product</h3>
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {products.map((product) => (
            <React.Fragment key={product.id}>
              <ProductCard product={product} />
            </React.Fragment>
          ))}
        </ul>
      </main>
    </>
  );
}
