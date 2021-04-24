import React from "react"
import {
  Switch,
  Route
} from "react-router-dom"
import {
  Jumbotron,
  Button
} from "react-bootstrap"

import './App.css';
import Companies from "./Companies";

function Routes() {

  return (
    
      <div className="Content-Container">
      <Switch>
        <Route exact path="/">
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
        </Route>

        <Route exact path="/companies">
          <Companies />
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
      </div>
   
  );
}

export default Routes;
