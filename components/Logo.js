import React from "react";
import Image from 'next/image'
import styles from "../styles/Home.module.css"
import image_logo from "../images/logo-c6.png";
import Menu from "../components/menu";

function Logo() {
  return (
    <div className={styles.nav}>
      <Image src={image_logo} alt="logo" />
      <Menu />
      
    </div>
    
  );
};

export default Logo;
