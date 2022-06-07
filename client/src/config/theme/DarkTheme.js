import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./DarkTheme.css";
import { createDarkThemeAction } from "../../store/action-creators/darkThemeAction";

const DarkTheme = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.darkTheme);
  const { isDarkTheme } = theme; // true or false

  const toggleTheme = () => {
    dispatch(createDarkThemeAction());
  };

  useEffect(() => {
    document.body.classList = isDarkTheme ? "dark-theme" : "null";
  }, [isDarkTheme]);

  return (
    <div className="dark-theme-container">
      <p>
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={isDarkTheme}
        ></input>{" "}
        Use Dark Theme
      </p>
    </div>
  );
};

export default DarkTheme;
