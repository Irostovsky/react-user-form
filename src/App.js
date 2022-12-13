import { useState } from "react";
import Users from "./Users/Users";
import "./App.css";

const defaultUsers = [
  { id: "user1", username: "John Doe", age: 31 },
  { id: "user2", username: "Mike", age: 32 },
];
function App() {
  const [users, setUsers] = useState(defaultUsers);

  return (
    <div>
      <Users items={users} />
    </div>
  );
}

export default App;
