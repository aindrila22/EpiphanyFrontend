import React from "react";
import styles from "./Button.module.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <span>{label}</span>
      <ArrowForwardIcon style={{ marginLeft: "10px" }} />
    </button>
  );
};

export default Button;
