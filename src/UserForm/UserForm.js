import { useState } from "react";
import styles from "./UserForm.module.css";

import Button from "../UI/Button/Button";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(username, age);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={styles["form-control"]}>
        <label>Username</label>
        <input type="text" onChange={usernameChangeHandler} />
      </div>
      <div className={styles["form-control"]}>
        <label>Age (Years)</label>
        <input type="number" min={1} onChange={ageChangeHandler} />
      </div>
      <Button>Add User</Button>
    </form>
  );
};

export default UserForm;
