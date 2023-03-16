import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from "../pages/Main"
import Login from "../pages/Login"
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
import PrivateRouter from "./PrivateRouter";
import Profile from "../pages/Profile";

const AppRouter = () => {
  const [spinner, setSpinner] = useState(false)
  const [errorStatus, setErrorStatus] = useState(false)
  const [movies, setMovies] = useState()
  const axios = require("axios");
  const apiKey = process.env.REACT_APP_MOVIE_API_KEY
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`

  useEffect(() => {
    setSpinner(true)
    axios.get(url).then((response) => {
      setMovies(response.data)
    }).catch((error) => {
      console.log(error);
      setErrorStatus(true)
    }).finally(() => setSpinner(false))
  }, [])

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main movies={movies} setMovies={setMovies} spinner={spinner} setSpinner={setSpinner} errorStatus={errorStatus} setErrorStatus={setErrorStatus}/>}/>
        <Route path="/login" element={<Login/>}/> 
        <Route path="/register" element={<Register/>}/> 
        <Route path="/details/:id" element={<PrivateRouter/>}>
          <Route path="" element={<MovieDetail/>}/>
        </Route>
        <Route path="/profile" element={<PrivateRouter/>}>
          <Route path="" element={<Profile/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
