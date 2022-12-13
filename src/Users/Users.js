import User from "./User";
import styles from "./Users.module.css";

const Users = (props) => {
  return (
    <section id={styles.users}>
      {props.items.map((user) => (
        <User key={user.id} username={user.username} age={user.age} />
      ))}
    </section>
  );
};

export default Users;
