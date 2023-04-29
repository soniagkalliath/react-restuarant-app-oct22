import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Row,Col,Image,ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RestReviews from './RestReviews';
import {useDispatch ,useSelector } from 'react-redux';
import { RestuarantsList } from '../actions/homeAction';


function RestuarantView() {
    const params = useParams()
    console.log(params.id);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

const dispatch =useDispatch()
useEffect(()=>{
  dispatch(RestuarantsList())
},[])

    const {restuarants} = useSelector(state=>state.restuarantReducer)
 console.log(restuarants);

    const restuarant = restuarants.find(item=>item.id == params.id)
    console.log(restuarant);

  return (
   <>
    { 
    restuarant ? (
    <Row className='p-5'>
        <Col md={3}>
        <Image className='rounded border p-1' src={restuarant.photograph} alt={restuarant.name} fluid></Image>
        </Col>
        <Col md={8}>
        <ListGroup>
      <ListGroup.Item>
        <h2>{restuarant.name}</h2> 
        <p> {restuarant.neighborhood} </p>
      </ListGroup.Item>
      <ListGroup.Item><p>Cuisine : {restuarant.cuisine_type} </p></ListGroup.Item>
      <ListGroup.Item><p className='my-2'>Address : {restuarant.address} </p></ListGroup.Item>
      <ListGroup.Item>

      <Button className='ps-0 my-3' variant='dark'  onClick={handleShow}>
        Click here See Restuarant Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>Monday: {restuarant.operating_hours.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday: {restuarant.operating_hours.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday: {restuarant.operating_hours.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday: {restuarant.operating_hours.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday: {restuarant.operating_hours.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday: {restuarant.operating_hours.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday: {restuarant.operating_hours.Sunday}</ListGroup.Item>
    </ListGroup>

        </Modal.Body>
      </Modal>
      </ListGroup.Item>
      <ListGroup.Item ><p className='my-2'> 
      <RestReviews reviews={restuarant.reviews} />
      </p></ListGroup.Item>

    </ListGroup>
        </Col>
      </Row>
      ) : 'Nothing to display'
      }
   </>
  )
}

export default RestuarantView