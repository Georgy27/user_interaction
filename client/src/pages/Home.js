import React from "react";
import UserList from "../components/User/UserList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <UserList />
    </main>
  );
};

export default Home;
