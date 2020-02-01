import React, { useState, useEffect, useContext } from "react";
import { Card } from "../../components/card";
import { api } from "../../services/api";
import {SearchContext} from '../../Context';

const List = () => {


  const {search} = useContext(SearchContext)

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    async function fetchData(){
      let newRecipes = await api.get('/food', {params:{title_like:search}});
      setRecipes(newRecipes.data);
    }
    fetchData();
  }, [search]);

  return (
    <>
      {recipes.map(recipe => <Card key={recipe.id} {...recipe} />)}
    </>
  );
};

export { List };
