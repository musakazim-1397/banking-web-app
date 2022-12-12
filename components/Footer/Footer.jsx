import Image from 'next/image'
import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.container}>
        <div className={classes.footer}>
            <div className={classes.logoSection}>
                <Image src='/assets/logo.svg' height={50} width={60}/>
                <p>A new way to make the payments easy, reliable and secure.</p>
            </div>
            <div className={classes.socialSection}>
                <div className={classes.usefulLinks}>
                    <h3 className={classes.linksHeader}>Useful Links</h3>
                    <p className={classes.linksPara}>Content</p>
                    <p className={classes.linksPara}>How it works</p>
                    <p className={classes.linksPara}>Create</p>
                    <p className={classes.linksPara}>Explore</p>
                    <p className={classes.linksPara}>Terms and services</p>
                </div>
              
                <div className={classes.usefulLinks}>
                    <h3 className={classes.linksHeader}>Community</h3>
                    <p className={classes.linksPara}>Help Center</p>
                    <p className={classes.linksPara}>How it works</p>
                    <p className={classes.linksPara}>Suggesion</p>
                    <p className={classes.linksPara}>Blog</p>
                    <p className={classes.linksPara}>Newsletter</p>
                </div>
                
                <div className={classes.usefulLinks}>
                    <h3 className={classes.linksHeader}>Partner</h3>
                    <p className={classes.linksPara}>Our Partners</p>
                    <p className={classes.linksPara}>Become a partner</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer