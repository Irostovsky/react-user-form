import User from "./User";
import styles from "./Users.module.css";

const Users = (props) => {
  return (
    <div>
      {props.items.map((user) => (
        <User key={user.id} username={user.username} age={user.age} />
      ))}
    </div>
  );
};

export default Users;
