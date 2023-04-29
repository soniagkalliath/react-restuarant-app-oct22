import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestuarantCard({restuarant}) {
    console.log(restuarant);
  return (
    <Link to={`/view-restuarant/${restuarant.id}`} style={{color:'white',textDecoration:'none'}}>
        <Card  >
          <Card.Img style={{height:'350px',borderRadius:'30px'}} className='p-2 ' variant="top" src={restuarant.photograph} />
          <Card.Body >
            <Card.Title>{restuarant.name}</Card.Title>
            <Card.Text>
              <p>Cuisine: {restuarant.cuisine_type}</p>
            </Card.Text>
            <Card.Text>
              {restuarant.neighborhood}
            </Card.Text>
          </Card.Body>
        </Card>
    </Link>
  )
}

export default RestuarantCard