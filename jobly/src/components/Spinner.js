import React from 'react'
import {Spinner} from 'react-bootstrap'
 
const LoadingSpinner = () => {
  return (
    <Spinner animation="border" role="status" className="my-5">
        <span className="sr-only">Loading...</span>
    </Spinner>
  )
}
 
export default LoadingSpinner