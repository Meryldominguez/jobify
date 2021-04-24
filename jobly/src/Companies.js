import React, {useState} from 'react'
import {v4 as uuid} from "uuid"
import { ListGroup, Spinner, Card, Badge, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { useFetchCompanies } from "./hooks/useFetch"

import SearchForm from "./SearchForm"

const Companies = () => {
  const [companies,loading, search] = useFetchCompanies()
  
  return (
    <>
    < SearchForm search={(q)=>search(q)} />
    {loading && 
    (<Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>)}
    {companies &&
    (<ListGroup>
      {companies.map(c=>(
        <ListGroup.Item  key={uuid()} as={Link} to={`/companies/${c.handle}`}>
          <Card >
            <Card.Body> 
              <Card.Title  className="text-left">
                {c.name}<Badge as={Image} src={c.logoUrl}/>
              </Card.Title>
              <Card.Text>
                {c.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </ListGroup.Item>
      ))}
    </ListGroup>)}
    {!loading && companies.length ===0 &&
    <h3>No companies were found for your search</h3>
    }
    </>
  )
}

export default Companies