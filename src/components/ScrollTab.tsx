import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function ScrollTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab label="Recommended" />
        <Tab label="Popular" />
        <Tab label="Trending" />
        <Tab label="Popular" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs>
    </Box>
  );
}
// import {
//   Box,
//   Button,
//   Checkbox,
//   Divider,
//   Grid,
//   Tab,
//   Typography,
// } from "@material-ui/core";
// import { Tag } from "@mui/icons-material";
// import React, { useState } from "react";
// import styles from "./Welcome.module.scss";

// import classes from "./../TransactionPage.module.scss";

// export default function ScrollTab() {
// props: { startDate: string; endDate: string, isEndDate: boolean, setStartDate: Function, setEndDate: Function, setIsEndDate: Function }
// const { startDate, endDate, isEndDate, setStartDate, setEndDate, setIsEndDate } = props;

// const { onFilterTrx, closeFilter, trxData } = props;
// const [defaultStatus, setDefaultStatus] = useState("");

// const [startDate, setStartDate] = useState(
//   trxData?.startDate ? new Date(trxData?.startDate).toISOString() : ""
// );
// const [endDate, setEndDate] = useState(
//   trxData?.endDate ? new Date(trxData?.endDate).toISOString() : ""
// );
// const [isEndDate, setIsEndDate] = useState(trxData?.endDate ? true : false);

//   const tags = [
//     { tagName: "Complete", id: "complete" },
//     { tagName: "In Process", id: "inProcess" },
//     { tagName: "In Process", id: "inProcess" },
//     { tagName: "In Process", id: "inProcess" },
//   ];

//   return (
//     <div>
//       <Grid container alignItems="center">
//         <div className={styles.TagsStatus}>
//           {tags.map((tag) => (
//             <Box
//               className={styles.TagsClick}
//               onClick={() => handleStatus(tag.id)}
//             >
//               <Tab
//                 label={tag.tagName}
//                 key={tag.id}
//                 {...(tag.id === defaultStatus && { type: "selected" })}
//               />
//             </Box>
//           ))}
//         </div>
//       </Grid>
//     </div>
//   );
// }

// function handleStatus(id: string): void {
//   throw new Error("Function not implemented.");
// }
// export default ScrollTab;
