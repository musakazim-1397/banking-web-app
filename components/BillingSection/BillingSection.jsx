import React from "react";
import classes from "./BillingSection.module.css";
import Image from "next/image";
const BillingSection = () => {
  return (
    <div className={classes.billingContainer}>
      <div className={classes.leftImageContainer}>
        <Image src="/assets/bill.png" alt="creditcard image" height={440} width={400} />
      </div>
      <div className={classes.rightContainer}>
        <h1 className={classes.title}>
          Easily Control your billing &#38; invoice
        </h1>
        <p className={classes.description}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className={classes.appstoresContainer}>
                <img src='assets/apple.svg'/>
                <div style={{margin:'0 0.3rem'}}/>
                <img src='assets/google.svg'/>
        </div>
      </div>
      <div className={classes.radialGradientContainer}/>
    </div>
  );
};

export default BillingSection;
