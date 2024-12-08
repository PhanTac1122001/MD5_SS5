import React, { useState } from "react";
import Header from "../components/Header";
import ListProduct from "../components/ListProduct";
import products from "../data.json";
export const CartContext = React.createContext();

const ACT_UP = "up";
const ACT_DOWN = "down";

export default function GlobalState() {
  const [carts, setCarts] = useState(() => {
    const cartLocal = JSON.parse(localStorage.getItem("carts")) || [];
    return cartLocal;
  });

  const saveData = (key, value) => {
    setCarts(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  const handleAddToCart = (product) => {
    const findProductById = carts.find((pro) => pro.id === product.id);
    if (findProductById) {
      const updateProduct = carts.map((pro) => {
        return pro.id === product.id
          ? { ...pro, quantity: pro.quantity + 1 }
          : pro;
      });
      saveData("carts", updateProduct);
    } else {
      const newProduct = [...carts, { ...product, quantity: 1 }];
      saveData("carts", newProduct);
    }
  };

  const handleRemoveCart = (id) => {
    const filterProducts = carts.filter((pro) => pro.id !== id);

    saveData("carts", filterProducts);
  };

  const handleUpdateQuantity = (type, id) => {
    if (type === ACT_UP) {
      const updateProducts = carts.map((pro) => {
        return (pro.id === id
          ? {
              ...pro,
              quantity:
                pro.quantity + 1 > pro.stock ? pro.stock : pro.quantity + 1,
            }
          : pro);
      });
      saveData("carts", updateProducts);
    } else {
      const updateProducts = carts.map((pro) => {
        return (pro.id ===id
          ? { ...pro, quantity: pro.quantity - 1 < 1 ? 1 : pro.quantity - 1 }
          : pro);
      });
      saveData("carts", updateProducts);
    }
  };
  return (
    <>
      <CartContext.Provider
        value={{
          products,
          handleAddToCart,
          handleRemoveCart,
          handleUpdateQuantity,
          carts,
        }}
      >
        <Header />
        <ListProduct />
      </CartContext.Provider>
    </>
  );
}
