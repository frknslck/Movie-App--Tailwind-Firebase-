import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import ChatRoomBtn from "./ChatRoomBtn";
import Switch from "./Switch";
import { MovieContext } from "../context/MovieContext";

const Navbar = () => {
  const {currentUser, logout} = useContext(AuthContext)
  const { displayName, photoURL } = currentUser
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY
  const BACK_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
  const {getMovies, setErrorStatus} = useContext(MovieContext)

  const handleOrigin = () => {
    setErrorStatus(false)
    getMovies(BACK_API)
  }

  return (
    <div>
      <nav
        className="flex w-full flex-wrap items-center justify-between bg-white dark:bg-[#23242a] py-3 dark:text-white shadow-lg lg:flex-wrap lg:justify-start fixed top-0 z-20"
        data-te-navbar-ref=""
      >
        <div className="flex w-full flex-wrap items-center justify-between px-6">
          <Link className="pr-2 text-xl font-semibold dark:text-white" onClick={handleOrigin} to="/">
            Movie App
          </Link>
          <div className="relative flex items-center">
            {currentUser && <h5 className="text-2xl capitalize mr-2">{displayName}</h5>}
            <Link to="/chatroom"><ChatRoomBtn/></Link>
            <Switch />
            <div className="relative" data-te-dropdown-ref="">
              <span
                className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                id="dropdownMenuButton2"
                role="button"
                data-te-dropdown-toggle-ref=""
                aria-expanded="false"
              >
                <img
                  src={ photoURL || "https://i.ibb.co/GTgY47j/avatar.png"}
                  className="rounded-full"
                  style={{ height: 25, width: 25 }}
                  alt=""
                  loading="lazy"
                />
              </span>
              <ul
                className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton2"
                data-te-dropdown-menu-ref=""
              >
                {currentUser ? <li>
                  <Link
                    className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    to="/profile"
                    data-te-dropdown-item-ref=""
                  >
                    Profile
                  </Link>
                </li> : null}
                {currentUser ? null : <li>
                  <Link
                    className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    to="/register"
                    data-te-dropdown-item-ref=""
                  >
                    Register
                  </Link>
                </li>}
                {currentUser ? null : <li>
                  <Link
                    className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    to="/login"
                    data-te-dropdown-item-ref=""
                  >
                    Login
                  </Link>
                </li>}
                {currentUser ? <li>
                  <span
                    className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    role="button"
                    data-te-dropdown-item-ref=""
                    onClick={logout}
                  >
                    Logout
                  </span>
                </li> : null}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-[75px]"></div>
    </div>
  );
};

export default Navbar;
