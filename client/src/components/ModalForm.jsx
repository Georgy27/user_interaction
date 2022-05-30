import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../module/Modal";
import { useHttp } from "../custom hooks/useHttp";
import {
  editUser,
  createNewUser,
  resetUserInfo,
  sendUsers,
} from "../store/action-creators/userActions";

export default function ModalForm({ open, onClose }) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(({ users }) => users);

  const [formState, setFormState] = useState({});

  const inputHandler = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const { request } = useHttp();

  const onSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onClose();

    if (!currentUser.id) {
      const newUser = {
        id: Date.now(),
        ...formState,
      };

      // send the user to the server

      request(
        "http://localhost:8000/api/posts",
        "POST",
        JSON.stringify(newUser)
      )
        .then((response) => console.log(response, "Successfuly send"))
        .then(dispatch(createNewUser(newUser)))
        .catch((error) => console.log(error));
      // dispatch(createNewUser(newUser));

      // dispatch(sendUsers(newUser));
    } else {
      console.log(formState);
      request(
        "http://localhost:8000/api/posts",
        "PUT",
        JSON.stringify(formState)
      )
        .then((formState) => console.log(formState))
        .then(dispatch(editUser(formState)));
    }
  };

  useEffect(() => {
    if (currentUser) {
      setFormState(currentUser);
    }
  }, [currentUser]);

  return (
    <Modal
      isOpened={open}
      onClose={() => {
        dispatch(resetUserInfo());
        onClose();
      }}
    >
      <form className="updated-form" onSubmit={onSubmit}>
        <section className="user-section">
          <label className="user-section-label">Name</label>
          <input
            onChange={inputHandler}
            name="name"
            type="name"
            value={formState.name}
          />
        </section>
        <section className="user-section">
          <label className="user-section-label">Email</label>
          <input
            onChange={inputHandler}
            name="email"
            type="email"
            value={formState.email}
          />
        </section>
        <section className="user-section">
          <label className="user-section-label">Age</label>
          <input
            onChange={inputHandler}
            name="age"
            type="number"
            value={formState.age}
          />
        </section>
        <section className="user-section">
          <label className="user-section-label">Country</label>
          <input
            onChange={inputHandler}
            name="country"
            type="text"
            value={formState.country}
          />
        </section>
        <section className="user-section">
          <label className="user-section-label">Phone</label>
          <input
            onChange={inputHandler}
            name="phone"
            type="number"
            value={formState.phone}
          />
        </section>
        <section className="user-section">
          <label className="user-section-label">Password</label>
          <input
            onChange={inputHandler}
            name="password"
            type="text"
            value={formState.password}
          />
        </section>
        <button type="submit" className="btn-center user-btn">
          Submit changes
        </button>
      </form>
    </Modal>
  );
}
