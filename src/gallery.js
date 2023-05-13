import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import pic1 from "./gallerypic/HFMUD5THAUG218361_baad0363-5c40-44a7-8f88-b1ad1e7805d5_1200x.webp"
import pic2 from "./gallerypic/Organic-food-fraud-1280x720.jpg"
import pic3 from "./gallerypic/g-1.jpg"
import pic4 from "./gallerypic/g-2.jpg"
import pic5 from "./gallerypic/g-3.jpg"
import pic6 from "./gallerypic/g-4.jpg"
import pic7 from "./gallerypic/g-5.jpg"
import pic8 from "./gallerypic/g-6.jpg"
import pic9 from "./gallerypic/g-7.jpg"
import pic10 from "./gallerypic/g-8.jpg"
import pic11 from "./gallerypic/image.webp"
import "./App.css"

class Gallery extends React.Component{
    render(){
        return(
            <>
            <Container >

<h1 style={{ textAlign: "center", fontSize: "70px" }}>Our Gallery</h1>
<p  style={{ textAlign: "center", width:"50%",margin:"auto" }}>The Passage Experienced A Surge In Popularity During The 1960s When Again During The 90s As Desktop Publishers</p>
<CardGroup  className="m-auto">
   
    <Col sm={12} md={4} lg={3} className="m-4">
        
        <Card.Img variant="top" src={pic1}  style={{height:"100%"}} className="glhvr m-auto"data-aos="zoom-in-up"/>
    </Col>
    <Col sm={12} md={4} lg={3} className="m-4">
        <Card.Img variant="top" src={pic2} style={{height:"100%"}} className="glhvr" data-aos="zoom-in-up"/>
       </Col>
        <Col sm={12} md={4} lg={3} className="m-4">
        <Card.Img variant="top" src={pic3}  style={{height:"100%"}} className="glhvr" data-aos="zoom-in-up"/>
</Col>


</CardGroup>
</Container>


<Container >


<CardGroup >
   
    <Col sm={12} md={4} lg={3} className="m-4">
        
        <Card.Img variant="top" src={pic4}  style={{height:"100%"}} className="glhvr"data-aos="zoom-in-up"/>
    </Col>
    <Col sm={12} md={4} lg={3} className="m-4">
        <Card.Img variant="top" src={pic5} style={{height:"100%"}} className="glhvr" data-aos="zoom-in-up"/>
       </Col>
        <Col sm={12} md={4} lg={3} className="m-4">
        <Card.Img variant="top" src={pic6}  style={{height:"100%"}} className="glhvr" data-aos="zoom-in-up"/>
</Col>


</CardGroup>
</Container>


<Container >



<CardGroup >
   
    <Col sm={12} md={4} lg={3} className="m-4">
        
        <Card.Img variant="top" src={pic7}  style={{height:"100%"}} className="glhvr" data-aos="zoom-in-up"/>
    </Col>
    <Col sm={12} md={4} lg={3} className="m-4">
        <Card.Img variant="top" src={pic8} style={{height:"100%"}} className="glhvr" data-aos="zoom-in-up"/>
       </Col>
        <Col sm={12} md={4} lg={3} className="m-4">
        <Card.Img variant="top" src={pic9}  style={{height:"100%"}} className="glhvr" data-aos="zoom-in-up"/>
</Col>


</CardGroup>
</Container>


<Container>
<CardGroup >
   
    <Col sm={12} md={4} lg={3} className="m-4">
        
        <Card.Img variant="top" src={pic10}  style={{height:"100%"}} className="glhvr" data-aos="zoom-in-up"/>
    </Col>
    <Col sm={12} md={4} lg={3} className="m-4">
        <Card.Img variant="top" src={pic11} style={{height:"100%"}} className="glhvr" data-aos="zoom-in-up"/>
       </Col>
        <Col sm={12} md={4} lg={3} className="m-4">
        <Card.Img variant="top" src={pic9}  style={{height:"100%"}} className="glhvr" data-aos="zoom-in-up"/>
</Col>


</CardGroup>
</Container>


            </>
        )
    }
}

export default Gallery;