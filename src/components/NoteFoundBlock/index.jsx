import React from 'react';
import styles from './NotFound.module.scss';

export const NoteFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Нечего не найдено
        <br />
      </h1>
      <p className={styles.description}>
        К сожалени данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
};
