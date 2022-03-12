import React from "react";

import type { Product } from "@types";
import { ShoppingCart } from "react-feather";

import Icon from "@atoms/icon";

type Prop = {
  type: "product" | "cart";
  product: Product;
  theme: string;
  addToCart?: any;
  qty?: number;
};

const ProductCard = ({ type, product, theme, addToCart, qty }: Prop) => {
  return (
    <div className="p-4 sm:w-1/2 lg:w-1/3">
      <div
        className={`${
          theme === "light"
            ? " text-black border-black"
            : " text-white border-white "
        } h-full border-2 rounded-lg overflow-hidden`}
      >
        <img
          className="lg:h-72 md:h-48 w-full object-cover object-center"
          src={product.picture}
          alt="blog"
        />
        <div className="p-6 transition duration-300 ease-in">
          <h2 className="text-base font-medium mb-1">{product.date}</h2>
          <h1 className="text-4xl font-semibold mb-3">{product.title}</h1>
          {type === "product" && (
            <p className="leading-relaxed mb-3">{product.detail}</p>
          )}

          <div className="flex items-center flex-wrap ">
            {type === "product" ? (
              <>
                <div className="font-bold text-3xl inline-flex items-center md:mb-2 lg:mb-0">
                  {product.view} ฿
                </div>
                <span
                  className=" mr-2 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1"
                  onClick={addToCart}
                >
                  <Icon Icon={ShoppingCart} theme={theme} size={28} />
                </span>
              </>
            ) : (
              <>
                <div className="font-medium text-xl inline-flex items-center md:mb-2 lg:mb-0">
                  {qty}x
                </div>
                <span
                  className="font-bold text-2xl mr-2 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none pr-3 py-1"
                >
                  {(qty||0)*product.view} ฿
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
