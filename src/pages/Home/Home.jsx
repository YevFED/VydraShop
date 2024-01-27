import React from "react";
import Banner from "../../components/Banner/Banner";
import styles from "./Home.module.scss";
import CardTable from "../../components/CardTable/CardTable";

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <Banner />
        <CardTable />
      </div>
    </>
  );
}
