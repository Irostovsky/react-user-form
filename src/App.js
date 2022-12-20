import { useState } from "react";
import UsersList from "./components/Users/UsersList";
import "./App.css";
import AddUser from "./components/Users/AddUser";

const defaultUsers = [
  { id: "user1", name: "John Doe", age: 31 },
  { id: "user2", name: "Mike", age: 32 },
];
function App() {
  const [users, setUsers] = useState(defaultUsers);

  const addUserHandler = (username, age) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        name: username,
        age: age,
        id: Math.random().toString(),
      });
      return updatedUsers;
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
