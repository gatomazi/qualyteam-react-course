import React, { useState, useEffect } from "react";
import { Button } from "../../components/button";
import { api } from "../../services/api";

const Register = () => {

  const [inputs, setInputs] = useState({});

  const [submit, setSubmit] = useState(false);

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    setSubmit(!submit)
  }

  
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.id]: event.target.value}));
  }


  useEffect(() => {
    async function inputData(){
      if (inputs !== null) {
        await api.post('/food/', inputs );
        setInputs({});
      }
    }

    if (submit) {
      inputData();
    }
  }, [submit]);

  return (
    <div className="register">
      <h1>Nova receita</h1>
      <div className="register--container">
        <form className="register--container--form" onSubmit={handleSubmit}>
          <div className="register--container--side">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input id="title" onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="image">Imagem (URL)</label>
              <input id="image" onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="ingredients">Ingredientes</label>
              <textarea
                id="ingredients"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="register--container--side">
            <div className="form-group">
              <label htmlFor="description">Descrição</label>
              <textarea
                id="description"
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="preparation">Método de preparo</label>
              <textarea
                id="preparation"
                onChange={handleInputChange}
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
