import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import VideoSection from "../components/VideoSection";

const MovieDetail = () => {
  const [detail, setDetail] = useState("")
  const [videoKey, setVideoKey] = useState();
  const { title, tagline, overview, poster_path, popularity, vote_average, vote_count, genres } = detail
  const { id } = useParams();
  const axios = require("axios");
  const apiKey = process.env.REACT_APP_MOVIE_API_KEY
  const detailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`

  useEffect(() => {
    axios.get(detailUrl).then((response) => setDetail(response.data))
    .catch((error) => console.log(error));
    axios.get(videoUrl).then((res) => setVideoKey(res.data.results[0].key))
    .catch((err) => console.log(err));
  }, [detailUrl, videoUrl])

  return (
    <div className="text-white text-center w-10/12 mx-auto">

      <div className="mb-[3rem]">
        <h1 className="text-6xl mb-5">{title}</h1>
        {tagline && <h3 className="text-2xl ">"{tagline}"</h3>}
      </div>
      {videoKey && <VideoSection videoKey={videoKey} />}
      <div className="flex mx-[10rem] gap-10">
        <img className="w-[400px]" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt=""/>

        <div className="calismio-arkadas">
          <div className="mb-10">
            <h3 className="text-3xl mb-5">Overview:</h3>
            <p className="text-xl">{overview}</p>
          </div>

          <p className="text-2xl">Genres: {genres?.map((genre) => ` ${genre.name}`).join(",")}</p>
          <p className="text-2xl">Popularity: {popularity}</p>
          <p className="text-2xl">Rating: {vote_average?.toFixed(1)} in {vote_count} votes</p>
        </div>
      </div>
    </div>
  )
};

export default MovieDetail;
