import * as React from "react";

import activeStar from "./asset/profile.png";
import deactiveStar from "./asset/welcome.png";
import Grid from "@mui/material/Grid";
import styles from "./Welcome.module.scss";
import { HomePage } from "./HomePage";
import { Login } from "./Login";

const MainPage = () => {
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
      <div>
        <div
          className={`${
            value === 0
              ? styles.activities_active_tabs
              : styles.activities_deactive_tabs
          }`}
          onClick={(e) => handleChange(0)}
        >
          All Hotel
        </div>
        <div
          className={`${
            value === 1
              ? styles.activities_active_tabs
              : styles.activities_deactive_tabs
          }`}
          onClick={(e) => handleChange(1)}
        >
          Recommended
        </div>
        <div
          className={`${
            value === 2
              ? styles.activities_active_tabs
              : styles.activities_deactive_tabs
          }`}
          onClick={(e) => handleChange(2)}
        >
          Recommended 3
        </div>
        <div
          className={`${
            value === 3
              ? styles.activities_active_tabs
              : styles.activities_deactive_tabs
          }`}
          onClick={(e) => handleChange(3)}
        >
          Recommended4
        </div>
        {value === 0 && <div>1ALL HOTEls</div>}
        {value === 1 && <div>2ALL HOTEls</div>}
        {value === 2 && <div>3ALL HOTEls</div>}
        {value === 3 && <div>4ALL HOTEls</div>}
      </div>
    </>
  );
};

export default MainPage;
