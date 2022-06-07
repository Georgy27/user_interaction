import React from "react";

// import pages
import Home from "./pages/Home";
// import components

import DarkTheme from "./config/theme/DarkTheme";
import Navbar from "./components/Navbar";

// redux

function App() {
  return (
    <>
      <Navbar />
      <DarkTheme />
      <Home />
    </>
  );
}

export default App;
