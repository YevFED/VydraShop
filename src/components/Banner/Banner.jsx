import React, { useState } from "react";
import styles from "./Banner.module.scss";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import account from "../../assets/img/account.png";
import cart from "../../assets/img/cartIcon.png";
import Modal from "../Modal/Modal";

export default function Banner() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <div className={styles.banner}>
        <ul className={styles.bannerElements}>
          <Link to="/" className={styles.bannerLogo}>
            <img className={styles.logo} src={logo}></img>
          </Link>
          <ul className={styles.bannerLinks}>
            <Link className={styles.link}>Фігурки</Link>
            <Link className={styles.link}>Брелки</Link>
            <Link className={styles.link}>Доставка</Link>
            <Link className={styles.link}>Зв'язок з нами</Link>
          </ul>
          <ul className={styles.navLinks}>
            <img
              onClick={() => setModalActive(true)}
              src={account}
              className={styles.account}
            />

            <Link to="/profile/cart" className={styles.bannerCart}>
              <img src={cart} className={styles.cart} />
            </Link>
          </ul>
        </ul>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
}
