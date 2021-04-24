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
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

function Routes({user, login, signup}) {
  const history = useHistory()

  return (
    
      <div className="Content-Container">
        <Pagination>
      <Pagination.Prev onClick={history.goBack}/>
      <Pagination.Next  onClick={history.goForward}/>
        </Pagination>
      
        {user.username && user.token?
        (<Switch>
          <Route exact path="/">
          <Jumbotron>
            <h1>Hello, {user.username}</h1>
            <p>
              Apply for jobs! Make money
            </p>
              <Link className="btn btn-primary btn-lg mx-2" to="/login"> Login </Link>
              <Link className="btn btn-primary btn-lg mx-2" to="/signup"> Signup </Link>
          </Jumbotron>
          </Route>
          <Route exact path="/login">
            <Redirect to="/profile" />
          </Route>
          <Route exact path="/signup">
            <Redirect to="/profile" />
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

          <Route exact path="/profile">

          </Route>
          <Redirect to="/" />
        </Switch>
        ):(
        <Switch>
          <Route exact path="/">
          <Jumbotron>
            <h1>Welcome!</h1>
            <p>
              Sign up or login to apply for jobs!
            </p>
              <Link className="btn btn-primary btn-lg mx-2" to="/login"> Login </Link>
              <Link className="btn btn-primary btn-lg mx-2" to="/signup"> Signup </Link>
          </Jumbotron>
          </Route>
          <Route exact path="/login">
            <LoginForm login={(u, p)=>login(u,p)}/>
          </Route>
          <Route exact path="/signup">
            <SignupForm signup={(data)=>signup(data)}/>
          </Route>
        </Switch>
        ) }
        
      
      </div>
   
  );
}

export default Routes;
