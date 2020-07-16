import React, { useState } from "react";
import styles from "./style.module.scss";
import Dropdown from "../Dropdown";

const Marks = (props) => {
  const [sortOrder, setSortOrder] = useState("");

  console.log(sortOrder);

  return (
    <div className={styles.box}>
      <div className={styles.label}>
        <span className={styles.desc}>Oceny</span>Karol Bisiorek 1C
      </div>
      <Dropdown
        value={sortOrder}
        options={["Daty", "Wagi", "Oceny"]}
        placeholder="Sortuj według"
        styles={styles}
        onChange={setSortOrder}
      />
      <div className={styles.marks_table}>
        <div className={styles.marks_table_header}>
          <div className={styles.subj}>Przedmiot</div>
          <div className={styles.marks}>Okres I</div>
          <div className={styles.avg}>Śr. I</div>
          <div className={styles.final}>I</div>
          <div className={styles.marks}>Okres II</div>
          <div className={styles.avg}>Śr. II</div>
          <div className={styles.final}>II</div>
          <div className={styles.combined_avg}>Średnia roczna</div>
          <div className={styles.combined_final}>Ocena końcowa</div>
        </div>
        <div className={styles.marks_table_item}>
          <div className={styles.subj}>Matematyka</div>
          <div className={styles.marks}>
            <div className={`${styles.mark} ${styles.med_good}`}>4</div>
            <div className={`${styles.mark} ${styles.big_good}`}>5</div>
            <div className={`${styles.mark} ${styles.big_avg}`}>3</div>
            <div className={`${styles.mark} ${styles.med_bad}`}>1</div>
            <div className={`${styles.mark} ${styles.sml_good}`}>4</div>
          </div>
          <div className={styles.avg}>4.21</div>
          <div className={styles.final}>4</div>
          <div className={styles.marks}></div>
          <div className={styles.avg}>5.27</div>
          <div className={styles.final}>5</div>
          <div className={styles.combined_avg}>4.86</div>
          <div className={styles.combined_final}>5</div>
        </div>
      </div>
    </div>
  );
};

export default Marks;
