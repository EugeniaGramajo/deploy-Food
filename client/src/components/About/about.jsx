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
                <div className={styles.social}>
                    <a href="https://www.linkedin.com/in/eugenia-gramajo-6b0a82157/">
                        <img src="https://www.freepnglogos.com/uploads/linkedin-basic-round-social-logo-png-13.png"></img>
                        <span>LinkedIn</span>                    
                    </a>
                </div>
                <div className={styles.social}>
                    <a href="https://github.com/EugeniaGramajo/deploy-Food">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img>
                        <span>GitHub</span>                    
                    </a>
                </div>

            </div>     
        </>
    )
}