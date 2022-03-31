import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import StarsRating from './StarsRating'

const MovieCard = ({items}) => {
  return (
    <div>
      <Card className='card' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={items.imgsc} style={{width:'18rem' , height:'13rem'}}/>
  <Card.Body>
    <Card.Title>{items.name}</Card.Title>
    
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem> <StarsRating rate={items.rate}/>  </ListGroupItem>
    <ListGroupItem>{items.datte}</ListGroupItem>
    
  </ListGroup>
  
</Card>
    </div>
  )
}

export default MovieCard