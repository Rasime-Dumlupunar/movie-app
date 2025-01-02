import Image from "next/image";
import React from "react";

const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
  );

  return await res.json();
};

const Page = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);

  console.log(movieDetail, "movieDetail");
  return (
    <div className="relative min-h-screen">
      <Image
        style={{ objectFit: "cover", padding: 10 }}
        fill
        alt="movie"
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}
      />
      <div className="absolute bg-opacity-70 bg-slate-900 m-10 rounded-lg w-1/3 max-md:w-1/2 p-3">
        <div className=" text-3xl font-semibold m-10">{movieDetail?.title}</div>
        <div className="m-3 tracking-wide">{movieDetail?.overview}</div>
        <div className="m-3 tracking-wide text-lg underline p-1">
          Popularity: {movieDetail?.popularity}
        </div>
        <div className="m-3 tracking-wide text-lg p-1">
          {movieDetail?.release_date}
        </div>
        <div className="m-3 tracking-wide text-lg font-bold p-1">
          {movieDetail?.vote_average?.toFixed(1)}
        </div>
        <div className="my-2 border w-32 hover:bg-white hover:text-black p-1 rounded-md text-center text-lg cursor-pointer tracking-widest m-3">
          TRAIL
        </div>
      </div>
    </div>
  );
};
export default Page;
