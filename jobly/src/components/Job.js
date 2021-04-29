import React, { useContext } from 'react'
import {v4 as uuid} from "uuid"
import { Button, Card, Col, Row,} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'
import AlertContext from '../context/AlertContext'

 
const Job = ({id, title, companyHandle, companyName, salary, equity, withApplyButton=false }) => {
  
  const {apply, profile} = useContext(UserContext)
  const {alerts,setAlerts} = useContext(AlertContext)


  const handleApplication = async()=>{
    try {
      console.log(id)
      await apply(id)

      setAlerts([...alerts,{variant:"success", msg:companyName?`Applied to ${title} at ${companyName}.`:`Applied to ${title} Job.`}])
    } catch (error) {
      
      setAlerts([error.map(e=>{
        if (e.includes("No job")) e="There was a problem with applying to that job. Please try again later."
        return {variant:"danger",msg:e}
      }),...alerts ])
    }
  }

  return (
    <Card >
      <Card.Body> 
        {console.log(withApplyButton)}
        <Card.Title className="text-left">
          {title}
        </Card.Title>
        <Card.Subtitle className="text-left">
          {companyHandle? <Link to={`/companies/${companyHandle}`}>{companyName}</Link> : companyName}
        </Card.Subtitle>
          <Row className="p-2 row card-text">
          <Col>
            <Row>Salary: {salary? salary:"No Salary"}</Row>
            <Row>Equity: {equity ? equity: "0"}</Row>
          </Col>
          <Col md={5} >
            {withApplyButton &&
            (profile.applications.includes(id)?
            <Button 
            size="lg" 
            className="p-2 mt-2" 
            variant="secondary"
            block
            disabled
          >
            Applied!
          </Button>
            :
            <Button 
              size="lg" 
              className="p-2 mt-2" 
              block
              onClick={handleApplication}
            >
              Apply
            </Button>)
            }
          </Col>
          </Row>
      </Card.Body>
    </Card> )      
}
 
export default Job