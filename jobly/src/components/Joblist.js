import React from 'react'
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {v4 as uuid} from "uuid"
import { useFetchJobs } from '../hooks/useFetch'
import Job from './Job'
import LoadingSpinner from './Spinner'
 
const JobList = ({items}) => {
  const [jobs] = useFetchJobs()
 
  return jobs?
    <ListGroup m={8} l={6}> 
        {jobs.map(job => (
        <ListGroup.Item key={uuid()} className=""> 
          <Job {...job}/>
        </ ListGroup.Item>
          ))}
    </ListGroup>
    : 
    <LoadingSpinner />
}
 
export default JobList