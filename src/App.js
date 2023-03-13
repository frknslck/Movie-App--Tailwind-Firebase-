import React from "react";
import AppRouter from "./router/AppRouter";
import { Toaster } from 'react-hot-toast';
import AuthContextProvider from "./context/AuthContextProvider";

const App = () => {
  return (
    <AuthContextProvider>
      <Toaster/>
      <AppRouter />
    </AuthContextProvider>
  );
};

export default App;
