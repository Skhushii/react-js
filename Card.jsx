import React from 'react'


const Card = ({ title, price }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Price: ${price}</p>
        <a href="#" className="btn btn-primary">Show more</a>
      </div>
    </div>
  )
}

export default Card

