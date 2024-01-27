import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

export default function Card({ image, index }) {
  const state = "hello ";
  return (
    <div id={index} className={styles.card}>
      <img className={styles.cardImage} src={image} alt="cardImage" />
      <Link to="/about" state={{ image: image }} className={styles.cardLink}>
        Докладніше
      </Link>
    </div>
  );
}
