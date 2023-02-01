import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import styles from "./Welcome.module.scss";

const themess = () => {
  const [mode, setMode] = useState("light");

  const selectedTheme = mode === "dark" ? darkTheme : lightTheme;
  return (
    <div>
      <input type="checkbox" className={styles.checkbox} id="checkbox" />
      <label htmlFor="checkbox" className={styles.label}>
        <Typography className={styles.dark}>Dark</Typography>
        <Typography className={styles.light}>Light</Typography>
        <div className={styles.ball}></div>
      </label>
    </div>
  );
};

export default themess;
