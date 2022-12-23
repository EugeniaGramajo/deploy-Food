import React from "react";
import styles from "./stylesComponents/navigationBar.module.css";
import { Link } from "react-router-dom";


function NavigationBar() {  

  return (
    <div className={styles.area}>
      <Link to={"/home"}>
        <button className={styles.button}>HOME</button>
      </Link>
      <div className={styles.dropdown}>
        <button className={styles.button}> MENU </button>
        <div className={styles.dropdowncontent}>
          <div class="dropdown-content">
            <span>
              {" "}
              <Link to={"/home/createRecipe"}>CREATE RECIPE</Link>{" "}
            </span>
          </div>
        </div>
      </div>
      
      <div>
        <Link to={"/home/about"}>
          <button className={styles.button}>ABOUT</button>
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
