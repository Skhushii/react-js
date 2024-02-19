import React from "react"
import Navbar from "./Component/Navbar";
import Banner from "./Component/Banner";
import Product from "./Component/Product";
import Card from "./Component/Card";
import Footer from "./Component/Footer";
import Features from "./Component/Features";
function App() {
 const products=[
    { id: 1, name: 'Product 1', price: 19.99, },
    { id: 2, name: 'Product 2', price: 29.99, },
    { id: 3, name: 'Product 3', price: 39.99,},
    
 ]

  return (
    <>
      <Navbar />
      <Banner />

      {/* <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <Card 
            title="Card Title 1"
            image="path/to/image1.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
        <div className="col-lg-4">
          <Card 
            title="Card Title 2"
            image="path/to/image2.jpg"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
        <div className="col-lg-4">
          <Card 
            title="Card Title 3"
            image="path/to/image3.jpg"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
        </div>
      </div>
    </div> */}

      <div>
        <Product products={products} />
      </div>
    <Features/>
      <Footer/>


    </>
  );
}

export default App;
