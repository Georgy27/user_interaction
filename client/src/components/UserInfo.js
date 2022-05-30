import React, { useContext, useEffect, useState, useRef } from "react";
import "./User.css";
import { useGlobalContext } from "../context";

const UserInfo = ({ hoverInfo }) => {
  const { title, value } = hoverInfo;

  return (
    <>
      <p>My {title} is</p>
      <p className="user-info__name">{value}</p>
    </>
  );
};

export default UserInfo;
