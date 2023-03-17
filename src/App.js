import React from "react";
import AppRouter from "./router/AppRouter";
import { Toaster } from 'react-hot-toast';
import AuthContextProvider from "./context/AuthContextProvider";
import MovieContextProvider from "./context/MovieContext";

const App = () => {
  return (
    <div className="dark:bg-[#23242a]">
      <AuthContextProvider>
        <MovieContextProvider>
          <Toaster/>
          <AppRouter />
        </MovieContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
