import { Button, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import deactiveStar from "./asset/recentlyBooked.png";
import activeStar from "./asset/bookmark.png";
import { Routes, Route, useNavigate } from "react-router-dom";
import styles from "./Welcome.module.scss";
import { Bookmarks, RecentlyBooked } from "./MockData";
import BackArrow from "./asset/Back.png";

export function BookedHotels() {
  const [tabs, setTabs] = React.useState(0);

  const navigate = useNavigate();
  const goToHomePage = () => {
    // This will navigate to first component
    navigate("/home");
  };

  const handleChangeTab = (data: React.SetStateAction<number>) => {
    console.log("newValue", data);
    setTabs(data);
  };

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
          {tabs === 0 && <Typography variant="h5">Recently Booked</Typography>}
          {tabs === 1 && <Typography variant="h5">My Bookmark</Typography>}

          <div onClick={(e) => handleChangeTab(0)}>
            <img
              src={tabs === 0 ? activeStar : deactiveStar}
              style={{ marginTop: "10px" }}
            />
          </div>
          <div onClick={(e) => handleChangeTab(1)}>
            <img
              src={tabs === 1 ? activeStar : deactiveStar}
              style={{ marginTop: "10px" }}
            />
          </div>
        </div>
      </div>
      {tabs === 0 && (
        <div
          style={{
            background: "#E8F8EF",
            padding: "16px",
          }}
        >
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
                  <Grid item>
                    <Typography
                      style={{
                        marginLeft: "20px",
                      }}
                    >
                      {items.title}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      style={{
                        marginLeft: "20px",
                      }}
                    >
                      {items.status}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      style={{
                        marginLeft: "20px",
                      }}
                    >
                      {items.rating}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={3} sm={1} md={1} lg={1}>
                  <Typography
                    style={{
                      textAlign: "right",
                    }}
                  >
                    {items.amount}
                  </Typography>
                </Grid>
              </Grid>
            </>
          ))}
        </div>
      )}
      {tabs === 1 && (
        <div
          style={{
            background: "#E8F8EF",
            padding: "16px",
          }}
        >
          {Bookmarks.map((items) => (
            <>
              <div className={styles.bookmark}>
                <div>
                  <img src={items.img} />
                </div>{" "}
                <Typography variant="h5">{items.title}</Typography>
                <Grid container>
                  <Grid item>
                    {" "}
                    <img src={items.star} />{" "}
                  </Grid>
                  <Grid item>
                    {" "}
                    <Typography>{items.rating}</Typography>
                  </Grid>
                  <Grid item>
                    {" "}
                    <Typography>{items.status}</Typography>
                  </Grid>
                </Grid>{" "}
                <Typography>{items.amount}</Typography>
              </div>

              {/* {items.title} {items.rating} {items.amount} */}
            </>
          ))}
        </div>
      )}
    </>
  );
}
function getUser() {
  throw new Error("Function not implemented.");
}
