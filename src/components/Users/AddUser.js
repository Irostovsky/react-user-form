import { useState } from "react";
import styles from "./AddUser.module.css";

import Button from "../UI/Button/Button";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    props.onAddUser(username, age);
    setUsername("");
    setAge("");
  };

  return (
    <form onSubmit={addUserHandler}>
      <div className={styles["form-control"]}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={usernameChangeHandler}
        />
      </div>
      <div className={styles["form-control"]}>
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={age}
          min={1}
          onChange={ageChangeHandler}
        />
      </div>
      <Button>Add User</Button>
    </form>
  );
};

export default AddUser;
