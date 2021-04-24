import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Company from './Company'
import { useFetchCompanies } from "./hooks/useFetch"

const Companies = () => {
  const [companies] = useFetchCompanies()
  return (
    <ListGroup>
    {companies.map(c=>(
      <ListGroup.Item as={Link} to={`/compnies/${c.handle}`}>
        <Company props={c} />
      </ListGroup.Item>
    ))}
    </ListGroup>
    
  )
}

export default Companies