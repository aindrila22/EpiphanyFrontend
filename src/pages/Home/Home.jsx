import React from "react";
import styles from "./Home.module.css";
import logo from "../../images/fire.png";

import { Link, useHistory } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const history = useHistory();
  const startRegister = () => {
    history.push("/register");
  };
  const signInLink = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };
  return (
    <div className={styles.cardWrapper}>
      <Card logo={logo} title="Welcome to Epiphany">
        <p className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div>
          <Button onClick={startRegister} label="Get your username" />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text</span>
          <Link style={signInLink} to="/login">
            Sign-In
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
