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

  //   const [value, setValue] = React.useState(0);
  //   const [tabs, setTabs] = React.useState(0);
  //   const handleChange = (data: React.SetStateAction<number>) => {
  //     console.log("newValue", data);
  //     setValue(data);
  //   };
  //   const handleChangeTab = (data: React.SetStateAction<number>) => {
  //     console.log("newValue", data);
  //     setTabs(data);
  //   };
  //   const navigate = useNavigate();

  //   const navigateToContacts = () => {
  //     // 👇️ navigate to /contacts
  //     navigate("/contacts");
  //   };

  //   const navigateHome = () => {
  //     // 👇️ navigate to /
  //     navigate("/");
  //   };

  return (
    <>
      {/* <Routes>
        <Route path="/contacts" element={<SearchBar />} />
        <Route path="/" element={<Login />} />
      </Routes> */}
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
        {/* <Button variant="contained">LOGIN</Button> */}
        {/* <Button variant="contained">Register</Button> */}
      </div>
    </>
  );
}
