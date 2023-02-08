import styles from "./Carousel.module.scss";
// import "react-multi-carousel/lib/styles.css";
import React, { useState, useEffect } from "react";

export default function Carousel({ images }: { images: any }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  let timeOut: any = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 1500);
  });

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };
  console.log(current);
  return (
    <>
      <div
        className={styles.carousel}
        onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
        }}
      >
        <div className={styles.carouselWrapper}>
          {images.map((items: any, index: any) => {
            return (
              <>
                <div
                  key={index}
                  className={
                    index === current
                      ? styles.carouselCardActive
                      : styles.carouselCard
                  }
                >
                  <img className={styles.cardImage} src={items.imgUrl} alt="" />
                  <div className={styles.cardOverlay}>
                    <h2 className={styles.cardTitle}>{items.name}</h2>{" "}
                  </div>
                </div>{" "}
              </>
            );
          })}
          <div className={styles.carouselArrowLeft} onClick={slideLeft}>
            &lsaquo;
          </div>
          <div className={styles.carouselArrowRight} onClick={slideRight}>
            &rsaquo;
          </div>
          <div className={styles.carouselPagination}>
            {images.map((_: any, index: any) => {
              return (
                <>
                  <div
                    key={index}
                    //   className={
                    //     index === current
                    //       ? styles.paginationDotActive
                    //       : styles.paginationDot
                    //   }
                    className={[
                      styles.paginationDot,
                      index === current ? styles.paginationDotActive : "",
                    ].join("")}
                    onClick={() => setCurrent(index)}
                  >
                    {" "}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>{" "}
      <div> </div>
    </>
  );
}
