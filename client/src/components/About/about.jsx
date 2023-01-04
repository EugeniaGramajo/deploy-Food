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
                <div>
                    <Link to={"https://www.linkedin.com/in/eugenia-gramajo-6b0a82157/"}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="Linkedin"></img>
                        <span>LinkedIn</span>
                    </Link>
                </div>
                <div>
                    <Link to={"https://github.com/EugeniaGramajo/deploy-Food"}>
                        <img src="https://banner2.cleanpng.com/20180824/jtl/kisspng-computer-icons-logo-portable-network-graphics-clip-icons-for-free-iconza-circle-social-5b7fe46b0bac53.1999041115351082030478.jpg"></img>
                        <span>GitHub</span>
                    </Link>
                </div>

            </div>     
        </>
    )
}