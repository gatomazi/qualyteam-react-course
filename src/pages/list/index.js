import React from "react";
import { Card } from "../../components/card";

const recipes = [
  {
    id: 1,
    title: "Batata belga",
    description: "Uma boa batata",
    imageUrl:
      "https://static.baratocoletivo.com.br/2017/0622/10012991/g_allfry-c4bbebed11.jpg",
    ingredients: "Batata, óleo, sal."
  },
  {
    id: 2,
    title: "Batata belga",
    description: "Uma boa batata",
    imageUrl:
      "https://static.baratocoletivo.com.br/2017/0622/10012991/g_allfry-c4bbebed11.jpg",
    ingredients: "Batata, óleo, sal."
  },
  {
    id: 3,
    title: "Batata belga",
    description: "Uma boa batata",
    imageUrl:
      "https://static.baratocoletivo.com.br/2017/0622/10012991/g_allfry-c4bbebed11.jpg",
    ingredients: "Batata, óleo, sal."
  },
  {
    id: 4,
    title: "Batata belga",
    description: "Uma boa batata",
    imageUrl:
      "https://static.baratocoletivo.com.br/2017/0622/10012991/g_allfry-c4bbebed11.jpg",
    ingredients: "Batata, óleo, sal."
  },
  {
    id: 5,
    title: "Batata belga",
    description: "Uma boa batata",
    imageUrl:
      "https://static.baratocoletivo.com.br/2017/0622/10012991/g_allfry-c4bbebed11.jpg",
    ingredients: "Batata, óleo, sal."
  },
  {
    id: 6,
    title: "Batata belga",
    description: "Uma boa batata",
    imageUrl:
      "https://static.baratocoletivo.com.br/2017/0622/10012991/g_allfry-c4bbebed11.jpg",
    ingredients: "Batata, óleo, sal."
  }
];
const List = () => (
  <>
    {recipes.map(recipe => <Card key={recipe.id} {...recipe} />)}
  </>
);

export { List };
