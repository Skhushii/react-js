import React from 'react'
import Card from './Card'

const Product = ({ products }) => {
  return (
    <section className="product-section">
      <div className="container">
        <h2 className="text-center mt-4 mb-4">Our Products</h2>
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-lg-4 mb-4">
              <Card 
                title={product.name}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Product
