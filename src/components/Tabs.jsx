"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  console.log(genre, "genre");
  const tabs = [
    {
      name: "Populer ",
      url: "all",
    },
    {
      name: "Latest  ",
      url: "movie",
    },
    {
      name: "Upcoming  ",
      url: "tv",
    },
  ];
  return (
    <div className="p-5 m-5 bg-indigo-700 dark:bg-indigo-700 rounded-lg flex items-center justify-center  gap-24">
      {tabs.map((tab, i) => (
        <Link
          key={i}
          href={`/?genre=${tab.url}`}
          className={`cursor-pointer hover:opacity-75 transition-opacity font-semibold tracking-widest text-xl ${
            tab.url === genre
              ? "underline underline-offset-8 text-gray-200"
              : ""
          }`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
