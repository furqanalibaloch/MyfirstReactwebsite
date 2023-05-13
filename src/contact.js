import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Contact extends React.Component{
    render(){
        return(
            <>
            <h1 style={{textAlign:"center"}}>Contact us</h1>


<Container>

<Row>
    <Col  sm={12} md={6} lg={6} >
    <Form>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name " />
        <Form.Text >
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Col>



        <Col  sm={12} md={6} lg={6} >
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57662.47020136438!2d68.28563158089338!3d25.408010890251266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c7a040a2965e3%3A0xa8277e9c26fa1449!2sHyderabad%20City%2C%20Hyderabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1683981459670!5m2!1sen!2s" style={{ width:"400px", height:"350px"}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Col>
</Row>         
</Container>


            </>
        )
    }
}

export default Contact;