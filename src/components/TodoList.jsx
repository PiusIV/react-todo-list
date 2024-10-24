/* eslint-disable react/prop-types */
import Task from "./Task";
import styles from "./TodoList.module.css";

function TodoList({ tasks, onDeleteItem }) {
  //   const initialTasks = [
  //     {
  //       workDone:
  //         "code hdevhvfhejrfvhvfrhjhvjhcgjcghchgxcfhgh gctgctg gcgjh ucisegvfwehf feufv",
  //       packed: false,
  //       id: Date.now(),
  //     },
  //     { workDone: "Read", packed: false, id: 222 },
  //   ];
  return (
    <div className={styles.container}>
      <ul>
        {tasks.map((task) => (
          <Task task={task} key={task.id} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
