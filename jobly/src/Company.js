import React from 'react'
import {v4 as uuid} from "uuid"
import {
  Badge, 
  Card, 
  Col, 
  Image,
  ListGroup,
  ListGroupItem,
  Row,
  Spinner
} from 'react-bootstrap' 
import { useParams } from 'react-router'
import { useFetchCompany } from "./hooks/useFetch"
import Job from './Job'

const Company = () => {

    const { handle } = useParams()

    const [ company ] = useFetchCompany(handle)

  return (
    <>
    {company && handle?
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
              <Job {...items}/>
            </ListGroupItem>
          ))}
      </ListGroup>
      </Card.Body>
    </Card>)
    :
    (<Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>)
   }
  </>
  )
}


export default Company