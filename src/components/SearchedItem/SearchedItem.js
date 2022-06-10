import React from "react";
import SearchItem from "../SearchItem/SearchItem";
import styles from "./SearchedItem.module.scss";

const SearchedItem = (props) => {
  return (
    <div className={styles.wrapper}>
      <SearchItem
        style={{ margin: 0 }}
        country={props.country}
        city={props.city}
      />
      <div className={styles.content_box}>
        <span className={styles.fullName}>{props.fullName}</span>
        <span className={styles.date}>{props.date}</span>
      </div>
    </div>
  );
};

export default SearchedItem;
