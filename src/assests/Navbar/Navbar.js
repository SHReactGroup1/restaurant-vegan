import React from 'react';
import Logovegan from '../img/Logo-Vegan.png'

function Navbar() {
  return (
    <nav className="flex-ns flex-auto justify-around items-center-ns pa3 ph5-ns">
        <a className="v-mid link dim" href="/" title="Home">
            <img src={Logovegan} className="w4 h3" alt="Site Name"/>
        </a>
        <div className=" pv2 pv0-ns">
            <a className="link dim green f4 f3-ns dib mr3 mr5-ns" href="/about" title="About">About</a>
            <a className="link dim green f4 f3-ns dib mr3 mr5-ns" href="/contact" title="Contact">Contact</a>
            <a className="link dim green f4 f3-ns dib" href="/product" title="Product">Product</a>
        </div>
        <div className='pv3 pv0-ns'>
            <a class="f3 mr4-ns mr5 no-underline bw1 shrink shape ph4-ns pv3-ns ph3 pv2 mb2 dib white bg-dark-green" href="/signup">Sign Up</a>
            <a class="f3 no-underline shape bw1 ba ph4-ns pv3-ns ph3 pv2 mb2 dib dark-green shrink" href="/login">Login</a>
        </div>
    </nav>
  )
}

export default Navbar