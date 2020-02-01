import React, {useState, useEffect} from "react";

import {useParams} from "react-router-dom";

import { api } from "../services/api";

const Recipe = () => {

  const {id} = useParams();  
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    async function fetchRecipe(){
      let recipe = await api.get('/food/'+id);
      setRecipe(recipe.data)      
    }
    fetchRecipe();    
  }, [id]);

  const { title, imageUrl, description, ingredients, preparation } = recipe
  const loading = false;

  if (loading) {
    return <h1>Carregando</h1>;
  }

  return (
    <div className="recipe">
      <div className="recipe--container">
        <figure>
          <div
            className="recipe--container-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </figure>
        <div className="recipe--info">
          <h1> {title}</h1>
          <div className="recipe--info--description">
            <p>{description}</p>
            <span>{ingredients}</span>
          </div>
        </div>
      </div>
      <div className="recipe--preparation">
        <h2>Preparação</h2>
        <p>{preparation}</p>
      </div>
    </div>
  );
};

export { Recipe };
