import React from "react";
import styles from "./style.module.scss";

const Announcements = () => {
  return (
    <div className={styles.box}>
      <div className={styles.label}>
        <span className={styles.desc}>Ogłoszenia</span>Karol Bisiorek 1C
      </div>
      <div className={styles.announcements_table}>
        <div className={styles.table_header}>
          <div className={styles.date}>Data</div>
          <div className={styles.announcement}>Ogłoszenie</div>
        </div>
        <div className={styles.table_item}>
          <div className={styles.date}>2020-04-10</div>
          <div className={styles.announcement}>
            <div className={styles.announcement_header}>
              Jarosław Bugała jest dziennikarzem radia eska
            </div>
            <div className={styles.announcement_content}>
              Redaktorek lokalnej gazetki to niezły pojeb.Redaktorek lokalnej
              gazetki to niezły pojeb.Redaktorek lokalnej gazetki to niezły
              pojeb.Redaktorek lokalnej gazetki to niezły pojeb.Redaktorek
              lokalnej gazetki to niezły pojeb.Redaktorek lokalnej gazetki to
              niezły pojeb. gazetki to niezły pojeb.Redaktorek lokalnej gazetki
              to niezły pojeb.Redaktorek lokalnej gazetki to niezły
              pojeb.Redaktorek lokalnej gazetki to niezły pojeb.Redaktorek
              lokalnej gazetki to niezły pojeb. gazetki to niezły
              pojeb.Redaktorek lokalnej gazetki to niezły pojeb.Redaktorek
              lokalnej gazetki to niezły pojeb.Redaktorek lokalnej gazetki to
              niezły pojeb.Redaktorek lokalnej gazetki to niezły pojeb.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
