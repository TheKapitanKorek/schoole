import React from "react";
import styles from "./style.module.scss";

const Messages = () => {
  return (
    <div className={styles.box}>
      <div className={styles.label}>
        <span className={styles.desc}>Wiadomości</span>Karol Bisiorek 1C
      </div>
      <div className={styles.messages_table}>
        <div className={styles.table_header}>
          <div className={styles.date}>Data</div>
          <div className={styles.person}>Nadawca</div>
          <div className={styles.person}>Odbiorca</div>
          <div className={styles.title}>Tytuł</div>
        </div>
        <div className={styles.table_item}>
          <div className={styles.date}>2020-05-16</div>
          <div className={styles.person}>Jarosław Psikutas</div>
          <div className={styles.person}>Karol Bisiorek</div>
          <div className={styles.title}>
            Termin zapisów na grzybobranie w czarnym borze upływa 13
            października
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
