import React, { useState } from "react";
import UsersList from "./components/Users/UsersList";
import "./App.css";
import AddUser from "./components/Users/AddUser";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (username, age) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { name: username, age: age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </>
  );
}

export default App;
