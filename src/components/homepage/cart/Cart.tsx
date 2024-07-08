"use client";
import ProductCard from "@/components/shared-components/cards/ProductCard/ProductCard";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex gap-3">
          {cart.map((data: any) => (
            <ProductCard productDetail={data} cart={true} />
          ))}
        </div>
      ) : (
        <div className="text-lg flex items-center justify-center">No products in Cart</div>
      )}
    </div>
  );
};

export default Cart;
