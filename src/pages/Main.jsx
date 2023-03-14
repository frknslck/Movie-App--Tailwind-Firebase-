import React from "react";
import MovieCard from "../components/MovieCard";

const Main = ({movies}) => {
  console.log(movies?.results);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-5 mx-auto">
      {movies?.results?.map((movie) => {
        return(
          <MovieCard movie={movie}/>
        )
      })}
    </div>
  );
};

export default Main;
