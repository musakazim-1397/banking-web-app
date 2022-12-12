import React from "react";
import classes from "./HeroSection.module.css";
import { FaPercent } from "react-icons/fa";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className={classes.heroContainer}>
      <div className={classes.leftContainer}>
      {/* <div className={classes.radialGradientContainer}/> */}
        <p className={classes.leftTopPara}>
          <span
            style={{
              borderRadius: "50%",
              backgroundColor: "rgb(64 55 55 / 80%)",
              padding: "0.2rem",
              margin: "0 0.2rem",
            }}
          >
            <FaPercent color="#25beb6" />
          </span>
          20% <span style={{ color: '#9d9b9b', margin: '0.4rem' }}>DISCOUNT FOR</span>1{" "}
          <span style={{ color: '#9d9b9b', margin: '0.4rem' }}>MONTH ACCOUNT</span>
        </p>
        <div className={classes.leftHeadings}>
          <h1>The Next</h1>
          <h1 className={classes.gradientText}>Generation</h1>
          <h1>Payment Method</h1>
        </div>
        <div className={classes.leftLowerPara}>
          <p>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <Image src={"/assets/robot.png"} width={500} height={500} />
      </div>
    </div>
  );
};

export default HeroSection;
