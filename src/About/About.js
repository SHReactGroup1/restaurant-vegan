import React from 'react';
import youngWoman1 from '../assests/img/youngWoman1.jpg';
import youngWoman2 from '../assests/img/youngWoman2.jpg';
import youngWoman3 from '../assests/img/youngWoman3.jpg';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


function About() {

  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true
  });

  return (
  <div className="container mx-auto mt-2">
    <h1 className='text-5xl md:text-7xl text-center font-light text-about'>
      About Us
    </h1>
    <p className='w-9/12 text-lg text-center mx-auto text-aboutText'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
    </p>
    <div className="container mx-auto mt-24">
      <div className="container mx-auto flex flex-col md:flex-row">

        <div className="container">

          <div className='w-full flex justify-center md:mt-4'>
            <img src={youngWoman1} alt="young Woman1" className=' w-2/5' style={{borderTopRightRadius: '50%', borderBottomLeftRadius: '50%'}} />
            <img src={youngWoman2} alt="young Woman2" className='w-2/5 ml-4 h-3/5 mt-20' style={{borderTopLeftRadius: '50%', borderBottomRightRadius: '50%'}} />
          </div>
          <div className='w-full flex justify-center mt-4'>
            <img src={youngWoman3} alt="young Woman3" className='h-1/2 w-2/5' style={{ borderTopLeftRadius: '50%', borderBottomRightRadius: '50%' }} />
            <i className="fa-solid fa-clover h-fit text-7xl text-about md:mr-36 ml-4"></i>
          </div>

        </div>

        <div className="container">
          <h2 className='text-4xl md:text-6xl text-about text-center pt-8 md:pt-0'>
            About Vegan
          </h2>
          <p className='w-3/4 text-center mx-auto text-lg mt-4 text-aboutText'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          </p>
          <div className='w-4/5 text-center mx-auto text-lg mt-8 flex flex-col md:flex-row md:justify-between' ref={ref}>
            <p className='text-about mt-4'>
              <span className='text-3xl md:text-5xl font-medium text-about '><CountUp end={inView ? 100 : 0} duration={2} /></span> <span className='text-2xl md:text-4xl font-medium'>+</span>
              <span className='block text-xl md:text-2xl'>
                Cooler Number
              </span>
            </p>
            <p className='text-lighterGreen mt-4'>
            <span className='text-3xl md:text-5xl font-medium'> <CountUp end={inView ? 85 : 0} duration={2} /> </span> <span className='text-2xl md:text-4xl font-medium'>+</span>
              <span className='block text-xl md:text-2xl'>
                Cooler Number
              </span>
            </p>
            <p className='text-about opacity-50 mt-4'>
            <span className='text-3xl md:text-5xl font-medium'><CountUp end={inView ? 95 : 0} duration={2} /></span> <span className='text-2xl md:text-4xl font-medium'>+</span>
              <span className='block text-xl md:text-2xl'>
                Cooler Number
              </span>
            </p>
          </div>

        </div>

      </div>
    </div>

  </div>
  )
}

export default About