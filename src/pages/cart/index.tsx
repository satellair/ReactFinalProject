import React, { useState, useEffect, FunctionComponent } from "react";

import axios from "axios";

import { useAppSelector, useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cartSlice";

import type { Product } from "@types";

import ProductCard from "@organisms/productcard";

interface ProductInCart extends Product {
  qty: number;
}

const ProductsPage: FunctionComponent = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = React.useState(null);

  const themeColor = useAppSelector((state) => state.general.theme);
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const cartTotal = useAppSelector((state) => state.cart.cartTotalQty);

  return (
    <div className="justify-center h-max w-screen px-16 md:px-32">
      <div className="flex-row mt-12">
        <h1 className="text-6xl md:text-7xl font-bold">Cart</h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-bold">
          {cartTotal} items in cart
        </h2>
        <section className="md:h-full flex items-center text-black">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap justify-center -m-4">
              {cartItems.map((product: ProductInCart) => {
                return (
                  <ProductCard
                    type="cart"
                    product={product}
                    theme={themeColor}
                    qty={product.qty}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductsPage;
