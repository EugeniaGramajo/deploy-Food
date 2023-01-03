import React from "react";
import { Link } from "react-router-dom";

import styles from "./RecipeCard.module.css";


export default function RecipeCard(props) {

    
  return (
    
    <div className={styles.general}><Link to={`/recipes/${props.id}`}>
      <div className={styles.cardDiv}>
        <img className={styles.img} src={props.image} alt={props.name} />
        
            <div className={styles.desc}>
                <h2 className={styles.h2}>{props.title}</h2>
                    <div className={styles.divthis} >
                        This is:<ul >{props.Diet_type?.map(d=><li key={d} className={styles.li}>
                          <Link to={`/diet/${d}`} className={styles.li}>{d}</Link>
                          </li>)}</ul>
                    </div>
                    <div className={styles.hs}>
                      Health Score: {props.healthScore}
                    </div>
            </div>
      </div></Link>
      <Link to={`/recipes/${props.id}`}>
          <button className={styles.button}> 
          Let's Cook!
          </button>
        </Link>
    </div>
  );
}
