import React from "react";
import styles from "./SearchInput.module.scss";

export default function SearchInput(props) {
  return <input className={styles.input} {...props} />;
}
