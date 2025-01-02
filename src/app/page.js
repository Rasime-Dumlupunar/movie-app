import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ searchParams }) => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  // Filtreleme işlemleri (searchParams.genre gibi)
  const genre = searchParams.genre || "all"; // Eğer genre yoksa "all" olarak varsayalım.

  const res = await fetch(
    `https://api.themoviedb.org/3/trending/${genre}/day?api_key=${apiKey}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();

  console.log(data, "data");
  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {data?.results?.map((data, i) => (
        <Movies key={i} data={data} />
      ))}
    </div>
  );
};

export default Page;
