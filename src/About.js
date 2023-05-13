import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import abtimg from "./About us/abtimg.jpg"
import abtbanner from "./About us/abtbanner.jpg"

class About extends React.Component {
    render() {
        return (
            <>

                <Container>

                <h1 style={{ textAlign: "center" , fontSize:"40px" }}>About Us</h1>
                <p style={{ textAlign: "center",width:"50%", margin:"auto" }}>Thi is one of the unique products which is an excellent thirst beverage and provides relief in the strong summer season.</p>
                    <Row>

                    <Col sm={12} md={6} lg={6}>
                            <div className="image my-5">
                                <img src={abtimg} alt="image" width={400} height={300} data-aos="fade-right" />
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={6}>
                            <div className="container my-5">
                                <div className="heading-secting">
                                    
                                </div>
                                <div className="explaination" data-aos="fade-down">
                                    <p>In 2020, I was nominated for the top Sales Person in Europe award, and made it to the final of the Best Women in Sales Europe (check here). In addition to this, I was nominated and won Best Sales Person in EMEA for the American Forbes 100 company I work for. One quick way to make your About Us page easy to read is by including plenty of headings and subheadings. People quickly scanning the page will still be able to get the gist, and people actually reading the page will appreciate that the content is broken up into organized chunks.</p>
                                </div>
                                <div className="btn-section">
                                    <Button variant="primary">Read More</Button>
                                </div>
                            </div>
                        </Col>
                       
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <div className="container my-5">
                                <div className="heading-secting">
                                    
                                </div>
                                <div className="explaination" data-aos="fade-right">
                                    <p>In 2020, I was nominated for the top Sales Person in Europe award, and made it to the final of the Best Women in Sales Europe (check here). In addition to this, I was nominated and won Best Sales Person in EMEA for the American Forbes 100 company I work for. One quick way to make your About Us page easy to read is by including plenty of headings and subheadings. People quickly scanning the page will still be able to get the gist, and people actually reading the page will appreciate that the content is broken up into organized chunks.</p>
                                </div>
                                <div className="btn-section">
                                    <Button variant="primary">Read More</Button>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <div className="image my-5">
                                <img src={abtbanner} alt="image" width={400} height={300} data-aos="fade-left"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default About;