import React from 'react'
import {productList as foods} from './Productlist'
import ProductCard from './ProductCard'

function Product() {
  return (
    <div className='pa3 green-custom'>
        <div className='flex animate__animated animate__fadeInDown'>
          <h1 className='f1 center'>Our Products</h1>
        </div>
      <div className='flex flex-row-l flex-column animate__animated animate__fadeInUpBig'>
        {
          // here we map each object in the array of product list and send them as props to the card component
          foods.map((user, i) => {
            return(
              <ProductCard 
                name={foods[i].name}
                description={foods[i].description}
                image={foods[i].image}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Product