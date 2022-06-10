import React from "react";
import Image from "../../assets/Image.png";
import styles from "./News.module.scss";

export default function SliderImage() {
  return (
    <div className={styles.image_box}>
      <img src={Image} alt="SliderImage" className={styles.image} />
      <div className={styles.context_box}>
        <span className={styles.title}>
          A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
        </span>
        <span className={styles.description}>
          A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
        </span>
      </div>
    </div>
  );
}
