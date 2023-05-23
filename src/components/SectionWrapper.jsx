import React from "react";

import styles from "../styles/Global";
import assets from "../assets";

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner }) => {
  return (
    <div
      className={`min-h-screen ${styles.section} ${styles.bgWhite} ${banner}`}
    >
      <div className={`flex items-center ${styles.boxClass}`}>
        <div className={`${styles.descDiv} fadeLeftMini`}>
          <h1 className={`${styles.h1Text}`}>{title}</h1>
        </div>
      </div>
      <h1>{description}</h1>
      {/* <img src={mockupImg} alt="mockup-img" /> */}
    </div>
  );
};

export default SectionWrapper;
