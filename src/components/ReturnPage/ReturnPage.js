import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import styles from "./ReturnPage.module.scss";

export default function ReturnPage(props) {
  return (
    <div className={styles.wrapper} onClick={props.onClick}>
      <HiArrowNarrowLeft />
      <span style={{ marginLeft: ".5rem" }}>Return to List Page</span>
    </div>
  );
}
