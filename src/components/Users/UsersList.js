import Card from "../UI/Card/Card";
import styles from "./UsersList.module.css";

const Users = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.items.map((user) => (
          <li>
            {user.username} ({user.age})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Users;
