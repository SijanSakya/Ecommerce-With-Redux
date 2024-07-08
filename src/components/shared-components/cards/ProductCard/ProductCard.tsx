import { addInCart, deleteFromCart } from "@/redux/features/add-to-cart/addCartSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import React from "react";
import { MdOutlineFavoriteBorder, MdOutlineDelete } from "react-icons/md";
import { SlEye } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";

interface productDetailProps {
  productDetail: any;
  cart?: boolean;
}
const ProductCard = ({ productDetail, cart }: productDetailProps) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-3">
      <div className=" relative border rounded-t-lg h-60 w-60 group">
        <div className="absolute right-2 top-2 flex flex-col gap-1">
          {!cart ? (
            <>
              <MdOutlineFavoriteBorder className="rounded-full p-1 h-7 w-7 bg-white cursor-pointer" />
              <SlEye className="rounded-full p-1 h-7 w-7 bg-white cursor-pointer" />
            </>
          ) : (
            <MdOutlineDelete
              className="rounded-full p-1 h-7 w-7 bg-white cursor-pointer"
              onClick={() => dispatch(deleteFromCart(productDetail))}
            />
          )}
        </div>

        <Image
          src={productDetail.image}
          alt={"products"}
          className=""
          height={1200}
          width={1200}
          className=" h-full w-full"
          priority
        />
        {!cart && (
          <div
            className="absolute bottom-0 flex justify-center bg-black/90 w-full text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => dispatch(addInCart(productDetail))}
          >
            Add to card
          </div>
        )}
      </div>
      <div className="px-4">
        <p>{productDetail.title}</p>
        <p className="text-red-400">Rs {productDetail.price}</p>
        <p>Rating ({productDetail.review})</p>
      </div>
    </div>
  );
};

export default ProductCard;
