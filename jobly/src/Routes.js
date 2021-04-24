import React from "react"
import {
  Switch,
  Route,
  Redirect,
  Link,
  useHistory
} from "react-router-dom"
import {
  Jumbotron,
  Button,
  Pagination
} from "react-bootstrap"

import './App.css';
import Companies from "./Companies";
import Company from "./Company";
import JobList from "./Joblist";

function Routes() {
  const history = useHistory()

  return (
    
      <div className="Content-Container">
        <Pagination>
      <Pagination.Prev onClick={history.goBack}/>
      <Pagination.Next  onClick={history.goForward}/>
        </Pagination>
      <Switch>
        <Route exact path="/">
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              Apply for jobs! Make money
            </p>
              <Link className="btn btn-primary btn-lg mx-2" to="/login"> Login </Link>
              <Link className="btn btn-primary btn-lg mx-2" to="/signup"> Signup </Link>
          </Jumbotron>
        </Route>

        <Route exact path="/companies/:handle">
          <Company />
        </Route>

        <Route exact path="/companies">
          <Companies />
        </Route>

        <Route exact path="/jobs">
          <JobList />
        </Route>

        <Route exact path="/login">

        </Route>
        <Route exact path="/signup">

        </Route>
        <Route exact path="/profile">

        </Route>
        <Redirect to="/" />
      </Switch>
      </div>
   
  );
}

export default Routes;
