import { useState } from "react";
import Users from "./components/Users/Users";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import Card from "./components/UI/Card/Card";

const defaultUsers = [
  { id: "user1", username: "John Doe", age: 31 },
  { id: "user2", username: "Mike", age: 32 },
];
function App() {
  const [users, setUsers] = useState(defaultUsers);

  const addUserHandler = (username, age) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        username: username,
        age: age,
        id: Math.random().toString(),
      });
      return updatedUsers;
    });
  };

  return (
    <div>
      <Card>
        <AddUser onAddUser={addUserHandler} />
      </Card>
      <Card>
        <Users items={users} />
      </Card>
    </div>
  );
}

export default App;
