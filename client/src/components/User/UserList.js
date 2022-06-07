import React, { useEffect, useMemo, useState } from "react";
import User from "./User";
import ModalForm from "../ModalForm";
import Loading from "../Loading";

import UserMessage from "./UserMessage";
import { fetchUsersSuccess } from "../../store/action-creators/userActions";
import { useHttp } from "../../hooks/useHttp";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../store/action-creators/modalAction";
// import { searchUser } from "../store/action-creators/userActions";

const UserList = () => {
  const { loading, request, error } = useHttp();
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.users);
  const searchTerm = useSelector((state) => state.users.searchTerm);
  const { isModalOpen } = useSelector((state) => state.modal);

  const { data: users, currentUser } = usersList;

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      if (searchTerm === "") {
        return user;
      } else if (user.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return user;
      }
    });
  }, [searchTerm, users]);

  useEffect(() => {
    request("http://localhost:8000/api/posts").then((data) =>
      dispatch(fetchUsersSuccess(data))
    );
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="section">
      <button
        className="create-user"
        onClick={() => {
          dispatch(openModal());
        }}
      >
        Create User
      </button>
      {/* error message */}
      {error && <div className="error">{error}</div>}
      {/* <h2 className="section-title">Users</h2> */}

      {filteredUsers.length === 0 ? (
        <UserMessage />
      ) : (
        filteredUsers.map((user) => {
          return <User user={user} key={user.id} />;
        })
      )}

      {/* used IIfe cause otherwise cant use if else inside, cant use short circuiting since empty array evaluates to true */}
      {(() => {
        if (
          // (filteredUsers.length > 1 && !error) ||
          // (users.length === 0 && !error)

          filteredUsers.length > 1 ||
          users.length === 0
        ) {
          return (
            <button
              className="get-users"
              onClick={() => {
                request("http://localhost:8000/api/posts").then((data) =>
                  dispatch(fetchUsersSuccess(data))
                );
              }}
            >
              Fetch users
            </button>
          );
          // } else if (error && users.length < 1) {
          //   return (
          //     <div>
          //       <h2 className="error">
          //         No users can be found in a database. Please, create new user
          //       </h2>
          //     </div>
          //   );
          // }
        }
      })()}

      {/* {error ? (
        "error"
      ) : filteredUsers.length > 1 && users.length === 0 ? (
        <button className="get-users" onClick={() => fetchUsers()}>
          Fetch users
        </button>
      ) : null} */}

      <ModalForm open={isModalOpen} onClose={() => dispatch(closeModal())} />
    </section>
  );
};

export default UserList;
