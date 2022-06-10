import React from "react";
import styles from "./Button.module.scss";

export default function Button(props) {
  return (
    <div style={props.style} className={styles.button} onClick={props.onClick}>
      {props.text}
    </div>
  );
}
