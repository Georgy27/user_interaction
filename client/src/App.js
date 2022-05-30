import React from "react";

// import pages
import Home from "./pages/Home";
// import components

import { DarkMode } from "./config/theme";
import Navbar from "./components/Navbar";

// redux

function App() {
  return (
    <>
      <Navbar />
      <DarkMode />
      <Home />
    </>
  );
}

export default App;
