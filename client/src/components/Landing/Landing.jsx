import React from "react";
import { Link } from "react-router-dom";
import styles from "./landing.module.css"
export default function Landing(){
    


    return(
        <>
        <div >
        <img className={styles.img} src="./images/banner.webp" alt="michi" />
        <div className={styles.div}>
        <p>Welcome to Pusheen recipes!! </p>
        <p>Discover more than 100 new recipes</p>
        <div  ><Link to={"/home"}><button className={styles.button}>Let's cook!</button></Link></div>
        </div>
        </div>
        </>
    )
}