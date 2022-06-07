import React, { useContext, useEffect, useState, useRef } from "react";
import "./UserStyles.css";

const UserButton = ({ buttons, ChangeHoverInfo }) => {
  return (
    <div className="user-info-icons">
      {buttons.map(({ component: Component, title, id, value }) => (
        <button
          type="button"
          className="user-info-icons__icon"
          key={id}
          title={title}
          onMouseOver={() =>
            ChangeHoverInfo({
              value,
              title,
            })
          }
        >
          <Component />
        </button>
      ))}
    </div>
  );
};

export default UserButton;
