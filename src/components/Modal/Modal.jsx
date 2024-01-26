import React from "react";
import styles from "./Modal.module.scss";
import { Link } from "react-router-dom";

export default function Modal({ active, setActive }) {
  return (
    <div
      onClick={() => setActive(false)}
      className={active ? styles.modalActive : styles.modal}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <p className={styles.title}>Вхід до акаунту</p>
        <form className={styles.form} action="#">
          <input
            type="email"
            placeholder="Введіть ваш email : "
            className={styles.formInput}
          />
          <input
            type="password"
            minLength={8}
            maxLength={16}
            placeholder="Введіть ваш пароль : "
            className={styles.formInput}
          />
          <button className={styles.formButton} type="submit">
            Увійти
          </button>
          <Link className={styles.formLink} to="/auth/signup">
            Новий покупець?
          </Link>
        </form>
      </div>
    </div>
  );
}
