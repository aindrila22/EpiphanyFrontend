import React, { useState } from "react";
import Card from "./../../../components/shared/Card/Card";
import TextInput from "./../../../components/shared/TextInput/TextInput";
import Button from "./../../../components/shared/Button/Button";
import logo from "../../../images/lock.png";
import styles from "./StepOtp.module.css";
const StepOtp = ({ onNext }) => {
  const [otp, setOtp] = useState("");
  return (
    <>
      <div className={styles.cardWrapper}>
        {" "}
        <Card logo={logo} title="Enter the code we just texted you">
          <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />
          <div>
            <div className={styles.actionButtonWrap}>
              <Button label="Next" />
            </div>
            <p className={styles.bottomParagraph}>
              By entering your number, you're agreeing to our Terms of Service
              and Privacy Policy. Thanks!
            </p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default StepOtp;
