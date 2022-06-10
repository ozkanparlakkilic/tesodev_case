import React from "react";
import styles from "./Input.module.scss";

const Input = (props) => {
  return (
    <div className={styles.input_box}>
      <label
        className={
          props.error
            ? [styles.label, styles.error_label].join(" ")
            : styles.label
        }
      >
        {props.label}
      </label>
      <input
        placeholder={props.placeholder}
        style={props.style}
        className={
          props.error ? [styles.input, styles.error].join(" ") : styles.input
        }
        onChange={props.onChange}
      />
      {props.error && (
        <span className={styles.error_label} style={{ margin: ".5rem 0" }}>
          Error text
        </span>
      )}
    </div>
  );
};

export default Input;
