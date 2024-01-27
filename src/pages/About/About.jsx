import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./About.module.scss";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";

export default function About(props) {
  const location = useLocation();
  console.log(props, "props");
  console.log(location, "Location hook");
  const image = location.state?.image;
  return (
    <div className={styles.wrapper}>
      <Banner />
      <div className=""></div>
      <img width={200} src={image} alt="cardImageFromProps" />
      <Link to="/profile/cart" state={{ info: image }}>
        Add to cart
      </Link>
    </div>
  );
}
