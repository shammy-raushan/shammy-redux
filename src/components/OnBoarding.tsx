import React, { useState } from "react";
import styles from "./Welcome.module.scss";
import OnBoardImg from "./asset/OnBoard.png";
import Board1 from "./asset/Board1.png";
import Board2 from "./asset/Board2.png";
import Board3 from "./asset/Board3.png";

import { Typography } from "@material-ui/core";
import Carousel from "./Carousel";
import { productData } from "./MockData";

const OnBoarding = ({ index }: { index: any }) => {
  const [btn, setBtn] = useState(0);

  const [value, setValue] = React.useState(0);
  const [isOpeningScreenVisible, setOpeningScreenVisible] = useState(true);
  setTimeout(() => {
    setOpeningScreenVisible(false);
  }, 5000);
  const handleChangeBtn = (data: React.SetStateAction<number>) => {
    console.log("newValue", data);
    setBtn(data);
  };
  const handleChange = (data: React.SetStateAction<number>) => {
    console.log("newValue", data);
    setValue(data);
  };
  return (
    <>
      <div className={styles.container}>
        <div>
          {isOpeningScreenVisible && (
            <img
              src={OnBoardImg}
              alt=""
              style={{
                maxHeight: "619px",
                width: "100%",
              }}
            />
          )}
        </div>
        <div className={styles.imgText}>
          <Typography variant="h3">Welcome to</Typography>
          <Typography
            variant="h3"
            style={{
              color: "#1AB65C",
            }}
          >
            Bolu
          </Typography>
          <Typography>
            The best hotel bookings in the century to accompany your vacation
          </Typography>{" "}
        </div>
      </div>
      {/* <Carousel images={productData} /> */}

      {/* images content */}
      <div className={styles.dot}>
        <div
          className={`${value === 0 ? styles.dot : styles.dotActive}`}
          onClick={(e) => handleChange(0)}
        >
          1 {/* All Hotel{" "} */}
        </div>

        <div
          className={`${value === 1 ? styles.dot : styles.dotActive}`}
          onClick={(e) => handleChange(1)}
        >
          2 {/* Recommended{" "} */}
        </div>
        <div
          className={`${value === 2 ? styles.dot : styles.dotActive}`}
          onClick={(e) => handleChange(2)}
        >
          3 {/* Recommended{" "} */}
        </div>
      </div>
      {/*  */}

      {value === 0 && (
        <div>
          <img src={Board1} alt="" />
          <h1>Travel safely, comfortably, & easily</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
        </div>
      )}
      {value === 1 && (
        <div>
          <img src={Board2} alt="" />
          <h1>Find the best hotels for your vacation</h1>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h4>
        </div>
      )}
      {value === 2 && (
        <div>
          <img src={Board3} alt="" />
          <h1>Let’s discover the world with us</h1>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h4>
        </div>
      )}
      <div>
        <div
          className={`${btn === 0 ? styles.btnActive : ""}`}
          onClick={(e) => handleChangeBtn(0)}
        >
          <button
            style={{
              width: "100%",
            }}
          >
            skip
          </button>
        </div>

        <div
          className={`${btn === 1 ? styles.btnActive : ""}`}
          onClick={(e) => handleChangeBtn(1)}
        >
          <button>next</button>{" "}
        </div>
      </div>
    </>
  );
};

export default OnBoarding;
