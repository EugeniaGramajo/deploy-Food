import React from "react";
import styles from "./notFound.module.css"

export default function NotFound(){

    return(
        <>
        <div className={styles.fix}>
        <div className={styles.div}>
            <img className={styles.img} alt="notFound" src="images/notFound.png"/>
        </div>
        </div>
        </>
    )
}