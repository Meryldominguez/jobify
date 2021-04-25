import React from 'react'
import { Button, Card, Col, ListGroup, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {v4 as uuid} from "uuid"
import { useFetchJobs } from './hooks/useFetch'
import LoadingSpinner from './Spinner'
 
const JobList = ({items}) => {
  const [jobs] = useFetchJobs()
 
  return jobs?
    <ListGroup m={8} l={6}> 
        {jobs.map(job => (
        <ListGroup.Item key={uuid()} className=""> 
          <Card >
            <Card.Body> 
              <Card.Title className="text-left">
                {job.title}
              </Card.Title>
              <Card.Subtitle className="text-left">
                <Link to={`/companies/${job.companyHandle}`}>{job.companyName}</Link>
              </Card.Subtitle>
              <Row className="p-2 row card-text">
                <Col>
                  <Row>Salary: {job.salary? job.salary:"No Salary"}</Row>
                  <Row>Equity: {job.equity ? job.equity: "0"}</Row>
                </Col>
                <Col md={5} >
                  <Button size="lg" className="p-2 mt-2" block>Apply</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </ ListGroup.Item>
          ))}
    </ListGroup>
    : 
    <LoadingSpinner />
}
 
export default JobList