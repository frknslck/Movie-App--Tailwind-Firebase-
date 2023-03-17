import React, { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [spinner, setSpinner] = useState(false)
  const [errorStatus, setErrorStatus] = useState(false)
  const axios = require("axios");

  const getMovies = (url) => {
    setSpinner(true)
    axios.get(url).then((response) => {
      setMovies(response.data.results)
    }).catch((error) => {
      console.log(error);
      setErrorStatus(true)
    }).finally(() => setSpinner(false))
  }
  
  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const values = { movies, spinner, errorStatus, getMovies };
  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;
