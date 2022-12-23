import React from "react";
import styles from "./loading.module.css"
export default function Loading(){


    return (
        <>
        <div className={styles.div}>
            <img className={styles.img} alt="landing" src="/images/loading.gif"/>
            <h1 className={styles.h1}>Loading...</h1>
        </div>
        
        </>
    )
}