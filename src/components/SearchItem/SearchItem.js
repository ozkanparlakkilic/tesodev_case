import React from "react";
import styles from "./SearchItem.module.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";

const SearchItem = (props) => {
  return (
    <div className={styles.wrapper} onClick={props.onClick} style={props.style}>
      <HiOutlineLocationMarker style={{ fontSize: "30px" }} />
      <div className={styles.text_container}>
        <span className={styles.title}>{props.country}</span>
        <span className={styles.location_text}>{props.city}</span>
      </div>
    </div>
  );
};

export default SearchItem;
