import { useState } from "react";
import UsersList from "./components/Users/UsersList";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import Wrapper from "./components/Helpers/Wrapper";

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
    <Wrapper>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </Wrapper>
  );
}

export default App;
