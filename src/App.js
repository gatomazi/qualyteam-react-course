import React, { Fragment, useState, useEffect } from "react";
import "./App.scss";
import { Navbar } from "./components/navbar";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { List } from "./pages/list";
import { Recipe } from "./components/recipe";


import {
  Route,
  Switch
} from "react-router-dom";

function App() {

  const [search, setSearch] = useState("")
  const handleSearch = (search) =>{
    setSearch(search.target.value)
  }

  return (
    <div className="app">
      {true ? (
        <Fragment>
          <Navbar handleSearch={handleSearch} />
          <main className="content--container">
            <Switch>
              <Route exact path="/">
                <List search={search} />
              </Route>
              <Route path="/recipe/:id">
                <Recipe />
              </Route>
              <Route exact path="/food/create">
                <Register />
              </Route>
            </Switch>
          </main>
        </Fragment>
      ) 
      :(<Login /> )
      }
    </div>
  );
}

export default App;
