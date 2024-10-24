import styles from "./Task.module.css";
/* eslint-disable react/prop-types */
function Task({ task, onDeleteItem }) {
  return (
    <li className={styles.list}>
      <input type="checkbox" name="" id="" />
      <p style={task.packed ? { textDecoration: "line-through" } : {}}>
        {task.value}
      </p>
      <button className={styles.button} onClick={() => onDeleteItem(task.id)}>
        ✖
      </button>
    </li>
  );
}

export default Task;
