import styles from "./paginate.module.css"


export default function Paginado({total,paged,pagedN,pagedP}){
    const arrayPages = [];
    for (let i = 0; i < total; i++) {
      arrayPages.push(i + 1);
    }

    return (
        <>
<div className={styles.pagination}>
<button className={styles.pages1} onClick={()=>{pagedP()}}>{"<"} Prev</button>

{arrayPages.length > 0 ? arrayPages.map((p) => <button className={styles.pages}  key="numberButton" onClick={()=>{paged(p)}}>{p}</button>) : ""}

<button className={styles.pages1} onClick={()=>{pagedN()}}>Next {">"} </button>
</div>
        
        </>
    )
}