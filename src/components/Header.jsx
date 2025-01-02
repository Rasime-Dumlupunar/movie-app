"use client";
import { IoSearchSharp } from "react-icons/io5";
import { MenuItem } from "./MenuItem";
import ThemeComp from "./ThemeComp";
import { useState } from "react";

import { useRouter } from "next/navigation";

export const Header = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const menu = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Sign In",
      url: "/login",
    },
  ];
  const searchFunc = (e) => {
    if (e.key === "Enter" && keyword.length >= 3) {
      router.push(`/search/${keyword}`);
      setKeyword("");
    }
  };
  return (
    <div className="flex items-center gap-10 h-20 mb-2 mt-3">
      <div className="bg-indigo-700 rounded-lg p-3 text-2xl font-bold mx-4 tracking-widest">
        CineMagic
      </div>
      <div className="flex flex-1 items-center gap-2 border p-3 rounded-lg mr-5">
        <input
          value={keyword}
          onKeyDown={searchFunc}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search.."
          className=" flex-1 mr-4 bg-transparent"
          type="text"
        />
        <IoSearchSharp size={26} />
      </div>
      <ThemeComp />
      {menu.map((mn, i) => (
        <MenuItem mn={mn} key={i} />
      ))}
    </div>
  );
};
