import React, { useState, useEffect } from "react";
import { CiLight } from "react-icons/ci"
import { BsFillMoonFill } from "react-icons/bs"
const Switch = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("dark") === "true");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.add("cozemedim");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.remove("cozemedim");
    }
    localStorage.setItem("dark", darkMode);
  }, [darkMode]);

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  
  return (
    <div className="flex col-span-1 justify-end">
      <button
        type="button"
        title="Toggle Dark/Light Mode"
        onClick={handleDarkMode}
        className="flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        {darkMode ? (
          <CiLight className="text-xl dark:text-white"/>
        ) : (
          <BsFillMoonFill className="text-xl"/>
        )}
      </button>
    </div>
  );
};

export default Switch;
