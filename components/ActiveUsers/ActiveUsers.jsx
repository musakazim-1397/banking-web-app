import React from "react";
import classes from "./ActiveUsers.module.css";

const ActiveUsers = () => {
  return (
    <div className={classes.usersContainer}>
      <p className={classes.para}>
        <span className={classes.number}>3800+</span>
        {"  "}Active Users{"         "}|
      </p>
      <p className={classes.para}>
        <span className={classes.number}>230+</span>
        {"  "}Trusted By Company{"         "}|
      </p>
      <p className={classes.para}>
        <span className={classes.number}>$250M+</span>
        {"  "}Transaction
      </p>
    </div>
  );
};

export default ActiveUsers;
