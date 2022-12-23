import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes} from "../../actions/actions";
import Filters from "../Filters/filters";
import Loading from "../Loading/Loading";
import NotFound from "../NotFound/NotFound";
import Paginado from "../Paginate/Paginate";
import RecipeCard from "../RecipeCard/RecipeCard";
import styles from "./body.module.css"

export default function Body(props) {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  const [page, setPage] = useState(1);
  const recipePage = 9;
  const total= Math.ceil(recipes.length/recipePage)
  const quantity = page * recipePage;
  const firstPage = quantity - recipePage;
  const showRecipes = recipes?.slice(firstPage, quantity);

  const paged = function (pageN) {setPage(pageN);};
  const pagedP = function () {page === 1 ? setPage(total) : setPage(page - 1); };
  const pagedN = function () {page === total ? setPage(1) : setPage(page + 1);};

  useEffect(()=>{
    dispatch(getAllRecipes())
  },[dispatch])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [paged]);


  return showRecipes==="notFound"? <NotFound></NotFound> :
  showRecipes.length>0? (
    <div className={styles.div}> 

    <Filters></Filters>
    <Paginado total={total} paged={paged} pagedN={pagedN} pagedP={pagedP}></Paginado>
<div className={styles.container}>
        { showRecipes.map((recipe) => (
          <RecipeCard
            title={recipe.title}
            image={recipe.image}
            healthScore={recipe.healthScore}
            servings={recipe.servings}
            Diet_type={recipe.diets ? recipe.diets : recipe.Diet_types}
            id={recipe.id}
            key={recipe.id}
          />
        ))
        }
</div>
<div className={styles.divaux}>
<Paginado total={total} paged={paged} pagedN={pagedN} pagedP={pagedP}></Paginado></div>
    </div>
  ) : (
    <Loading/>
  );
}
