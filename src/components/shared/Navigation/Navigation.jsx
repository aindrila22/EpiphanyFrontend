import React from "react";
import { Link } from "react-router-dom";
import fire from "../../../images/fire.png";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const brandStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: "20px",
    color: "orange",
    display: "flex",
  };
  const logoText = {
    marginLeft: "10px",
  };
  return (
    <nav className={`${styles.nav} container`}>
      <Link style={brandStyle} to="/">
        <img src={fire} alt="logo" />
        <span style={logoText}>Epiphany</span>
      </Link>
    </nav>
  );
};

export default Navigation;
