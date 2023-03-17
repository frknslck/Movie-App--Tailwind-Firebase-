import React, {useState, useEffect, useContext} from "react";
import MovieCard from "../components/MovieCard";
import Spinner from "../components/Spinner";
import { MovieContext } from "../context/MovieContext"
import { AuthContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import  toast  from "react-hot-toast";

const Main = () => {
  const [search, setSearch] = useState("")
  const {movies, spinner, errorStatus, getMovies} = useContext(MovieContext)
  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
  console.log(movies);
  const handleSearch = (e) => {
    e.preventDefault()
    if (!search.trim()) {
      return;
    }
    if (currentUser && search) {
      getMovies(SEARCH_API);
    } else {
      toast.error("Please log in to search a movie!");
      navigate("/login");
    }
    e.target.reset()
  }

  return (
    <div className="dark:bg-[#23242a]">
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
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-danger-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Search a movie by name..."
            required=""
            autoComplete="off"
            onChange={(e) => setSearch(e.target.value)}/>
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-danger hover:bg-danger-600 focus:ring-4 focus:outline-none focus:bg-danger-600 font-medium rounded-lg text-sm px-4 py-2">
            Search
          </button>
        </div>
      </form>
      {spinner && <Spinner/>}
      {errorStatus && <p className="text-center text-3xl dark:text-white mt-5">❌ There is nothing to show here...</p>}
      {<div className="dark:bg-[#23242a] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-5">
            {movies?.map((movie) => {
            return(
            <MovieCard movie={movie} key={movie.id}/>)})}
          </div>}
    </div>
  );
};

export default Main;
