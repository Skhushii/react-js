import React from 'react'

const Features = () => {
  return (
    <section className="features">
    <div className="container">
      <h2 className="text-center mt-4 mb-5">Key Features</h2>
      <div className="row mt-4 mb-4">
        <div className="col-md-4">
          <div className="feature">
            <i className="fas fa-shopping-cart fa-3x mb-3"></i>
            <h3>Online Shopping</h3>
            <p>Shop conveniently from the comfort of your home.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature">
            <i className="fas fa-truck fa-3x mb-3"></i>
            <h3>Fast Delivery</h3>
            <p>Get your orders delivered quickly to your doorstep.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature">
            <i className="fas fa-credit-card fa-3x mb-3"></i>
            <h3>Secure Payment</h3>
            <p>Enjoy secure and hassle-free online payments.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Features
