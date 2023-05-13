import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import prdt1 from "./products/fresh-fruits1.jpg"
import prdt2 from "./products/fresh-fruits2.jpg"

class Product extends React.Component{
    render(){
        return(
            <>
                 <Container>

<h1 style={{ textAlign: "center" , fontSize:"40px" }}>About Us</h1>
<p style={{ textAlign: "center",width:"50%", margin:"auto" }}>Thi is one of the unique products which is an excellent thirst beverage and provides relief in the strong summer season.</p>
    <Row>

    <Col sm={12} md={6} lg={6}>
            <div className="image my-5">
                <img src={prdt1} alt="image" width={400} height={300} style={{marginTop:"90px"}}/>
            </div>
        </Col>

        <Col sm={12} md={6} lg={6}>
            <div className="container my-5">
                <div className="heading-secting">
                    
                </div>
                <div className="explaination">
                   <h1 style={{fontSize:"70px"}}>Pure Lemon Juice</h1>
                   <p>
Ready to use Pure, Natural, and Fresh Lemon Juice concentrate in lemon shape bottle of 14 Lemons & 30 Lemons, No need to Buy costly Lemons Anymore, Then cut and Squeeze & store them, Just Bring!

Easy to use and easy to carry, just squeeze it to use it. 99.99% Lemon juice concentrate, No added sugar or anything.

<h1>Uses of Nimboo Ras</h1>
Use in all your cooking, use in all types of drinks, with Green Tea, with Warm Water.

<h1>Benifites Of Nimboo Ras</h1>
Reduce stress, Boost the Immune system, help prevent kidney stones, Fight cancer Cells, Natural antiseptic, Clean & clear skin, white Teeth, Stop Dandruff, Aid in digestion, promote weight loss and many more...</p>
                </div>
                <div className="btn-section">
                    <Button variant="success">Buy Now</Button>
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
                <div className="explaination">
                   <h1 style={{fontSize:"50px"}}>Lemon Juice Concentrate</h1>
                   <p>
Ready to use Pure, Natural, and Fresh Lemon Juice concentrate in lemon shape bottle of 14 Lemons & 30 Lemons, No need to Buy costly Lemons Anymore, Then cut and Squeeze & store them, Just Bring!

Easy to use and easy to carry, just squeeze it to use it. 99.99% Lemon juice concentrate, No added sugar or anything.

<h1>Uses of Nimboo Ras</h1>
Use in all your cooking, use in all types of drinks, with Green Tea, with Warm Water.

<h1>Benifites Of Nimboo Ras</h1>
Reduce stress, Boost the Immune system, help prevent kidney stones, Fight cancer Cells, Natural antiseptic, Clean & clear skin, white Teeth, Stop Dandruff, Aid in digestion, promote weight loss and many more..</p>
                </div>
                <div className="btn-section">
                    <Button variant="success">Buy Now</Button>
                </div>
            </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
            <div className="image my-5">
                <img src={prdt2} alt="image" width={400} height={300} style={{marginTop:"90px"}}/>
            </div>
        </Col>
    </Row>
</Container>
            </>
        )
    }
}

export default Product;