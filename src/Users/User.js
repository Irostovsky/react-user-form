import styles from "./User.module.css";

const User = (props) => {
  return (
    <div className={styles.user}>
      {props.username} ({props.age})
    </div>
  );
};

export default User;
