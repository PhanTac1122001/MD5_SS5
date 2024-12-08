import { Button } from "antd";
import React, { useContext } from "react";
import { formatMoney } from "../utils/formatData";
import { CartContext } from "../providers/GlobalState";

export default function ProductCard({ product }) {
  const { handleAddToCart } = useContext(CartContext);
  return (
    <>
      <li className="border rounded-md shadow-sm min-w-[200px]">
        <div
          style={{ backgroundImage: `url(${product?.image})` }}
          className={`max-h-[300px] min-h-[300px] bg-no-repeat bg-cover`}
        >
          {/* <img
            className="w-full h-full object-cover"
            src={product?.image}
            alt=""
          /> */}
        </div>
        <div className="p-5 flex flex-col gap-3 items-center">
          <h3 className="font-semibold line-clamp-2">{product.productName}</h3>
          <p>{formatMoney(product.price)}</p>
          <Button
            type="primary"
            className="w-full h-9"
            onClick={() => handleAddToCart(product)}
          >
            Thêm vào giỏ hàng
          </Button>
        </div>
      </li>
    </>
  );
}
