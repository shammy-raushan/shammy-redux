import { Button, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
import styles from "./Welcome.module.scss";
import { RecentlyBooked } from "./MockData";
import BackArrow from "./asset/Back.png";

export function BookedHotels() {
  const nav = useNavigate();
  const goToHomePage = () => {
    // This will navigate to first component
    nav("/home");
  };
  const goToLogin = () => {
    // This will navigate to first component
    nav("/login");
  };

  // if (typeof 25.01.2023 === "date") {
  //   console.log("This is a date, indeed!");
  // }
  return (
    <>
      {" "}
      <div className={styles.container}>
        <div className={styles.footer}>
          <img
            src={BackArrow}
            alt=""
            onClick={goToHomePage}
            style={{
              marginLeft: "10px",
            }}
          />
          <Typography variant="h5">Recently Booked</Typography>
        </div>
      </div>
      <div
        style={{
          background: "#E8F8EF",
          padding: "16px",
        }}
      >
        {/* Grid items */}
        <div>
          {RecentlyBooked.map((items) => (
            <>
              <Grid
                container
                style={{
                  background: "#FFFFFF",
                  padding: "16px",
                  marginBottom: "16px",
                  borderRadius: "11px",
                }}
              >
                <Grid item lg={2} md={2} sm={2} xs={3}>
                  <img src={items.img} />
                </Grid>
                <Grid container xs={6} sm={8} md={9} lg={9}>
                  <Grid item lg={3} md={3} xs={6}>
                    <Typography>{items.title}</Typography>
                  </Grid>
                  <Grid item lg={4}>
                    <Typography>{items.status}</Typography>
                  </Grid>
                  <Grid item lg={4}>
                    <Typography>{items.rating}</Typography>
                  </Grid>
                </Grid>
                <Grid item xs={3} sm={1} md={1} lg={1}>
                  <Typography>{items.amount}</Typography>
                </Grid>
              </Grid>
            </>
          ))}
        </div>
      </div>
      {/* <Button onClick={goToLogin}>Loginnnnnn</Button> */}
    </>
  );
}
function getUser() {
  throw new Error("Function not implemented.");
}
