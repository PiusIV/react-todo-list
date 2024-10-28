/* eslint-disable react/prop-types */
import styles from "./Footer.module.css";

function Footer({ tasks }) {
  const info = tasks.length;
  return (
    <footer className={styles.footer}>
      <p>
        {info >= 1
          ? `You have ${info} tasks you haven't attended to`
          : "⚡ Add tasks to your todo list"}
      </p>
      <p></p>
      <em>3.142_us' To-Do List App &copy; 2024, all rights reserved 🧡</em>
    </footer>
  );
}

export default Footer;
