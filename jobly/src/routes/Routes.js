import React, { useContext, useEffect, useState } from "react"
import {
  Switch,
  Redirect
} from "react-router-dom"
import Spinner from "../components/Spinner"


import UserContext from "../context/UserContext";
import LoggedInRoutes from "./LoggedInRoutes";
import AnonRoutes from "./AnonRoutes";



function Routes() {
  // const history = useHistory()
  const {user, isLoading} = useContext(UserContext)

  const [routes, setRoutes] = useState(<Spinner />)

  useEffect(()=>{
    if (!isLoading){
      if (user){
        setRoutes(<LoggedInRoutes username={user.username}/>)
      }
      if (!user){
        setRoutes(<AnonRoutes />)
      }
    }
    
  },[user,isLoading])

  return (
      <div className="Content-Container">
        {/* <Pagination>
      <Pagination.Prev onClick={history.goBack}/>
      <Pagination.Next  onClick={history.goForward}/>
        </Pagination> */}
      <Switch>
          {routes}
      </Switch>  
      </div>)
}

export default Routes;
