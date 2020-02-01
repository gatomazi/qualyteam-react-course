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
import { SearchProvider } from "./Context";

function App() {
  
  return (
    <div className="app">
      <SearchProvider>

        {true ? (
          <Fragment>
            <Navbar />
            <main className="content--container">
              <Switch>
                <Route exact path="/">
                  <List />
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
      </SearchProvider>
    </div>
  );
}

export default App;
