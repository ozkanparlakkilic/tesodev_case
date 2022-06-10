import React from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import styles from "./News.module.scss";
import SliderImage from "./SliderImage";

export default function News() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>Top News</span>
      <div className={styles.container}>
        <AiOutlineLeft className={styles.icon} />
        <SliderImage />
        <SliderImage />
        <SliderImage />
        <AiOutlineRight className={styles.icon} />
      </div>
    </div>
  );
}
