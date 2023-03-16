import React from "react";
import AppRouter from "./router/AppRouter";
import { Toaster } from 'react-hot-toast';
import AuthContextProvider from "./context/AuthContextProvider";

const App = () => {
  return (
    <div className="dark:bg-[#23242a]">
      <AuthContextProvider>
        <Toaster/>
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
};

export default App;
