import React, { useEffect, useState } from "react";
import "./UserStyles.css";
import UserBtn from "./UserButton";
import UserInfo from "./UserInfo";
import { buttons } from "../../data/index";
import { useHttp } from "../../hooks/useHttp";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import {
  removeUser,
  setCurrentUser,
} from "../../store/action-creators/userActions";
import { openModal } from "../../store/action-creators/modalAction";
const User = ({ user }) => {
  const [hoverInfo, setHoverInfo] = useState({});

  const dispatch = useDispatch();

  const ChangeHoverInfo = ({ title, value }) => {
    setHoverInfo({ title, value: user[value] });
  };

  const { request } = useHttp();

  useEffect(() => {
    setHoverInfo({ title: "name", value: user["name"] });
  }, [user]);

  return (
    <section className="section-user">
      <div>
        <img className="image-user" src={user.img}></img>
      </div>

      <div className={"user-info"}>
        <UserInfo hoverInfo={hoverInfo} />
        <UserBtn ChangeHoverInfo={ChangeHoverInfo} buttons={buttons} />

        <button
          type="button"
          className="user-btn user-btn__remove"
          onClick={() => {
            request(
              `http://localhost:8000/api/posts/${user.id}`,
              "DELETE"
            ).then(dispatch(removeUser(user.id)));
          }}
        >
          remove
        </button>
        <button
          type="button"
          className="user-btn user-btn__edit"
          onClick={() => {
            dispatch(setCurrentUser(user));
            dispatch(openModal());
          }}
        >
          edit
        </button>
      </div>
    </section>
  );
};

export default User;
