import React from "react";
import styles from "./Modal.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Modal(props) {
  return (
    <div className={styles.modal_box} onClick={props.onClose}>
      <div className={styles.modal_icon_box}>
        <AiOutlineCloseCircle style={{ cursor: "pointer" }} />
      </div>
      <div className={styles.modal_content_box}>
        <div className={styles.modal_text_box}>
          <span className={styles.modal_error_title}>{props.title}</span>
          <span className={styles.modal_error_description}>
            {props.description}
          </span>
        </div>
        <div className={styles.modal_error_button}>Error</div>
      </div>
    </div>
  );
}
