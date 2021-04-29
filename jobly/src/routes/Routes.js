import React from "react"
import {
  Switch,
  Redirect
} from "react-router-dom"


import LoggedInRoutes from "./LoggedInRoutes";
import AnonRoutes from "./AnonRoutes";



function Routes({user}) {
  
  return (
      <div className="Content-Container">
        {/* <Pagination>
      <Pagination.Prev onClick={history.goBack}/>
      <Pagination.Next  onClick={history.goForward}/>
        </Pagination> */}
          {user ?
          <LoggedInRoutes username={user.username}/>
          :
          <AnonRoutes />}
      </div>)
}
export default Routes;
