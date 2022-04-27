import React from 'react';
import chef from '../assests/img/chef.png'
import 'animate.css'

function Home() {
  return (
    <div>
        <div className="flex-ns justify-center ">
            <div className=" w-50-ns pa3 mr3-ns ph6-ns green-custom justify-center-ns flex-ns flex-column-ns animate__animated animate__fadeInLeft">
              <h3 class="f-subheadline-ns f1 measure">Healty Food For The Good Life</h3>
                <p className="f3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, <br /> luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <div className='pv4-ns pv3 pv0-ns flex'>
                  <a class="f3 mr4-ns mr3 no-underline bw1 shrink shape ph4-ns pv3-ns pa2 mb2 dib white bg-dark-green" href="#0">Learn More</a>
                  <a class="f3 no-underline shape bw1 ba ph4-ns pv3-ns pa2 mb2 dib shrink bgc-green green-custom" href="#0">Order Now</a>
                </div>
            </div>
            <div className="pa3 w-50-ns flex justify-center animate__animated animate__fadeInRight">
                <img src={chef} alt="chef" className='w-75-ns'/>
            </div>
        </div>

    </div>
  )
}

export default Home