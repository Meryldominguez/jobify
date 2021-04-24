import React from 'react'
import { Button, Card, Col, Row,} from 'react-bootstrap'
import { Link } from 'react-router-dom'
 
const Job = ({id, title, companyHandle, companyName, salary, equity}) => {
  return (
    <Card >
      <Card.Body> 
        <Card.Title className="text-left">
          {title}
        </Card.Title>
        <Card.Subtitle className="text-left">
          {companyHandle? <Link to={`/companies/${companyHandle}`}>{companyName}</Link> : companyName}
        </Card.Subtitle>
        <Card.Text className="p-2">
          <Row>
          <Col>
            <Row>Salary: {salary? salary:"No Salary"}</Row>
            <Row>Equity: {equity ? equity: "0"}</Row>
          </Col>
          <Col md={5} >
            <Button size="lg" className="p-2 mt-2" block>Apply</Button>
          </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card> )      
}
 
export default Job