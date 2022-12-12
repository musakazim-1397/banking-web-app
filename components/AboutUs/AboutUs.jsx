import React from "react";
import classes from "./AboutUs.module.css";
const AboutUs = () => {
  const cardsArray = [
    {
      para: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      avatarName:'Herman Jensen',
      status:'Founder & Leader',
      imageUrl:'/assets/people01.png'
    },
    {
      para: "Money makes your life easier. If you're lucky to have it, you're lucky.",
      avatarName:'Steve Mark',
      status:'Founder & Leader',
      imageUrl:'/assets/people02.png'
    },
    {
      para: "It is usually people in the money business, finance, and international trade that are really rich.",
      avatarName:'Kenn Gallargh',
      status:'Founder & Leader',
      imageUrl:'/assets/people03.png'
    },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.peopleSaying}>
        <h1 className={classes.title}>What people are saying about us</h1>
        <p className={classes.para}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className={classes.aboutUsCards}>
        {cardsArray.map(card=> <div className={classes.card} key={card.para}>
          <div className={classes.cardHeader} >
            <img src={"assets/quotes.svg"} alt="quotes" />
            <p className={classes.cardpara}>
             {card.para}
            </p>
            </div>
            <div className={classes.avatarContainer}>
                <div className={classes.avatarImageContainer}>
                    <img src={card.imageUrl} alt="image" />
                </div>
                <div className={classes.avatarInfo}>
                    <p className={classes.avatarpara}>{card.avatarName}</p>
                    <p className={classes.avatarpara}>{card.status}</p>
                </div>
            </div>
          
        </div>
        )}
      </div>
      <div className={classes.brands}>
        <div className={classes.brand}>
            <img src={'/assets/airbnb.png'}/>
        </div>
        <div className={classes.brand}>
            <img src={'/assets/binance.png'}/>
        </div>
        <div className={classes.brand}>
            <img src={'/assets/coinbase.png'}/>
        </div>
        <div className={classes.brand}>
            <img src={'/assets/dropbox.png'}/>
        </div>
      </div>
      <div className={classes.tryOurService}>
        <div className={classes.ourServiceLeftSide}>
            <h1 className={classes.serviceHeading}>Lets try our service now!</h1>
            <p className={classes.servicePara}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <button className={classes.btn}>Get Started</button>
      </div>
    </div>
  );
};

export default AboutUs;
