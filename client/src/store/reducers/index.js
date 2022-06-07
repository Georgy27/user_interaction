import { combineReducers } from "redux";
import darkThemeReducer from "./darkThemeReducer";
import modalReducer from "./modalReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  darkTheme: darkThemeReducer,
  modal: modalReducer,
  users: usersReducer,
});
