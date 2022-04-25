import React from 'react'
import image1 from '../assests/img/products/beetroot-vegan-burgers-rice-red.webp';
import image2 from '../assests/img/products/bowl-dish-brown-rice-avocado.webp';
import image3 from '../assests/img/products/salad-lentils-vegetables-deep-plate.webp';
import image4 from '../assests/img/products/vegetable-burgers-salad-white.webp';
import image5 from '../assests/img/products/turkish-cuisine-lettuce-salad-purple.webp';

function Product() {
  return (
    <div>
      <h2>Our Delicious vegan meals:</h2>
    
      <br></br >
    <img src={image1} height={250} width={250} alt="beetroot vegan burgers with red rice" />
    <img src={image2} height={250} width={250} alt="bowl dish brown rice avocado"/>
    <img src={image3} height={250} width={250} alt="salad lentils vegetables deep plate"/>
    <img src={image4} height={250} width={250} alt="vegetable burgers salad white"/>
    <img src={image5} height={250} width={250} alt="turkish cuisine lettuce salad purple"/>


    </div>
  )
}

export default Product