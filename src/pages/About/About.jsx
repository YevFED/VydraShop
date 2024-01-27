import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./About.module.scss";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import cartImage from "../../assets/img/cartIcon.png";

export default function About(props) {
  const location = useLocation();
  console.log(props, "props");
  console.log(location, "Location hook");

  // Making const's with props info(resending from Card)
  const image = location.state?.image;
  const name = location.state?.name;
  const price = location.state?.price;

  return (
    <>
      <Banner />
      <div className={styles.wrapper}>
        <div className={styles.cardWindow}>
          <div className={styles.cardBlock}>
            <img
              className={styles.cardImage}
              width={350}
              src={image}
              alt="cardImageFromProps"
            />
            <div className={styles.cardInfo}>
              <p className={styles.infoName}>{name}</p>
              <p className={styles.infoPrice}>{price + " UAH"}</p>
              <Link
                className={styles.infoButton}
                to="/profile/cart"
                state={{ info: image }}
              >
                <p className={styles.buttonText}> В кошик</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
