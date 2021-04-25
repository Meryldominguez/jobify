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
import Companies from "./components/Companies";
import Company from "./components/Company";
import JobList from "./components/Joblist";
import SignupForm from "./forms/SignupForm";
import LoginForm from "./forms/LoginForm";
import ProfileForm from "./forms/ProfileForm";

function Routes({user, login, signup}) {
  const history = useHistory()

  return (
    
      <div className="Content-Container">
        {/* <Pagination>
      <Pagination.Prev onClick={history.goBack}/>
      <Pagination.Next  onClick={history.goForward}/>
        </Pagination> */}
      <Switch>
          <Route exact path="/">
          <Jumbotron>
            {user?
            (<>
            <h1>Hello, {user.username}</h1>
              <p>
                Apply for jobs! Make money
              </p>
                <Link className="btn btn-primary btn-lg mx-2" to="/companies"> Companies</Link>
                <Link className="btn btn-primary btn-lg mx-2" to="/jobs"> Jobs </Link>
            </>
            ):(
              <>
              <h1>Welcome!</h1>
            <p>
              Sign up or login to apply for jobs!
            </p>
              <Link className="btn btn-primary btn-lg mx-2" to="/login"> Login </Link>
              <Link className="btn btn-primary btn-lg mx-2" to="/signup"> Signup </Link>
              </>
            )
            }
          </Jumbotron>
          </Route>
          <Route exact path="/login">
          {!user? <LoginForm login={(data)=>login(data)}/>: <Redirect to="/" /> }
          </Route>
          <Route exact path="/signup">
          {!user? <SignupForm signup={(data)=>signup(data)}/>: <Redirect to="/" /> }
          </Route>
          <Route exact path="/companies/:handle">
            {user? <Company />: <Redirect to="/" /> }
          </Route>

          <Route exact path="/companies">
          {user? <Companies />: <Redirect to="/" /> }
          </Route>

          <Route exact path="/jobs">
            {user? <JobList />: <Redirect to="/" /> }
          </Route>

          <Route exact path="/profile">
          {user? <ProfileForm username={user.username}/>: <Redirect to="/" /> }
          </Route>
          <Redirect to="/" />
        </Switch>  
      </div>
   
  );
}

export default Routes;
