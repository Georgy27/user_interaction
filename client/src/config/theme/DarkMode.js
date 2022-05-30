import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDarkTheme } from "../../store/thunks/darkMode";
import "./darkMode.css";
import { createDarkModeAction } from "../../store/action-creators/darkThemeAction";

export const DarkMode = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.darkTheme);
  const { isDarkTheme } = theme; // true or false

  const toggleTheme = () => {
    dispatch(createDarkModeAction(!isDarkTheme));
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

// export default DarkMode;
