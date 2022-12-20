import { useState } from "react";
import styles from "./AddUser.module.css";

import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

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
    if (!username.trim() || +age < 1) {
      return;
    }
    props.onAddUser(username, age);
    setUsername("");
    setAge("");
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={age}
          min={1}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
