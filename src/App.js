import { useState } from "react";
import Users from "./components/Users/Users";
import "./App.css";
import AddUser from "./components/Users/AddUser";

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
      <section className="panel">
        <AddUser onAddUser={addUserHandler} />
      </section>
      <section className="panel">
        <Users items={users} />
      </section>
    </div>
  );
}

export default App;
