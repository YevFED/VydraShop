import React from "react";
import styles from "./CardTable.module.scss";
import cardData from "../Card/Card.data.js";
import Card from "../Card/Card";

export default function CardTable() {
  return (
    <>
      <div className={styles.cardTableWrapper}>
        <div className={styles.cardTable}>
          {cardData.map((card) => (
            <Card
              image={card.image}
              index={card.id}
              name={card.name}
              price={card.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}
