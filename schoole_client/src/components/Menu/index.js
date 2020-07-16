import React from "react";
import styles from "./styles.module.scss";
const Menu = (props) => {
  return (
    <div className={styles.container}>
      <button className={styles.element}>
        <div className={styles.icon}></div>
        <div className={styles.text}>Oceny</div>
      </button>
      <button className={styles.element}>
        <div className={styles.icon}></div>
        <div className={styles.text}>Oceny</div>
      </button>
      <button className={styles.element}>
        <div className={styles.icon}></div>
        <div className={styles.text}>Oceny</div>
      </button>
      <button className={styles.element}>
        <div className={styles.icon}></div>
        <div className={styles.text}>Oceny</div>
      </button>
      <button className={styles.element}>
        <div className={styles.icon}></div>
        <div className={styles.text}>Oceny</div>
      </button>
      <button className={styles.element}>
        <div className={styles.icon}></div>
        <div className={styles.text}>Oceny</div>
      </button>
    </div>
  );
};

export default Menu;
