import styles from "./Button.module.css";

function Button({ children, onClick }) {
  return (
    <button className={styles.clear_btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
