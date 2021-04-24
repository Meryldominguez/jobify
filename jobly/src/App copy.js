import React from "react"
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"

import './App.css';

function Routes() {
  return (
    <BrowserRouter> 
      <Switch>
        <Route exact path="/">

        </Route>
        <Route exact path="/companies">

        </Route>
        <Route exact path="/companies:compId">

        </Route>
        <Route exact path="/jobs">

        </Route>
        <Route exact path="/login">

        </Route>
        <Route exact path="/signup">

        </Route>
        <Route exact path="/profile">

        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
