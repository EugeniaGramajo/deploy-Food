import React from "react";
import styles from "./stylesComponents/header.module.css"
import LogoTitle from "./logoTitle";
import NavigationBar from "./navigationBar";
import SearchBar from "./searchBar";

export default function Header(props){

return(
<div className={styles.navigationBar}>
    <div className={styles.div}>
        <div className={styles.logo}>
        <LogoTitle/>
        </div>
            <div className={styles.searchBar}>
            <SearchBar></SearchBar>
            </div>
    </div>
<NavigationBar></NavigationBar>
</div>
)
}