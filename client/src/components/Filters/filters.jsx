import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipesSort, getRecipesFilter } from "../../actions/actions";

export default function Filters() {
  const [sort, setSort] = useState("default");
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes); // aquí obtenemos el array de recetas del estado global

  const sortByName = () => {
    return recipes.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  };

  const sortHandler = (e) => {
    if (e.target.value === "default") {
      setSort("Asc");
      dispatch(getRecipesSort(sort));
    }
    if (e.target.value === "Asc") {
      setSort("Des");
      dispatch(getRecipesSort(sort));
    } else {
      setSort("default");
    }
  };

  const filterHandler = (e) => {
    setFilter(e.target.value);
    dispatch(getRecipesFilter(filter));
  };

  return (
    <div>
      <button value={sort} onClick={(e) => sortHandler(e)}>
        Sort
      </button>
      <input type="text" onChange={(e) => filterHandler(e)} />
    </div>
  );
}
