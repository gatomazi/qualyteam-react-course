import React from "react";

const Recipe = ({ title, imageUrl, description, ingredients, preparation } ) => {
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
