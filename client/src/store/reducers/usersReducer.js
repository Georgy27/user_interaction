import {
  // FETCH_START,
  FETCH_SUCCESS,
  // FETCH_FAILURE,
  REMOVE_USER,
  EDIT_USER,
  SET_CURRENT_USER,
  SEARCH_USER,
  NEW_USER,
  RESET_USER,
} from "../types";

const defaultCurrentUser = {
  name: "",
  email: "",
  age: "",
  country: "",
  phone: "",
  password: "",
};
// initial state
const initialState = {
  data: [],
  // loading: false,
  // error: null,
  loaded: false,
  currentUser: defaultCurrentUser,
  searchTerm: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    // case FETCH_START:
    //   return {
    //     ...state,
    //     loading: true,
    //     error: null,
    //     loaded: false,
    //   };
    case FETCH_SUCCESS:
      // if (state.error) {
      //   return {
      //     ...state,
      //   };
      // }
      const newUsers = action.payload.map((user) => {
        return {
          gender: user.gender,
          age: user.age,
          email: user.email,
          country: user.country,
          city: user.city,
          name: user.name,
          phone: user.phone,
          img: user.image,
          id: user._id,
          password: user.password,
        };
      });

      return {
        ...state,
        loading: false,
        data: [...state.data, ...newUsers],
        loaded: true,
      };
    // case FETCH_FAILURE:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: true,
    //   };

    case NEW_USER:
      console.log(action.payload);
      return {
        ...state,
        data: [action.payload, ...state.data],
        // error: null,
      };

    case RESET_USER:
      console.log("USER RESET");
      return {
        ...state,
        currentUser: defaultCurrentUser,
      };
    case REMOVE_USER:
      const usersAfterRemove = state.data.filter((user) => {
        return user.id !== action.payload;
      });

      return {
        ...state,
        data: usersAfterRemove,
      };
    case EDIT_USER:
      const currentUser = action.payload;
      const newData = [...state.data].map((user) => {
        if (user.id === currentUser.id) {
          return { ...user, ...currentUser };
        }
        return user;
      });
      return {
        ...state,
        currentUser: defaultCurrentUser,
        data: newData,
      };

    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload.user };

    case SEARCH_USER:
      const targetValue = action.payload.target.value;

      return { ...state, searchTerm: targetValue };

    default:
      return state;
  }
};
export default usersReducer;
