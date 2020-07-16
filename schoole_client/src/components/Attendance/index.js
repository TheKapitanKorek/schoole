import React from "react";
import styles from "./style.module.scss";

const Attendance = () => {
  return (
    <div className={styles.box}>
      <div className={styles.label}>
        <span className={styles.desc}>Nieobecności</span>Karol Bisiorek 1C
      </div>

      <div className={styles.attendance_table}>
        <div className={styles.table_header}>
          <div className={styles.date}>Data</div>
          <div className={styles.lesson}>Nr. lekcji</div>
          <div className={styles.absence}>
            <div className={styles.absence_header}>Nieobecności</div>
            <div className={styles.absence_types}>
              <div className={styles.absence_type}>U</div>
              <div className={styles.absence_type}>NU</div>
              <div className={styles.absence_type}>U+NU</div>
              <div className={styles.absence_type}>ZW</div>
            </div>
          </div>
        </div>
        <div className={styles.table_item}>
          <div className={styles.date}>2014-05-21 (śr.)</div>
          <div className={styles.lesson}>
            <div className={`${styles.lesson_number} ${styles.present}`}>0</div>
            <div className={`${styles.lesson_number} ${styles.present}`}>1</div>
            <div className={`${styles.lesson_number} ${styles.present}`}>2</div>
            <div className={`${styles.lesson_number} ${styles.lesson_absence}`}>
              NU
            </div>
            <div
              className={`${styles.lesson_number} ${styles.lesson_excused_absence}`}
            >
              U
            </div>
            <div className={`${styles.lesson_number} ${styles.present}`}>5</div>
            <div className={`${styles.lesson_number} ${styles.present}`}>6</div>
            <div className={`${styles.lesson_number} ${styles.exempt}`}>ZW</div>
            <div className={`${styles.lesson_number} ${styles.exempt}`}>ZW</div>
            <div className={`${styles.lesson_number} ${styles.exempt}`}>ZW</div>
            <div className={`${styles.lesson_number} ${styles.exempt}`}>ZW</div>
            <div className={`${styles.lesson_number} ${styles.present}`}>
              11
            </div>
          </div>
          <div className={styles.absence_number}>1</div>
          <div className={styles.absence_number}>2</div>
          <div className={styles.absence_number}>3</div>
          <div className={styles.absence_number}>6</div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
