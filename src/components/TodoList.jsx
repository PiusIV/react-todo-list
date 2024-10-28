/* eslint-disable react/prop-types */
import Task from "./Task";
import styles from "./TodoList.module.css";

function TodoList({ tasks, onDeleteItem, onToggleItem, onClearTasks }) {
  return (
    <div className={styles.container}>
      <ul>
        {tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <button className={styles.clear_btn} onClick={onClearTasks}>
        Clear Tasks
      </button>
    </div>
  );
}

export default TodoList;
