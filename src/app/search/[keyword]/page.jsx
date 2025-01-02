import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ params }) => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const keyword = params.keyword;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}&language=en-US&include_adult=false`
  );
  const data = await res.json();
  console.log(data?.results, "data");

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {data?.results?.length > 0 ? (
        data.results.map((dt, i) => <Movies key={i} data={dt} />)
      ) : (
        <div>Sorry, the movie you are looking for could not be found.</div>
      )}
    </div>
  );
};

export default Page;
