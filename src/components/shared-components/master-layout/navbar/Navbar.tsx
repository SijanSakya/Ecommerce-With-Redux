"use client";
import React from "react";
import Tab from "../tab/Tab";
import Search from "./search/Search";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between py-5 sticky top-0">
      <div onClick={()=>router.push('/')} className="cursor-pointer">
        <p className="text-lg font-bold">Logo</p>
      </div>
      <Tab />
      <Search />
    </div>
  );
};

export default Navbar;
