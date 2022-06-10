import React from "react";
import Button from "../components/Button/Button";
import styles from "./Main.module.scss";
import logo from "../assets/logo.png";
import SearchItem from "../components/SearchItem/SearchItem";
import News from "../components/News/News";
import Footer from "../components/Footer/Footer";
import { useHistory } from "react-router-dom";
import SearchInput from "../components/SearchInput/SearchInput";
import { rotate } from "../utils/rotatePage";

import { data } from "../data/mockData";
import { useState } from "react";
import { useSearch } from "../hook/useSearch";

const Main = () => {
  const history = useHistory();
  const [searchText, setSearchText] = useState("");
  const [searchedArray, setSearchedArray] = useState([]);
  const { setSearch } = useSearch();

  const checkText = () => {
    if (searchText.length < 3) return false;
    return true;
  };

  const handleSearch = () => {
    setSearch(searchText);
    let newArray = [];
    if (checkText()) {
      newArray = data.data.filter((item) => item.includes(searchText));
      if (newArray.length > 3) {
        newArray = newArray.splice(0, 3);
      }
    }
    setSearchedArray(newArray);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Button
          text="Add new record"
          onClick={() => rotate(history, "/link")}
        />
      </div>
      <div className={styles.main}>
        <div className={styles.search_container}>
          <div className={styles.image}>
            <img
              style={{ cursor: "pointer" }}
              src={logo}
              alt="tesodev-logo"
              onClick={() => rotate(history, "/")}
            />
          </div>
          <div className={styles.search_bar}>
            <span className={styles.input_label}>Find in records</span>
            <div className={styles.input_container}>
              <SearchInput
                placeholder="Search"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <Button
                text="Search"
                style={{ marginLeft: "10px" }}
                onClick={() => handleSearch()}
              />
            </div>
            {searchedArray.length > 0 && (
              <div className={styles.search_item_box}>
                {searchedArray.map((item, index) => {
                  return (
                    <SearchItem
                      key={index}
                      onClick={() => rotate(history, "/list")}
                      country={item[4]}
                      city={item[5]}
                    />
                  );
                })}

                <span
                  className={styles.more_text}
                  onClick={() => rotate(history, "/list")}
                >
                  Show More...
                </span>
              </div>
            )}
          </div>
        </div>
        <News />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
