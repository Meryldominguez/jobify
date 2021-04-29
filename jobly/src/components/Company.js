import React, {useContext} from 'react'
import {v4 as uuid} from "uuid"
import {
  Badge, 
  Card, 
  Col, 
  Image,
  ListGroup,
  ListGroupItem,
  Row,
  
} from 'react-bootstrap' 
import { useParams } from 'react-router'
import { useFetchCompany } from "../hooks/useFetch"
import Job from './Job'
import LoadingSpinner from './Spinner'

import UserContext from "../context/UserContext"

const Company = () => {

    const { handle } = useParams()

    const [ company ] = useFetchCompany(handle)
    const { profile} = useContext(UserContext)


  return (
    <>
    {company && handle && profile?
    (<Card >

      <Card.Body> 
        <Row>
          <Col xs={10}>
          <Card.Title  className="text-left">
            {company.name}<Badge as={Image} src={company.logoUrl}/>
          </Card.Title>
          <Card.Text  className="text-left">
            {company.description}
          </Card.Text>
          </Col>
          <Col>
            <Image src={company.logoUrl} />
          </Col>
        </Row>
        <ListGroup>
          {company.jobs.map(({companyHandle, ...items})=>(
            <ListGroupItem key={uuid()}>
              {console.log(items)}
              <Job withApplyButton {...items}/>
            </ListGroupItem>
          ))}
      </ListGroup>
      </Card.Body>
    </Card>)
    :
    <LoadingSpinner />
   }
  </>
  )
}


export default Company