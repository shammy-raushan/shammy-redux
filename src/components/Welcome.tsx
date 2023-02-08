import { Button, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Profile from "./asset/profile.png";
import activeStar from "./asset/home.png";
import deactiveStar from "./asset/booking.png";
import Search from "./asset/search.png";
import { Routes, Route, useNavigate } from "react-router-dom";
import WelcomeImg from "./asset/welcome.png";
import styles from "./Welcome.module.scss";
import { Login } from "./Login";

// import { TransactionItems } from "./MockData";

export function Welcome() {
  const [isOpeningScreenVisible, setOpeningScreenVisible] = useState(true);
  setTimeout(() => {
    setOpeningScreenVisible(false);
  }, 2000);

  return (
    <>
      <div className={styles.container}>
        <div>
          {isOpeningScreenVisible && (
            <img
              src={WelcomeImg}
              alt=""
              style={{
                maxHeight: "619px",
                width: "100%",
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}
