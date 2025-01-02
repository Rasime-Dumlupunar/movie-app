"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Movies = ({ data }) => {
  const router = useRouter();
  console.log(data);
  return (
    <div
      onClick={() => router.push(`/movie/${data?.id}`)}
      className="min-w-[470px] h-[320px] relative imgContainer cursor-pointer "
    >
      <Image
        width={470}
        height={320}
        alt="moviee"
        src={`https://image.tmdb.org/t/p/original/${
          data?.backdrop_path || data?.poster_path
        }`}
      />

      <div className="bg-amber-500 p-1 text-black rounded-full font-bold absolute right-0 top-0 m-3">
        {data?.vote_average?.toFixed(1)}
      </div>
      <div className="absolute bottom-10 p-5 flex h-full flex-col justify-end text-white dark:text-white ">
        <div className="text-2xl font-bold bg-slate-900 bg-opacity-75 p-3 rounded-md">
          {data?.title?.length > 16
            ? `${data?.title.slice(0, 16)}...`
            : data?.title ||
              (data?.name?.length > 16
                ? `${data?.name.slice(0, 16)}...`
                : data?.name)}
        </div>
      </div>
    </div>
  );
};

export default Movies;
