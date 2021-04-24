import React from 'react'
import { ListGroup, Spinner } from 'react-bootstrap'
import {v4 as uuid} from "uuid"
 
const List = ({items}) => {

  return items?
    <ListGroup variant="flush">
        {items.map(i => <ListGroup.Item key={uuid()}> {i} </ListGroup.Item>)}
    </ListGroup>
    : 
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
}
 
export default List