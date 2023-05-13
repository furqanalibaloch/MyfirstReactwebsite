import React from "react";
import MyNavbar from "./components/navbar"
import Slider from "./components/carousels"
import "./App.css"
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Mainpart from "./mainpart"
import About from "./About";
import Product from "./product";
import Contact from "./contact";
import Gallery from "./gallery";


class App extends React.Component {
  render() {
    return (
      <>
        <MyNavbar />
        <Slider />
        <Routes>
          <Route path="/" element={<Mainpart />} />
          <Route path="/About" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
        <Footer />

      </>

    )
  }
}

export default App;