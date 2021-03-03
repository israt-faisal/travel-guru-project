import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import star from '../../Icon/star_1_.png';

const HotelDetail = () => {

    return (
        <div>
           <Card style={{width:"700px", height:"250px"}}>
      <Row >
        <Col md={6}>
          <img src="https://i.ibb.co/JvkxJV8/Rectangle-26.png" className="w-100 img-fluid" alt="" />
        </Col>
        <Col md={6} >
          <h4>Light bright airy stylish apt and safe
peaceful stay</h4> <br />
          <div className="d-flex justify-content-between">
            <span>4 guests</span>
            <span>2 Bedrooms</span>
            <span>2 Beds</span>
            <span>2 Baths</span>
          </div>
          <p>Wif Air conditioning Kitchen</p>
          <p>Cancellation fexibility availiable</p>
          <div className="d-flex justify-content-between align-items-center ">
            <span><img src={star} alt="" /> 4.9 (20)</span>
            <span>${12}/per-night</span>
            <span>$167 total</span>
          </div>
        </Col>
      </Row>
    </Card>
            
        </div>
    );
};

export default HotelDetail;