import React from "react";
import Image from 'next/image'
import styles from "../styles/Home.module.css"
import image_logo from "../images/logo-nu.png";

function Logo() {
  return (
    <div className={styles.logo}>
      <Image src={image_logo} alt="logo"/>
      <a className="header-button header-button--login" href="#">Login<svg width="18" height="15" viewBox="0 0 21 18" xmlns="http://www.w3.org/2000/svg"><path d="M13.5997 2.28947V0.5H16.4443C19.4026 0.5 20.1422 3.0848 20.1422 4.37719V13.6228C20.1422 16.486 17.6769 17.4006 16.4443 17.5H13.5997V15.7105H16.4443C18.0372 15.7105 18.151 14.3187 18.151 13.6228V4.37719C18.151 2.70702 17.108 2.28947 16.4443 2.28947H13.5997Z" fill="#4C0677"></path><path fillRule="evenodd" clipRule="evenodd" d="M9.33655 3.41321L14.4329 8.50952C14.563 8.63961 14.636 8.81606 14.636 9.00004C14.636 9.18403 14.5629 9.36049 14.4328 9.49059L9.33627 14.5871L8.35526 13.6061L12.2676 9.69382L1.47578 9.69457L1.47489 8.30636L12.2667 8.30561L8.35492 4.39386L9.33606 3.41272L9.33655 3.41321Z" fill="#4C0677"></path></svg></a>
      </div>
  );
};

export default Logo;
