import {
  FETCH_START,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  REMOVE_USER,
  EDIT_USER,
  SET_CURRENT_USER,
  SEARCH_USER,
  NEW_USER,
  RESET_USER,
} from "../types";
// const { request } = useHttp();
// const url = "https://randomuser.me/api/?results=10";
const url = "http://localhost:8000/api/posts";

// export const fetchUsersRequest = () => {
//   return {
//     type: FETCH_START,
//   };
// };

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_SUCCESS,
    payload: users,
  };
};

// export const fetchUsersFailure = (errors) => {
//   return {
//     type: FETCH_FAILURE,
//     payload: errors,
//   };
// };

export const removeUser = (id) => {
  return {
    type: REMOVE_USER,
    payload: id,
  };
};

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: { user },
  };
};

export const editUser = (user) => {
  return {
    type: EDIT_USER,
    payload: user,
  };
};

export const createNewUser = (user) => {
  console.log(user);

  return {
    type: NEW_USER,
    payload: user,
  };
};

export const resetUserInfo = () => {
  return {
    type: RESET_USER,
  };
};
// SearchForm

export const searchUser = (value) => {
  return {
    type: SEARCH_USER,
    payload: value,
  };
};
// THUNK
// export const fetchUsers = () => {
//   return async (dispatch) => {
//     dispatch(fetchUsersRequest());
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log(data, 4444);
//       dispatch(fetchUsersSuccess(data));
//     } catch (error) {
//       const errorMsg = error.message;
//       dispatch(fetchUsersFailure(errorMsg));
//     }
//   };
// };

// export const sendUsers = async (newUser) => {

//   try {
//     console.log(newUser);
//     const request = await fetch(url, "POST", JSON.stringify(newUser));
//     console.log(request, "DATA WAS SENT SUCCESSFULLY");
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const useHttp = () => {

//   const request = useCallback(
//     async (
//       url,
//       method = "GET",
//       body = null,
//       headers = { "Content-Type": "application/json" }
//     ) => {
//       try {
//         const response = await fetch(url, { method, body, headers });

//         if (!response.ok) {
//           throw new Error(`Could not fetch ${url}, status: ${response.status}`);
//         }

//         const data = await response.json();

//         return data;
//       } catch (e) {
//         throw e;
//       }
//     },
//     []
//   );

//   return {
//     request,
//   };
// };
