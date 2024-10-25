/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Form.module.css";

function Form({ onAddTasks }) {
  const [taskInput, setTaskInput] = useState("");
  // const [isChecked, setIsChecked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!taskInput) return;

    const newTasks = { taskInput, packed: false, id: Date.now() };
    onAddTasks(newTasks);
    console.log(newTasks);

    setTaskInput("");
  }

  // function handleCheckbox(e) {
  //   setIsChecked(e.target.checked);

  //   if (e.target.checked) {
  //     handleSubmit(e);
  //   }
  // }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className={styles.form_container}>
        <input
          type="checkbox"
          name=""
          id=""
          className={styles.submit}
          onChange={handleSubmit}
          // checked={isChecked}
        />
        <input
          type="text"
          name=""
          id=""
          className={styles.input}
          placeholder="Create a new todo"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
      </div>
    </form>
  );
}

export default Form;
