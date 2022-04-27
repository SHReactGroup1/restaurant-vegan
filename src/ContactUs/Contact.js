import React from 'react';
import vegetables from '../assests/img/vegetables.png';

function Contact() {
  return (
    <div className="container mx-auto mt-10">

      <div className="container mx-auto flex flex-col md:flex-row">
        <div className='mt-6 w-full mx-auto md:w-1/2'>
          <img src={vegetables} alt="vegetableImage"
          style={{width: '100%' ,maxWidth: '100%' , height: '80%', maxHeight: '100%'}}
          />
        </div>
        <div className='w-1/2 mx-auto'>
          <h1 className='text-center text-contact text-6xl md:text-7xl'>
            Contact Us
          </h1>
          <p className='text-center w-3/4 mx-auto text-contactText'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-10">
        <h2 className='text-center text-contact text-5xl md:text-6xl'>
          We're Here to Help You
        </h2>
        <p className='pt-4 text-center w-3/4 mx-auto text-contactText'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      <div className="container mx-auto">
        <h3 className='text-center text-contact mt-20 text-5xl md:text-6xl'>
          Get in Touch
        </h3>
        <p className='pt-4 text-center w-3/5 mx-auto text-contactText'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <div className='container mx-auto mt-16 flex flex-col lg:justify-between lg:flex-row text-center'>

          <p className='mt-6'>
          <i className="fa-solid fa-earth-africa text-5xl text-contact"></i>
          <span className='block text-xl' style={{color: '#52A156' }}>
            www.vegan.com
          </span>
          </p>

          <p className='mt-6'>
          <i className="fa-solid fa-envelope-open-text text-5xl text-contact"></i>
            <span className='block text-xl' style={{color: '#52A156' }}>
            Contact@vegan.com
            </span>
          </p>

          <p className='mt-6'>
          <i className="fa-solid fa-phone text-5xl text-contact"></i>
            <span className='block text-xl' style={{color: '#52A156' }}>
            088-777-666-85
            </span>
          </p>

          <p className='mt-6'>
          <i className="fa-solid fa-location-dot text-5xl text-contact"></i>
            <span className='block text-xl' style={{color: '#52A156' }}>
            London Eye, London, UK
            </span>
          </p>

        </div>

      </div>

      <form className='w-full mt-32'>
        <div className="mb-6">
          <input type="email" id="email" className="bg-transparent border border-lighterGreen text-contact text-md block w-full p-2.5 outline-0 placeholder-placeholderText" placeholder="Your Email" required />
        </div>
        <div className="mb-6">
          <input type="text" id="name" className="bg-transparent border border-lighterGreen text-contact text-md block w-full p-2.5 outline-0 placeholder-placeholderText" placeholder='Name' required />
        </div>
        <div className="mb-6">
          <textarea rows="7" className="bg-transparent border border-lighterGreen text-contact text-md block w-full p-2.5 outline-0 placeholder-placeholderText" placeholder='Message' required ></textarea>
        </div>
        <button type="button" className="mb-2 md:w-full md:inline-block px-6 py-2.5 bg-contact text-white font-medium text-xs leading-normal uppercase rounded-tl-md rounded-br-md shadow-md hover:bg-lighterGreen hover:shadow-lg focus:shadow-lg focus:outline-none active:shadow-lg transition duration-150 ease-in-out">Submit</button>
      </form>

    </div>
  )
}

export default Contact