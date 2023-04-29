import React , {useState,useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';
import RestuarantCard from './RestuarantCard';
import { RestuarantsList } from '../actions/homeAction';
import { useDispatch,useSelector } from 'react-redux';

function Home() {

    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(RestuarantsList())
    },[])
    

    const {restuarants } = useSelector(state=>state.restuarantReducer)
    console.log(restuarants);
    
  return (
    <Row>
      {
        restuarants.map(item=>(
         <Col className='px-5 py-3' sm={6} md={4} > 
         <RestuarantCard restuarant={item} />
         </Col>
        ))
      }
    </Row>
  )
}

export default Home