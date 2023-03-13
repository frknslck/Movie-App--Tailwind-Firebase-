import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav
        className="flex w-full flex-wrap items-center justify-between bg-natural-100 dark:bg-neutral-900 py-3 dark:text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start fixed top-0 z-20"
        data-te-navbar-ref=""
      >
        <div className="flex w-full flex-wrap items-center justify-between px-6">
          <a className="pr-2 text-xl font-semibold text-white" href="#">
            Navbar
          </a>

          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className="relative flex items-center">
            <div className="relative" data-te-dropdown-ref="">
              <a
                className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                href="#"
                id="dropdownMenuButton2"
                role="button"
                data-te-dropdown-toggle-ref=""
                aria-expanded="false"
              >
                <img
                  src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                  className="rounded-full"
                  style={{ height: 25, width: 25 }}
                  alt=""
                  loading="lazy"
                />
              </a>
              <ul
                className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton2"
                data-te-dropdown-menu-ref=""
              >
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    href="#"
                    data-te-dropdown-item-ref=""
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    href="#"
                    data-te-dropdown-item-ref=""
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    href="#"
                    data-te-dropdown-item-ref=""
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Right elements */}
        </div>
      </nav>
      <div className="h-[80px]"></div>
    </div>
  );
};

export default Navbar;