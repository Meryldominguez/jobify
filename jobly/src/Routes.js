import React, { useContext } from "react"
import {
  Switch,
  Route,
  Redirect,
  Link,
  // useHistory
} from "react-router-dom"
import {
  Jumbotron,
  // Pagination
} from "react-bootstrap"

import Companies from "./components/Companies";
import Company from "./components/Company";
import JobList from "./components/Joblist";

import SignupForm from "./forms/SignupForm";
import LoginForm from "./forms/LoginForm";
import ProfileForm from "./forms/ProfileForm";

import UserContext from "./context/UserContext";

function Routes({login, signup}) {
  // const history = useHistory()
  const {user, isLoading} = useContext(UserContext)
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
          {!user && isLoading?
          <>
          <Route exact path="/login">
           <LoginForm login={(data)=>login(data)}/>
          </Route>
          <Route exact path="/signup">
            <SignupForm signup={(data)=>signup(data)}/>
          </Route>
          </>
          :
          <>
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
            <ProfileForm />
          </Route>
          </>
          }
          
          
          <Redirect to="/" />
        </Switch>  
      </div>
   
  );
}

export default Routes;
