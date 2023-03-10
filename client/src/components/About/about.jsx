import React from "react";
import styles from "./about.module.css"
import {Link} from "react-router-dom"

export default function About(){
    
    
    return(
        <>
            <div className={styles.general}>
                <h2>What is Pusheen Recipes?</h2>    

                <p className={styles.p}>
                    This is a proyect built with React, Express, Node.js and postgre.
                    The main idea is render a list of recipes, see their details, apply filters and create new ones.

                    This is my first proyect and I am very proud of it because I started from nothing and in four month 
                    I was able to build it and learn a lot in the process.
                </p>
                <div className={styles.div}>
                <div className={styles.social}>
                    <a href="https://www.linkedin.com/in/eugenia-gramajo" target="_blank">
                        <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"></img>
                        <span>LinkedIn</span>                    
                    </a>
                </div>
                <div className={styles.social}>
                    <a href="https://github.com/EugeniaGramajo/deploy-Food" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img>
                        <span>GitHub</span>                    
                    </a>
                </div>
                </div>

            </div>     
        </>
    )
}