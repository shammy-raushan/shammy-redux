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

const darkTheme = createTheme({
  palette: {
    type: "dark",
    background: {
      default: "hsl(230, 17%, 14%)",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    type: "light",
    background: {
      default: "hsl(0, 0%, 100%)",
    },
  },
});

export function HomePage() {
  const [mode, setMode] = useState("light");

  const selectedTheme = mode === "dark" ? darkTheme : lightTheme;

  //   const [isOpeningScreenVisible, setOpeningScreenVisible] = useState(true);
  //   setTimeout(() => {
  //     setOpeningScreenVisible(false);
  //   }, 2000);
  const [toggleDark, settoggleDark] = useState(false);
  //   const checkbox = document.getElementById("checkbox");
  //   checkbox?.addEventListener("change", () => {
  //     document.getElementsByClassName("theme");
  //   });
  //   const theme = document.querySelector(".theme");
  //   const theme2 = document.querySelector(".theme2");
  // theme2.oncli
  const navigate = useNavigate();
  const goToRecentlyBooked = () => {
    // This will navigate to first component
    navigate("/hotels");
  };

  const [value, setValue] = React.useState(0);
  const [tabs, setTabs] = React.useState(0);
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
      <ThemeProvider theme={selectedTheme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <h1>Hello</h1>
          <Switch
            onChange={() => setMode(mode === "light" ? "dark" : "light")}
          />
        </Container>
      </ThemeProvider>

      <div>
        {/* <input type="checkbox" className={styles.checkbox} id="checkbox" />
        <label htmlFor="checkbox" className={styles.label}>
          <Typography className={styles.dark}>Dark</Typography>
          <Typography className={styles.light}>Light</Typography>
          <div className={styles.ball}></div>
        </label> */}

        <div
          className={styles.theme2}
          style={{
            padding: "16px",
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
            {/* <ScrollTab /> */}
          </Grid>
        </div>
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
