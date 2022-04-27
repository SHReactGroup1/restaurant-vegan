import React from 'react'
import image1 from '../assests/img/products/beetroot-vegan-burgers-rice-red.ico';
import image2 from '../assests/img/products/bowl-dish-brown-rice-avocado.ico';
import image3 from '../assests/img/products/salad-lentils-vegetables-deep-plate.ico';
import image4 from '../assests/img/products/vegetable-burgers-salad-white.ico';
import image5 from '../assests/img/products/turkish-cuisine-lettuce-salad-purple.ico';

const { useState } = React;

const Meal = ({ meal, children }) => (
  <div className="products">
    {meal.name} ${meal.price}, ({meal.amount})
    {children}
  </div>
);

function Product() {
  const [meals] = useState([
    { name: "beetroot vegan", price: 25, amount: "1ea", food: image1 },
    { name: "brown rice", price: 20, amount: "1ea", food: image2 },
    { name: "salad lentils", price: 30, amount: "1ea", food: image3 },
    { name: "burgers salad", price: 20, amount: "1ea", food: image4 },
    { name: "turkish cuisine", price: 25, amount: "1ea", food: image5 }
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = index => {
    setCart(cart.concat(meals[index]));
  };

  const calculatePrice = () => {
    return cart.reduce((price, meal) => price + meal.price, 0);
  };

  return (
    <div className ="Product">
      <h2>Our delicious vegan meals:</h2>
      <hr/ >
    <div className="productsContainer">
        {meals.map((meal, index) => (
          <Meal key={index} meal={meal}>           
            <br />
            <img src={meal.food} alt="meal" />
            <br />
            <button onClick={() => addToCart(index)}>Add to cart</button>
          </Meal>
        ))}
      </div>
     <hr />
      <h4>YOUR CART TOTAL:</h4> ${calculatePrice()}
      {cart.map((meal, index) => (
        <Meal key={index} meal={meal}>
          {" "}
        </Meal>
      ))}      

    <hr/ >
    <h3 className='text-center text-contact mt-20 text-5xl md:text-6xl'>
      Enjoy Our Food and Keep Healthy!
    </h3>

    
    <hr/ >

      <p className='pt-4 text-center w-3/5 mx-auto text-contactText'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
       </p>

      <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
      <div id="Product"></div>

       </div>
  );
}

export default Product