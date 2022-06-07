import { DARK_THEME } from "../types";

const initialState = {
  isDarkTheme: false,
};

const darkThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_THEME:
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };

    default:
      return state;
  }
};

export default darkThemeReducer;
