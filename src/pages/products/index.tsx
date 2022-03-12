import React, { useState, useEffect, FunctionComponent } from "react";

import axios from "axios";

import { useAppSelector, useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cartSlice";

import type { Product } from "@types";

import ProductCard from "@organisms/productcard";

const ProductsPage: FunctionComponent = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const themeColor = useAppSelector((state) => state.general.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const resp = await axios.get("https://api.codingthailand.com/api/course");
      setProducts(resp.data.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <div className="text-center mt-5 text-red-500">
        <h4>Error for API ,Please try again</h4>
        {/* @ts-ignore */}
        <p>{error.response.data.message}</p>
      </div>
    );
  }
  return (
    <div className="justify-center h-max-content w-screen px-16 md:px-32">
      <div className="flex-row mt-12">
        <h1 className="text-6xl md:text-7xl font-bold">Products</h1>
        <section className="md:h-full flex items-center text-black">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap justify-center -m-4">
              {products.map((product: Product) => {
                return (
                  <ProductCard
                    product={product}
                    theme={themeColor}
                    addToCart={() => {
                      dispatch(addToCart({...product, qty: 1}));
                    }}
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
