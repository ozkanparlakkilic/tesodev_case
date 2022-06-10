import React from "react";
import { useEffect, useState } from "react";
import styles from "./Pagination.module.scss";

const Pagination = (props) => {
  const [showPaginationArray, setShowPaginationArray] = useState([]);

  useEffect(() => {
    pagination();
  }, [props.activeIndex, props.array]);

  let paginationArray = [];

  const checkData = (number) => {
    return paginationArray.indexOf(number);
  };

  const addData = (data) => {
    paginationArray.push(data);
  };

  const findNegativeIndexData = (index) => {
    checkData(props.array.at(index)) === -1 && addData(props.array.at(index));
  };

  const findPositiveIndexData = (index) => {
    checkData(index) === -1 && addData(index);
  };

  const sortArray = (array) => {
    return array.sort(function (a, b) {
      return a > b ? 1 : -1;
    });
  };

  const addDots = (array) => {
    let newArray = [];
    array.reduce((acc, curr, index, arr) => {
      arr[index] + 1 === arr[index + 1]
        ? newArray.push(arr[index])
        : newArray.push(arr[index]) &&
          index !== arr.length - 1 &&
          newArray.push("...");
    }, []);
    return newArray;
  };

  const pagination = () => {
    const activeIndex = props.activeIndex;
    const allData = props.array;
    const last = allData.length;

    paginationArray.push(1);

    for (let i = -3; i < 3; i++) {
      if (activeIndex + i > last) {
        findPositiveIndexData(activeIndex + i - last);
      } else {
        activeIndex + i <= 0
          ? findNegativeIndexData(activeIndex + i - 1)
          : findPositiveIndexData(activeIndex + i);
      }
    }

    checkData(last) === -1 && paginationArray.push(last);
    paginationArray = sortArray(paginationArray);
    paginationArray = addDots(paginationArray);
    setShowPaginationArray(paginationArray);
  };

  const previous = () => {
    props.activeIndex !== 1 &&
      props.setActiveIndex((activeIndex) => activeIndex - 1);
  };

  const next = () => {
    props.activeIndex !== props.array.length &&
      props.setActiveIndex((activeIndex) => activeIndex + 1);
  };

  const updatePagination = (item) => {
    props.setActiveIndex(item);
  };

  return (
    <div className={styles.pagination}>
      <div
        className={styles.prev}
        onClick={() => previous(props.activeIndex)}
        style={{
          opacity: props.activeIndex === 1 && ".3",
          cursor: props.activeIndex === 1 && "auto",
        }}
      >
        Prev
      </div>
      {props.array.length <= 6
        ? props.array.map((item, index) => (
            <div
              key={index}
              value={item}
              className={[
                styles.pagination_item,
                index + 1 === props.activeIndex && styles.selected,
              ].join(" ")}
              onClick={() => updatePagination(item)}
            >
              {index + 1}
            </div>
          ))
        : showPaginationArray.map((item, index) => (
            <div
              key={index}
              value={item}
              className={[
                styles.pagination_item,
                item === props.activeIndex && styles.selected,
              ].join(" ")}
              onClick={() => updatePagination(item)}
            >
              {item}
            </div>
          ))}

      <div
        className={styles.next}
        onClick={() => next(props.activeIndex)}
        style={{
          opacity: props.activeIndex === props.array.length && ".3",
          cursor: props.activeIndex === props.array.length && "auto",
        }}
      >
        Next
      </div>
    </div>
  );
};

export default Pagination;
