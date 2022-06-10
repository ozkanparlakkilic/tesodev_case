import React, { Fragment, useState } from "react";
import styles from "./List.module.scss";
import logo from "../assets/logo.png";
import Button from "../components/Button/Button";
import { BsArrowDownUp } from "react-icons/bs";
import SearchedItem from "../components/SearchedItem/SearchedItem";
import Line from "../components/Line/Line";
import SearchInput from "../components/SearchInput/SearchInput";
import { useHistory } from "react-router-dom";
import { rotate } from "../utils/rotatePage";
import { useSearch } from "../hook/useSearch";
import { data } from "../data/mockData";
import { useEffect } from "react";
import Pagination from "../components/Pagination/Pagination";

const List = () => {
  const searchItemLength = 5;
  const [showOrder, setShowOrder] = useState(false);
  const history = useHistory();
  const [searchText, setSearchText] = useState("");
  const { search, setSearch } = useSearch();
  const [searchItems, setSearchItems] = useState([]);
  const [searchArray, setSearchArray] = useState([]);
  const [filter, setFilter] = useState({
    nameAscending: false,
    nameDescending: false,
    yearAscending: false,
    yearDescending: false,
  });
  const [activeIndex, setActiveIndex] = useState(1);
  const [paginationArray, setPaginationArray] = useState([]);

  useEffect(() => {
    setSearchItems(
      data.data
        .filter((item) => item.includes(search))
        .slice(
          (activeIndex - 1) * searchItemLength,
          (activeIndex - 1) * searchItemLength + searchItemLength
        )
    );
    setSearchArray(data.data.filter((item) => item.includes(search)));
    paginationDataLength();
  }, [activeIndex, search]);

  const paginationDataLength = () => {
    let newArray = [];
    for (
      let index = 0;
      index <= Math.floor(searchArray.length / searchItemLength);
      index++
    ) {
      newArray.push(index + 1);
    }
    setPaginationArray(newArray);
  };

  const dateConvert = (date) => {
    var parts = date.split("/");
    return new Date(parts[2], parts[1] - 1, parts[0]).getTime();
  };

  const getKeyByValue = (object, value) => {
    return Object.keys(object).find((key) => object[key] === value);
  };

  const updateFilter = () => {
    const newObject = { ...filter };
    let previous = getKeyByValue(filter, true);
    newObject[previous] = false;
    return newObject;
  };

  const nameAscendingSortedArray = () => {
    const newArray = searchArray.sort(function (a, b) {
      if (a[0] > b[0]) return 1;
      if (a[0] < b[0]) return -1;
      return 0;
    });

    setFilter({ ...updateFilter(), nameAscending: true });
    setShowOrder(false);
    setSearchItems(
      newArray.slice(
        (activeIndex - 1) * searchItemLength,
        (activeIndex - 1) * searchItemLength + searchItemLength
      )
    );
  };

  const nameDescendingSortedArray = () => {
    const newArray = searchArray.reverse(function (a, b) {
      if (a[0] > b[0]) return 1;
      if (a[0] < b[0]) return -1;
      return 0;
    });
    setFilter({ ...updateFilter(), nameDescending: true });
    setShowOrder(false);
    setSearchItems(
      newArray.slice(
        (activeIndex - 1) * searchItemLength,
        (activeIndex - 1) * searchItemLength + searchItemLength
      )
    );
  };

  const yearAscendingSortedArray = () => {
    const newArray = searchArray.sort(function (a, b) {
      if (dateConvert(a[3]) > dateConvert(b[3])) return 1;
      if (dateConvert(a[3]) < dateConvert(b[3])) return -1;
      return 0;
    });
    setFilter({ ...updateFilter(), yearAscending: true });
    setShowOrder(false);
    setSearchItems(
      newArray.slice(
        (activeIndex - 1) * searchItemLength,
        (activeIndex - 1) * searchItemLength + searchItemLength
      )
    );
  };

  const yearDescendingSortedArray = () => {
    const newArray = searchArray.reverse(function (a, b) {
      if (dateConvert(a[3]) > dateConvert(b[3])) return 1;
      if (dateConvert(a[3]) < dateConvert(b[3])) return -1;
      return 0;
    });
    setFilter({ ...updateFilter(), yearDescending: true });
    setShowOrder(false);
    setSearchItems(
      newArray.slice(
        (activeIndex - 1) * searchItemLength,
        (activeIndex - 1) * searchItemLength + searchItemLength
      )
    );
  };

  const toggleHandler = () => {
    setShowOrder(!showOrder);
  };

  const checkText = () => {
    if (searchText.length < 3) return false;
    return true;
  };

  const handleSearch = () => {
    setSearch(searchText);
    let newArray = [];
    if (checkText()) {
      newArray = data.data
        .filter((item) => item.includes(searchText))
        .slice(
          (activeIndex - 1) * searchItemLength,
          (activeIndex - 1) * searchItemLength + searchItemLength
        );
    }
    setSearchItems(newArray);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.image}>
          <img
            style={{ cursor: "pointer" }}
            src={logo}
            alt="tesodev-logo"
            onClick={() => rotate(history, "/")}
          />
        </div>
        <div className={styles.input_container}>
          <SearchInput
            placeholder="Search"
            defaultValue={search}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            text="Search"
            style={{ marginLeft: "10px" }}
            onClick={() => handleSearch()}
          />
        </div>
        <Button
          text="Add new record"
          style={{ margin: "10px" }}
          onClick={() => rotate(history, "/link")}
        />
      </div>
      <div className={styles.main}>
        <div className={styles.data_box}>
          <div className={styles.item_box}>
            {searchItems.map((item, index) => (
              <Fragment key={index}>
                <SearchedItem
                  fullName={item[0]}
                  date={item[3]}
                  country={item[4]}
                  city={item[5]}
                />
                {index !== searchItems.length - 1 && <Line />}
              </Fragment>
            ))}
          </div>
          {searchItems.length !== 0 && (
            <Pagination
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              array={paginationArray}
            />
          )}
        </div>
        <div className={styles.order}>
          <div className={styles.orderBy} onClick={() => toggleHandler()}>
            <BsArrowDownUp />
            <span className={styles.order_text}>Order By</span>
          </div>
          {showOrder && (
            <div className={styles.orderBy_dropdown_box}>
              <span
                className={[
                  styles.orderBy_dropdown_box_item,
                  filter.nameAscending && styles.selected,
                ].join(" ")}
                onClick={() => nameAscendingSortedArray()}
              >
                Name ascending
              </span>
              <span
                className={[
                  styles.orderBy_dropdown_box_item,
                  filter.nameDescending && styles.selected,
                ].join(" ")}
                onClick={() => nameDescendingSortedArray()}
              >
                Name descending
              </span>
              <span
                className={[
                  styles.orderBy_dropdown_box_item,
                  filter.yearAscending && styles.selected,
                ].join(" ")}
                onClick={() => yearAscendingSortedArray()}
              >
                Year ascending
              </span>
              <span
                className={[
                  styles.orderBy_dropdown_box_item,
                  filter.yearDescending && styles.selected,
                ].join(" ")}
                onClick={() => yearDescendingSortedArray()}
              >
                Year descending
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
