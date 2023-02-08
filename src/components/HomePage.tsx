import {
  Button,
  Container,
  createMuiTheme,
  createTheme,
  CssBaseline,
  Grid,
  Switch,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Profile from "./asset/profile.png";
import activeStar from "./asset/home.png";
import deactiveStar from "./asset/booking.png";
import Search from "./asset/search.png";
import { Routes, Route, useNavigate } from "react-router-dom";
import styles from "./Welcome.module.scss";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { top100Hotels } from "./MockData";
// import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { HotelsList } from "./MockData";
import MainPage from "./MainPage";

export function HomePage() {
  const [type, setType] = React.useState(0);
  const [mode, setMode] = useState(false);
  const [value, setValue] = React.useState(0);
  const [tabs, setTabs] = React.useState(0);
  const navigate = useNavigate();

  const handleHeader = (data: React.SetStateAction<number>) => {
    console.log("newValue", data);
    setType(data);
  };

  const onClickHandler = () => {
    setMode(!mode);
  };
  const goToRecentlyBooked = () => {
    navigate("/hotels");
  };

  const handleChange = (data: React.SetStateAction<number>) => {
    console.log("newValue", data);
    setValue(data);
  };
  const handleChangeTab = (data: React.SetStateAction<number>) => {
    console.log("newValue", data);
    setTabs(data);
  };

  return (
    <>
      {/* Toggle starts */}
      <div
        style={{
          background: `${mode ? "#FFFFFF" : "#04243A"}`,
        }}
      >
        <button
          className={styles.toggle}
          onClick={onClickHandler}
          style={{ background: `${mode ? "rgba(255,255,255,1)" : "#333"}` }}
        >
          <div
            className={styles.btn}
            style={{
              marginLeft: `${mode ? "53px" : "2px"}`,
              background: `${mode ? "#333" : "#fff"}`,
            }}
          />{" "}
        </button>

        {/* toggle ends */}

        <div
          style={{
            padding: "16px",
            marginTop: "50px",
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={12}>
              <Typography variant="h5">Hello,Shammy</Typography>{" "}
            </Grid>{" "}
          </Grid>

          <Grid item xs={12} sm={12}>
            {/* searching */}
            <Stack spacing={3} sx={{ width: 500 }}>
              <Autocomplete
                multiple
                id="tags-filled"
                options={top100Hotels.map((option) => option.title)}
                defaultValue={[top100Hotels[13].title]}
                freeSolo
                renderTags={(value: readonly string[], getTagProps) =>
                  value.map((option: string, index: number) => (
                    <Chip
                      variant="outlined"
                      label={option}
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="filled"
                    label="Search Hotels"
                    // placeholder="Favorites"
                  />
                )}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12}>
            <div className={styles.tabs}>
              <div
                className={`${
                  value === 0 ? styles.tabsActive : styles.tabsDeactive
                }`}
                onClick={(e) => handleChange(0)}
              >
                All Hotel{" "}
              </div>
              <div
                className={`${
                  value === 1 ? styles.tabsActive : styles.tabsDeactive
                }`}
                onClick={(e) => handleChange(1)}
              >
                Recommended{" "}
              </div>
              <div
                className={`${
                  value === 2 ? styles.tabsActive : styles.tabsDeactive
                }`}
                onClick={(e) => handleChange(2)}
              >
                Popular{" "}
              </div>
              <div
                className={`${
                  value === 3 ? styles.tabsActive : styles.tabsDeactive
                }`}
                onClick={(e) => handleChange(3)}
              >
                Trending{" "}
              </div>
            </div>
          </Grid>
        </div>

        {value === 0 && (
          <div className={styles.Img}>
            {HotelsList.map(
              (items: {
                img: any;
                title: string;
                status: string;
                amount: string;
              }) => (
                <>
                  <div className={styles.Img}>
                    <img src={items.img} alt="" className={styles.ImgImage} />
                    <Typography variant="h5" className={styles.ImageTitle}>
                      {items.title}
                    </Typography>
                    <Typography variant="h6" className={styles.ImageStatus}>
                      {items.status}
                    </Typography>
                    <Typography variant="h4" className={styles.ImageAmount}>
                      {items.amount}
                    </Typography>
                  </div>
                </>
              )
            )}
          </div>
        )}

        {value === 1 && <div>2ALL HOTEls</div>}
        {value === 2 && <div>3ALL HOTEls</div>}
        {value === 3 && <div>4ALL HOTEls</div>}
        <div className={styles.footerTabs}>
          <div
            className={`${
              tabs === 0 ? styles.active_tab : styles.deactive_tab
            }`}
            onClick={(e) => handleChangeTab(0)}
          >
            <div>
              <img
                src={tabs === 0 ? activeStar : deactiveStar}
                // src={tabs === 0 ? Home : Search}
                // style={{ marginTop: "10px" }}
              />
            </div>
            Home{" "}
          </div>
          <div
            className={`${
              tabs === 1 ? styles.active_tab : styles.deactive_tab
            }`}
            onClick={(e) => handleChangeTab(1)}
          >
            <div>
              <img
                src={tabs === 1 ? Search : activeStar}
                // style={{ marginTop: "10px" }}
              />
            </div>
            Search{" "}
          </div>

          <div
            className={`${
              tabs === 2 ? styles.active_tab : styles.deactive_tab
            }`}
            onClick={(e) => handleChangeTab(2)}
          >
            <div>
              <img
                src={tabs === 2 ? Search : deactiveStar}
                // style={{ marginTop: "10px" }}
              />
            </div>
            Booking{" "}
          </div>

          <div
            className={`${
              tabs === 3 ? styles.active_tab : styles.deactive_tab
            }`}
            onClick={(e) => handleChangeTab(3)}
          >
            <div>
              <img
                src={tabs === 3 ? activeStar : Profile}
                // style={{ marginTop: "10px" }}
              />
            </div>
            Profile{" "}
          </div>
        </div>
        {/* <Hotels /> */}
        <div className={styles.footer}>
          <Typography>Recently Booked</Typography>
          <Button
            variant="text"
            style={{
              color: "#1AB65C",
            }}
            onClick={goToRecentlyBooked}
          >
            SEE ALL
          </Button>
        </div>
      </div>
    </>
  );
}
