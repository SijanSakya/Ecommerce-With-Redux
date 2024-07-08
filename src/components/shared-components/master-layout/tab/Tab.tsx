import React from "react";
import Link from "next/link";

const navList = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "Contact",
    href: "/contact",
  },
  {
    id: 3,
    label: "About",
    href: "/about",
  },
  {
    id: 4,
    label: "Sign Up",
    href: "/signUp",
  },
];
const Tab = () => {
  return (
    <div className="flex gap-3">
      {navList.map((data) => (
        <div key={data.id} className="cursor-pointer">
          <Link href={data.href}>{data.label}</Link>
        </div>
      ))}
    </div>
  );
};

export default Tab;
