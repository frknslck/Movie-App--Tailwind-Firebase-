import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const [detail, setDetail] = useState({})
  const { title, tagline, overview, poster_path, popularity, vote_average, vote_count, genres } = detail
  const { id } = useParams();
  const axios = require("axios");
  // const apiKey = process.env.REACT_APP_API2_KEY
  // const url = `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=7d204acf4302e3aec97acadbf83232d1`
  useEffect(() => {
    axios.get(url).then((response) => {
      setDetail(response.data)
    }).catch((error) => {
      console.log(error);
    })
  }, [])
  return (
    <>
      <div className="text-center mb-[5rem]">
        <h1 className="text-white text-6xl mb-5">{title}</h1>
        <h3 className="text-white text-2xl ">"{tagline}"</h3>
      </div>
      <div className="flex">
        <img className="w-[400px]" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt=""/>
        <div className="">
          <h3 className="text-white">{overview}</h3>
          <p className="text-white">{genres?.map((genre) => genre.name)}</p>
          <p className="text-white">{popularity}</p>
          <p className="text-white">{vote_average}</p>
          <p className="text-white">{vote_count}</p>
        </div>
      </div>
    </>
  )
};

export default MovieDetail;
