import React from "react"
import {
  Switch,
  Redirect
} from "react-router-dom"


import LoggedInRoutes from "./LoggedInRoutes";
import AnonRoutes from "./AnonRoutes";



function Routes({profile}) {
  
  return (
      <div className="Content-Container">
        {/* <Pagination>
      <Pagination.Prev onClick={history.goBack}/>
      <Pagination.Next  onClick={history.goForward}/>
        </Pagination> */}
      <Switch>
          {profile?
          <LoggedInRoutes username={profile.username}/>
          :
          <AnonRoutes />}
        <Redirect to="/" />
      </Switch>  
      </div>)
}
export default Routes;
