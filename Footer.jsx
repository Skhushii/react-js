import React from 'react'

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-5">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Contact Information</h5>
          <p>123 Shopping St.<br />City, State 12345<br />Phone: 123-456-7890<br />Email: info@example.com</p>
        </div>
        <div className="col-md-4">
          <h5>Follow Us</h5>
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item"><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="text-center py-3">
      <p>&copy; {new Date().getFullYear()} Your Shopping Website. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
