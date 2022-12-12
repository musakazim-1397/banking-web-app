import React from "react";
import classes from "./BusinessSection.module.css";
const BusinessSection = () => {
  let arrayOfRightSide = [
    {
      imgUrl: "/assets/Star.svg",
      heading: "Rewards",
      text: "The best credit cards offer some tantalizing combinations of promotions and prizes",
    },
    {
      imgUrl: "/assets/Shield.svg",
      heading: "100% Secured",
      text: "We take proactive steps make sure your information and transactions are secure.",
    },
    {
      imgUrl: "/assets/Send.svg",
      heading: "Balance Transfer",
      text: "A balance transfer credit card can save you a lot of money in interest charges.",
    },
  ];
  return (
    <div className={classes.businessContainer}>
      <div className={classes.leftSide}>
        <h1 className={classes.leftHeading}>
          You do the business, we'll handle the money.
        </h1>
        <p className={classes.leftPara}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className={classes.btn}>Get Started</button>
      </div>
      <div className={classes.rightSide}>
      {arrayOfRightSide.map(item=><div className={classes.itemContainer} key={item.heading}>
        <div className={classes.rightImageContainer}>
            <img src={item.imgUrl} alt={item.heading} />
        </div>
        <div className={classes.rightTextContainer}>
            <h3 style={{margin: 0}}>{item.heading}</h3>
            <p style={{margin:0}}>{item.text}</p>
        </div>
      </div>)}
      </div>
 
    </div>
  );
};

export default BusinessSection;
