import React from "react";
import styles from "./Signup.module.scss";
import Banner from "../../../components/Banner/Banner";
import Modal from "../../../components/Modal/Modal";
import { useState } from "react";

export default function Login() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <div className={styles.wrapper}>
        <Banner />
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
          <p onClick={() => setModalActive(true)} className={styles.formLink}>
            Вже маєте акаунт?
          </p>
        </form>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
}
