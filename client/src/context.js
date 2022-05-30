// import React, { useContext, useEffect, useState } from "react";

// // const url = "https://randomuser.me/api/?results=10";
// const AppContext = React.createContext();

// const AppProvider = ({ children }) => {
//   // const [searchTerm, setSearchTerm] = useState("");
//   // const [users, setUsers] = useState([]);
//   // const [error, setError] = useState(null);
//   // const [isModalOpen, setIsModalOpen] = useState(false);
//   // const [userID, setUserID] = useState(null);
//   // const getUser = (id) =>
//   //   users && users.find(({ id: userID }) => userID === id);

//   // const editUser = (id, formState) => {
//   //   // const newUserIndex = users.findIndex((user) => {
//   //   //   return user.id === id;
//   //   // });
//   //   // const updatedUsers = users.splice(newUserIndex, 1, formState);
//   //   // console.log(updatedUsers);
//   //   // console.log(users);

//   //   const updatedUsers = users.map((user) => {
//   //     if (user.id === id) {
//   //       return { ...user, ...formState };
//   //     } else {
//   //       return user;
//   //     }
//   //   });
//   //   // console.log(updatedUsers);

//   //   setUsers(updatedUsers);
//   // };

//   // const fetchUsers = async () => {
//   //   setLoading(true);
//   //   setError(false);
//   //   try {
//   //     const response = await fetch(url);

//   //     const data = await response.json();
//   //     const usersData = data.results;

//   //     if (usersData) {
//   //       const newUsers = usersData.map((user) => {
//   //         const {
//   //           gender,
//   //           dob: { age },
//   //           email,
//   //           location: { country, city },
//   //           name: { first, last },
//   //           phone,
//   //           picture: { large },
//   //           login: { uuid, password },
//   //         } = user;

//   //         return {
//   //           gender,
//   //           age,
//   //           email,
//   //           country,
//   //           city,
//   //           name: `${first} ${last}`,
//   //           phone,
//   //           img: large,
//   //           id: uuid,
//   //           password,
//   //         };
//   //       });

//   //       // to fetch more users
//   //       if (users.length > 1) {
//   //         setUsers([...users, ...newUsers]);
//   //       } else {
//   //         setUsers(newUsers);
//   //       }
//   //     } else {
//   //       setUsers([]);
//   //     }

//   //     setLoading(false);
//   //   } catch (error) {
//   //     setLoading(false);
//   //     setError(error.message);
//   //   }
//   // };

//   // const filterUsers = (word) => {
//   //   console.log(word);

//   //   const newUser = users.filter((user) => {
//   //     // console.log(user.name);
//   //     return user.name.includes(word);
//   //   });
//   //   console.log(newUser);
//   //   return newUser;
//   // };

//   // const removeUser = (id) => {
//   //   const newUsers = users.filter((user) => {
//   //     return user.id !== id;
//   //   });

//   //   setUsers(newUsers);
//   // };

//   // useEffect(() => {
//   //   fetchUsers();
//   // }, []);

//   return (
//     <AppContext.Provider
//       value={
//         {
//           // searchTerm,
//           // setSearchTerm,
//           // fetchUsers,
//         }
//       }
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useGlobalContext = () => {
//   return useContext(AppContext);
// };

// export { AppContext, AppProvider };
