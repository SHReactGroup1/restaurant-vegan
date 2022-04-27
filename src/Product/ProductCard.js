import React from 'react';
import './Product.css'

function ProductCard({name, description, image}) {
  return (
    //   This creates the card from each object in the array of the product list
    <div className='bgc-green dib pa3 ma3 grow bw2 shadow-5 green-custom2 shape'>
        <div className='img'>
        <img className='shape' src={image} alt='food'/>
        </div>
        <div className='pt3'>
            <h2 className='f2 pb3'>{name}</h2>
            <p  className='f4'>{description}</p>
        </div>
    </div>
  )
}

export default ProductCard