import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

export default function Card({ image }) {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={image} alt="cardImage" />
      <Link to="/about" className={styles.cardLink}>
        Докладніше
      </Link>
    </div>
  );
}
