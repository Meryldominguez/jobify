import React, { useContext } from 'react'
import { ListGroup} from 'react-bootstrap'
import {v4 as uuid} from "uuid"
import UserContext from '../context/UserContext'
import { useFetchJobs } from '../hooks/useFetch'
import Job from './Job'
import LoadingSpinner from './Spinner'
 
const JobList = (applicationPossible = false) => {
  const {profile} = useContext(UserContext)
  const [jobs, resetJobs] = useFetchJobs()
 
  return jobs && profile?
    <ListGroup m={8} l={6}> 
        {jobs.map(job => (
        <ListGroup.Item key={uuid()} className=""> 
          <Job 
            withApplyButton={applicationPossible}
            reload={resetJobs} 
            {...job}
          />
        </ ListGroup.Item>
          ))}
    </ListGroup>
    : 
    <LoadingSpinner />
}
 
export default JobList