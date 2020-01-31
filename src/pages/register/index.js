import React from "react";
import { Button } from "../../components/button";

const Register = () => {
  return (
    <div className="register">
      <h1>Nova receita</h1>
      <div className="register--container">
        <form className="register--container--form" onSubmit={console.log}>
          <div className="register--container--side">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input id="title" onChange={console.log} />
            </div>
            <div className="form-group">
              <label htmlFor="image">Imagem (URL)</label>
              <input id="image" onChange={console.log} />
            </div>
            <div className="form-group">
              <label htmlFor="ingredients">Ingredientes</label>
              <textarea
                id="ingredients"
                onChange={console.log}
              />
            </div>
          </div>
          <div className="register--container--side">
            <div className="form-group">
              <label htmlFor="description">Descrição</label>
              <textarea
                id="description"
                onChange={console.log}
              />
            </div>

            <div className="form-group">
              <label htmlFor="preparation">Método de preparo</label>
              <textarea
                id="preparation"
                onChange={console.log}
              />
            </div>
          </div>
          <Button htmlType="submit">Create</Button>
        </form>
      </div>
    </div>
  );
};

export { Register };
