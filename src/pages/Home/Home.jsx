import React from "react";
import Banner from "../../components/Banner/Banner";
import styles from "./Home.module.scss";

import { useState } from "react";

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <Banner />
      </div>
    </>
  );
}
