import React, { useContext } from 'react'
import {Alert} from "react-bootstrap"
 
const AlertContainer = ({alerts}) => {
  return (
    <div>
    {alerts.map((a)=>
        <Alert 
            key={a.key}
            variant="danger"
        >{a.msg}</Alert>)}
    </div>
    
  )
}
 
export default AlertContainer