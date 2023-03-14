import React, {useState, useEffect} from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

const Main = ({movies, setMovies}) => {
  const [search, setSearch] = useState("")

  const url = `https://api.themoviedb.org/3/search/movie?api_key=7d204acf4302e3aec97acadbf83232d1&query=${search}`

  const handleSearch = (e) => {
    e.preventDefault()
    axios.get(url).then((response) => {
      setMovies(response.data)
    }).catch((error) => {
      console.log(error);
    })
    e.target.reset()
  }

  return (
    <div>
      <form className="w-3/6 mx-auto" onSubmit={handleSearch}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search a movie by name..."
            required=""
            onChange={(e) => setSearch(e.target.value)}/>
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search
          </button>
        </div>
      </form>

      {<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-5">
        {movies?.results?.map((movie) => {
          return(
            <MovieCard movie={movie}/>
          )
        })}
      </div>}
    </div>
  );
};

export default Main;
