import React from 'react'
import {Route, Redirect} from "react-router-dom"
 
const AuthRoute = ({component:Component, user, ...rest}) => {
  return (
    <Route 
        {...rest} 
        render={props => (
          this.state.authenticated ?
            Component :
            <Redirect to='/' />
        )} 
      />
  )
}
 
export default AuthRoute