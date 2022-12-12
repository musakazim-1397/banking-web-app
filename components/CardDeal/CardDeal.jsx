import React from "react";
import classes from "./CardDeal.module.css";
import Image from "next/image";
const CardDeal = () => {
  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <div className={classes.title}>
          <h1>Find a better card deal in few easy steps.</h1>
        </div>
        <p className={classes.para}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <button className={classes.btn}>Get Started</button>
      </div>
      <div className={classes.rightSide}>
        <div className={classes.rightImageContainer}>
            <Image src='/assets/card.png' height={400} width={400}/>
        </div>
      </div>
      <div className={classes.radialGradientContainer}/>
    </div>
  );
};

export default CardDeal;
