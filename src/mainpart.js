import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import abtbanner from "./About us/abtbanner.jpg"
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
import prodt1 from "./products/product-1.jpg"
import prodt2 from "./products/product-2.jpg"
import prodt3 from "./products/product-3.jpg"
import prodt4 from "./products/product-4.jpg"
import "./App.css"

class Mainpart extends React.Component {
    render() {
        return (
            <>


                <h1 style={{ textAlign: "center" }}>Our Best Seller Product</h1>
                <p style={{ width: "450px", marginLeft: "470px" }}>The Passage Experienced A Surge In Popularity During The 1960s When Again During The 90s As Desktop Publishers</p>
                <Container >
                    <Row>
                        <Col sm={12} md={4} lg={3} className="my-3">
                            <Card className="glhvr">
                                <Card.Img variant="top" src={prodt1} />
                                <Card.Body>
                                    <Card.Title>Musk Melon <span style={{color:"orange",marginLeft:"70px"}}><del>$70</del></span></Card.Title>
                                    
                                    <Button variant="primary">View Products</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={4} lg={3} className="my-3">
                            <Card className="glhvr">
                                <Card.Img variant="top" src={prodt2} />
                                <Card.Body>
                                    <Card.Title>Lemon <span style={{color:"orange",marginLeft:"120px"}}><del>$70</del></span></Card.Title>
                                    
                                    <Button variant="primary">View Products</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={4} lg={3} className="my-3">
                            <Card className="glhvr">
                                <Card.Img variant="top" src={prodt3} />
                                <Card.Body>
                                    <Card.Title>Apple <span style={{color:"orange",marginLeft:"120px"}}><del>$70</del></span></Card.Title>
                                   
                                    <Button variant="primary">View Products</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={4} lg={3} className="my-3">
                            <Card className="glhvr">
                                <Card.Img variant="top" src={prodt4} />
                                <Card.Body>
                                    <Card.Title>Dragon <span style={{color:"orange",marginLeft:"120px"}}><del>$70</del></span></Card.Title>
                                    
                                    
                                    <Button variant="primary" style={{display:"block"}}>View Products</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>


                <Container>
                    <h1 style={{ textAlign: "center", fontSize: "70px" }}>Our About </h1>
                    <Col sm={12} md={4} lg={3} className="mt-5">
                        <Card className="mb-5" style={{ width: '72rem' }}>
                            <Card.Img src={abtbanner} alt="Card image" />
                            <Card.ImgOverlay style={{ width: '30rem' }} variant>
                                <Card.Title> <h1> We Providing Services Since 1841 With Proud.</h1></Card.Title>
                                <p class="fw-bold">The readable content off a page when looking layout using Lorem Ipsum is
                                    that it has.</p>
                                <Card.Text>
                                    <p>It is a long established fact that a reader will be distracted the readable content off a
                                        page when looking at its layout using Lorem Ipsum is that it has. It is a long
                                        established fact that a reader will be distracted the readable content off a page when
                                        looking at its layout using Lorem Ipsum is that it has.</p>
                                    <p>It is a long established fact that a reader will be distracted the readable content off a
                                        page when looking at its layout using Lorem Ipsum is that it has....</p>
                                </Card.Text>


                                <Button variant="outline-success" to={"/About"} onClick={() => ("About")}>Read More</Button>



                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Container>

                <Container style={{marginLeft:""}}>

                    <h1 style={{ textAlign: "center", fontSize: "70px" }}>Our Gallery</h1>
                    <p  style={{ textAlign: "center", width:"50%",margin:"auto" }}>The Passage Experienced A Surge In Popularity During The 1960s When Again During The 90s As Desktop Publishers</p>
                   <CardGroup  >
                       
                        <Col sm={12} md={4} lg={3} className="m-4">
                            
                            <Card.Img variant="top" src={pic1}  style={{height:"100%"}} className="glhvr"/>
                        </Col>
                        <Col sm={12} md={4} lg={3} className="m-4">
                            <Card.Img variant="top" src={pic2} style={{height:"100%"}} className="glhvr" />
                           </Col>
                            <Col sm={12} md={4} lg={3} className="m-4">
                            <Card.Img variant="top" src={pic3}  style={{height:"100%"}} className="glhvr" />
                    </Col>

           
            </CardGroup>
                </Container>

                
                <Container style={{margin:"auto"}}>

                    
                   <CardGroup >
                       
                        <Col sm={12} md={4} lg={3} className="m-4">
                            
                            <Card.Img variant="top" src={pic4}  style={{height:"100%"}} className="glhvr"/>
                        </Col>
                        <Col sm={12} md={4} lg={3} className="m-4">
                            <Card.Img variant="top" src={pic5} style={{height:"100%"}} className="glhvr" />
                           </Col>
                            <Col sm={12} md={4} lg={3} className="m-4">
                            <Card.Img variant="top" src={pic6}  style={{height:"100%"}} className="glhvr" />
                    </Col>

           
            </CardGroup>
                </Container>

                
                <Container style={{margin:"auto"}}>

                  
                   
                   <CardGroup >
                       
                        <Col sm={12} md={4} lg={3} className="m-4">
                            
                            <Card.Img variant="top" src={pic7}  style={{height:"100%"}} className="glhvr"/>
                        </Col>
                        <Col sm={12} md={4} lg={3} className="m-4">
                            <Card.Img variant="top" src={pic8} style={{height:"100%"}} className="glhvr" />
                           </Col>
                            <Col sm={12} md={4} lg={3} className="m-4">
                            <Card.Img variant="top" src={pic9}  style={{height:"100%"}} className="glhvr" />
                    </Col>

           
            </CardGroup>
                </Container>




            </>
        )
    }
}

export default Mainpart;