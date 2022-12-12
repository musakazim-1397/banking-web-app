import React, { useState } from "react";
import classes from "./NavigationBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { CgMenuRightAlt } from "react-icons/cg";

const NavigationBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={classes.navContainer}>
      <div className={classes.logoContainer}>
        <Image src="/assets/logo.svg" alt="logo" height={50} width={100} />
      </div>
      <div className={classes.navLinks}>
        <Link href="/">
          <a className={classes.navLink}>Home</a>
        </Link>
        <Link href="/aboutus">
          <a className={classes.navLink}>About Us</a>
        </Link>
        <Link href="/features">
          <a className={classes.navLink}>Features</a>
        </Link>
        <Link href="/solution">
          <a className={classes.navLink}>Solution</a>
        </Link>
        <div
          className={classes.menuIconContainer}
          onClick={() => setShowMenu((prevState) => !prevState)}
        >
          <CgMenuRightAlt size={30} color="white" />
        </div>
        {showMenu && (
          <div className={classes.menuContainer}>
            <Link href="/" ><a className={classes.menuLink} onClick={()=>setShowMenu(false)}>Home</a></Link>
            <Link href="/aboutus" ><a className={classes.menuLink} onClick={()=>setShowMenu(false)}>About Us</a></Link>
            <Link href="/features" ><a className={classes.menuLink} onClick={()=>setShowMenu(false)}>Features</a></Link>
            <Link href="/solution" ><a className={classes.menuLink} onClick={()=>setShowMenu(false)}>Solution</a></Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
