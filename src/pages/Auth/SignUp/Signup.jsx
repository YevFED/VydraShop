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
        <p className={styles.title}>Реєстрація</p>
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
          <input
            type="password"
            minLength={8}
            maxLength={16}
            placeholder="Підтвердіть ваш пароль : "
            className={styles.formInput}
          />
          <div className={styles.signInput}>
            <input type="checkbox" id="checking" />
            <label for="checking">
              Ви погоджуєтесь на обробку вашою персональної інформації
            </label>
          </div>

          <button className={styles.formButton} type="submit">
            Зареєструватися
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
