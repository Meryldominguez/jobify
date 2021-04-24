import React from 'react'
import {
  Badge, 
  Card, 
  Image,
  ListGroup
} from 'react-bootstrap' 

const Company = ({
  name,
  handle,
  numEmployees,
  description,
  logoUrl,
  jobs}) => {

    
  return (
    <Card >
      <Card.Body> 
        <Card.Title>
          {name}<Badge as={Image} src={logoUrl}/>
        </Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        {jobs?
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        :""
        }
      </Card.Body>
    </Card>
  )
}
 
export default Company