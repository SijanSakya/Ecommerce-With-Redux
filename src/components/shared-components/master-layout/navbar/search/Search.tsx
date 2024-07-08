"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const Search = () => {
  const router = useRouter()
  return (
    <div className="flex gap-3 items-center">
      <input placeholder="What are you looking for" className="py-1 px-3 rounded-lg bg-gray-200"/>
      <MdOutlineFavoriteBorder className="h-6 w-6 cursor-pointer" onClick={()=>router.push('./favourite')}/>
      <IoCartOutline className="h-6 w-6 cursor-pointer" onClick={()=>router.push('./cart')}/>
    </div>
  );
};

export default Search;
