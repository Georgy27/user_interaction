import React, { useEffect, useState, useRef } from "react";
import "./SearchForm.css";
import { useGlobalContext } from "../context";
import { useDispatch, useSelector } from "react-redux";
import { searchUser } from "../store/action-creators/userActions";
const SearchForm = () => {
  // const { setSearchTerm } = useGlobalContext();
  const focusValue = useRef("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    // console.log(e.target.value);
    dispatch(searchUser(e));
  };
  useEffect(() => {
    focusValue.current.focus();
  }, []);
  return (
    <section className="section">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label className="form-control__label" htmlFor="name">
            Search Your Random User
          </label>
          <input
            className="form-control__input"
            type="text"
            id="name"
            ref={focusValue}
            onChange={handleInput}
          ></input>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
