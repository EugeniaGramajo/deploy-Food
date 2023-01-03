import React from "react";
import styles from "./about.module.css"

export default function About(){
    
    
    return(
        <>
            <div className={styles.general}>
                <h2>What is Pusheen Recipes?</h2>    

                <p>
                    This is a proyect built with React, Express, Node.js and postgre.
                    The main idea is render a list of recipes, see their details, apply filters and create new ones.

                    This is my first proyect and I am very proud of it because I started from nothing and in four month 
                    I was able to build it and learn a lot in the process.

                </p>

            </div>     
        </>
    )
}