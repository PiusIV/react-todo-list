/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Form.module.css";

function Form({ onAddTasks }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;

    const newTasks = { value, packed: false, id: Date.now() };
    onAddTasks(newTasks);
    console.log(newTasks);

    setValue("");
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className={styles.form_container}>
        <input
          type="checkbox"
          name=""
          id=""
          className={styles.submit}
          onChange={handleSubmit}
        />
        <input
          type="text"
          name=""
          id=""
          className={styles.input}
          placeholder="Create a new todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
}

export default Form;
