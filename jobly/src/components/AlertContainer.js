import React, { useEffect } from 'react'
import {v4 as uuid} from "uuid"
import {Alert} from "react-bootstrap"
 
const AlertContainer = ({alerts, setAlerts}) => {

  useEffect(() => {
    const timer=setTimeout(() => {
      const oneLess = alerts.slice(1)
      setAlerts(oneLess)
    }, 5000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  },[alerts, setAlerts]);

  return (
    <div>
    {alerts.map((a)=>
        <Alert 
          key={uuid()}
          variant={a.variant}
        >{a.msg}</Alert>)}
    </div>
    
  )
}
 
export default AlertContainer