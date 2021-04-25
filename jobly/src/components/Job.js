import React from 'react'
import { Button, Card, Col, Row,} from 'react-bootstrap'
import { Link } from 'react-router-dom'
 
const Job = ({id, apply, title, companyHandle, companyName, salary, equity}) => {
  return (
    <Card >
      <Card.Body> 
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
            <Button 
              size="lg" 
              className="p-2 mt-2" 
              block
              onClick={()=>console.log(id)}
            >
              Apply
            </Button>
          </Col>
          </Row>
      </Card.Body>
    </Card> )      
}
 
export default Job