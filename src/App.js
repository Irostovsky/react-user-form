import { useState } from "react";
import Users from "./Users/Users";

const defaultUsers = [{ id: "user1", username: "John Doe", age: 31 }];
function App() {
  const [users, setUsers] = useState(defaultUsers);

  return (
    <div>
      <Users items={users} />
    </div>
  );
}

export default App;
