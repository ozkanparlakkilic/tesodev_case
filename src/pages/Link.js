import React from "react";
import styles from "./Link.module.scss";
import logo from "../assets/logo.png";
import ReturnPage from "../components/ReturnPage/ReturnPage";
import Input from "../components/Input/Input";
import { useHistory } from "react-router-dom";
import Button from "../components/Button/Button";
import { useState } from "react";
import Modal from "../components/Modal/Modal";
import { validateEmail } from "../utils/checkEmail";
import { useEffect } from "react";
import { rotate } from "../utils/rotatePage";

const Link = () => {
  const history = useHistory();
  const [fullName, setFullname] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const textLength = 3;

  const addData = () => {
    checkInputs() !== true && setShowModal(true);
  };

  useEffect(() => {
    setShowModal(false);
  }, [fullName, city, country, email]);

  const checkInputs = () => {
    if (fullName.length < textLength)
      return "Name and surname should contain at least 2 words";
    if (country.length < textLength)
      return "Country should contain at least 2 words";
    if (city.length < textLength) return "City should contain at least 2 words";
    if (!validateEmail(email)) return "Email not correct syntax";
    return true;
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
        <ReturnPage onClick={() => rotate(history, "/list")} />
      </div>
      <div className={styles.main}>
        <Input
          placeholder="Enter name and surname"
          label="Name and Surname"
          error={showModal && !fullName ? true : false}
          onChange={(e) => setFullname(e.target.value)}
        />
        <Input
          placeholder="Enter a country"
          label="Country"
          error={showModal && !country ? true : false}
          onChange={(e) => setCountry(e.target.value)}
        />
        <Input
          placeholder="Enter a city"
          label="City"
          error={showModal && !city ? true : false}
          onChange={(e) => setCity(e.target.value)}
        />
        <Input
          placeholder="Enter a e-mail (abc@xyz.com)"
          label="Email"
          error={showModal && !email ? true : false}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className={styles.button_box}>
          <Button text="Add" style={{ margin: "1rem 0" }} onClick={addData} />
        </div>
      </div>
      {showModal && (
        <Modal
          title="Error while adding link element"
          description={checkInputs()}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Link;
