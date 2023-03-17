import React from 'react'
import { useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContextProvider';
import toast from "react-hot-toast"
const MovieCard = ({movie}) => {
    const { poster_path, title, overview,vote_average } = movie
    const {currentUser} = useContext(AuthContext)
    const getVoteClass = (vote) => {
      if (vote >= 8) {
        return "green";
      } else if (vote >= 6) {
        return "orange";
      } else {
        return "red";
      }
    };
    const navigate = useNavigate()
    const handleRedirect = () => {
      if (currentUser) {
        navigate(`/details/${movie.id}`) 
      }else{
        toast.error("Pleage log in for more details!")
        (navigate(`/details/${movie.id}`))
      }
    }
    return (
        <div>
          <div className="flex justify-center">
            <div className="block max-w-sm rounded-lg bg-white shadow-[0_4px_9px_-4px_#23242a] dark:bg-neutral-700">
              <div className='relative group' data-te-ripple-init="" data-te-ripple-color="light">
                <img
                  className="rounded-t-lg"
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt=""
                />
                <div className="absolute h-full w-full bg-black/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white flex-col px-5 gap-5">
                  <h3 className='text-3xl'>Overview</h3>
                  <p>{overview}</p>
                </div>
              </div>
              <div className=" p-6">
                <div className='flex justify-between gap-5 h-[60px]'>
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {title}
                  </h5>
                  <h5 className={`tag ${getVoteClass(vote_average)} mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50`}>
                  ⭐{vote_average.toFixed(1)}
                  </h5>
                </div>
                <button
                  type="button"
                  className="inline-block rounded bg-danger px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]"
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                  onClick={handleRedirect}>
                  More Details
                </button>
              </div>
            </div>
          </div>
        </div>
      );
}

export default MovieCard