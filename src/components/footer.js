import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import "./footer.css"


class Footer extends React.Component {
    render() {
        return (
            <footer className="ftbg"  >
                <Container >
                    <Row>
                        

                        <Col sm={6} md={6} lg={3}  >
                            <h3>Contact Us</h3>
                            <div className="contacts">
                                <a href="#">0303-3408286</a>
                                <p>Railway Co-Operative Housing Society Qasmabad Hyderabad </p>
                                <p>for More Information please visit our office</p>

                            </div>
                            </Col>

                        <Col sm={6} md={6} lg={3} >
                        <h5>Customer Support</h5>
                    <ul class="link-widget p-0">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Product Returns</a></li>
                        <li><a href="#">Wholesale Policy</a></li>
                    </ul>
                        </Col>

                        <Col sm={6} md={6} lg={3} >
                        <h5>Quick Links</h5>
                    <ul class="link-widget p-0">
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Term Of Use</a></li>
                    </ul>
                    </Col>
                       

                        <Col sm={6} md={6} lg={3} >

                        <h3>Response us</h3>
                            <form>
                                <input type="text" placeholder="enter your response" required />
                                <br />
                                <Button className="primary my-3">Submit</Button>
                            </form>

                            <h3>Stay Connected</h3>
                            <div className="social-icons">
                                <FaInstagram className="icon" />
                                <FaFacebook className="icon" />
                                <FaLinkedin className="icon" />
                            </div>
                            </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
} export default Footer;