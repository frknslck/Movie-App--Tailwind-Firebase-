import React, {useState, useContext} from "react";
import MovieCard from "../components/MovieCard";
import Spinner from "../components/Spinner";
import { MovieContext } from "../context/MovieContext"
import { AuthContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import  toast  from "react-hot-toast";

const Main = () => {
  const [search, setSearch] = useState("")
  const [selectedOption, setSelectedOption] = useState("");
  const {movies, spinner, errorStatus, getMovies} = useContext(MovieContext)
  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
  const POPULAR_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
  const UPCOMING_API = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
  const TOP_API = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
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

  function handleOptionChange(event) {
    const selectedOption = event.target.value;
    setSelectedOption(selectedOption);
    if (selectedOption === "popular") {
      getMovies(POPULAR_API);
    } else if (selectedOption === "upcoming") {
      getMovies(UPCOMING_API);
    } else if (selectedOption === "top-rated") {
      getMovies(TOP_API);
    }
  }

  return (
    <div className="dark:bg-[#23242a]">
      <div className="flex justify-center gap-4">
      <form className="w-2/6" onSubmit={handleSearch}>
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
        <select value={selectedOption} onChange={handleOptionChange} className="px-2 text-center w-25 rounded-lg bg-gray-50 text-gray-900 border border-gray-300 focus:border-danger-600 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:border-danger-600 appearance-none focus:outline-none">
            <option value="popular">Popular Movies</option>
            <option value="upcoming">Upcoming Movies</option>
            <option value="top-rated">Top Rated Movies</option>
        </select>
      </div>
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
