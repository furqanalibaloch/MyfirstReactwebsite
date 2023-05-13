import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";





class Slider extends React.Component {
  render() {
    return (
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className=" w-100"
            src={pic1}
            alt="First slide"
            height={500}
          />
          <Carousel.Caption style={{ textAlign: "left", marginBottom: "120px" }}>
            <h1>100% Organic</h1>
            <h3>Fresh & Natural Farm Food</h3>
            <p>The readable content of a page when looking at its layout point of using of letters,
              as opposed.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic2}
            alt="Second slide"
            height={500}
          />

          <Carousel.Caption style={{ textAlign: "left", marginBottom: "120px" }}>
          <h1>100% Organic</h1>
            <h3>Fresh & Natural Farm Food</h3>
            <p>The readable content of a page when looking at its layout point of using of letters,
              as opposed.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic3}
            alt="Third slide"
            height={500}
          />

          <Carousel.Caption style={{ textAlign: "left", marginBottom: "120px" }}>
          <h1>100% Organic</h1>
            <h3>Fresh & Natural Farm Food</h3>
            <p>The readable content of a page when looking at its layout point of using of letters,
              as opposed.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );

  }
}

export default Slider;