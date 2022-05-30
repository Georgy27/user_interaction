import { DARK_THEME, TOGGLE_DARK } from "../types";

export const createDarkModeAction = (payload) => {
  return { type: DARK_THEME, payload };
};

// export const toggleDarkMode = () => ({ type: TOGGLE_DARK });
