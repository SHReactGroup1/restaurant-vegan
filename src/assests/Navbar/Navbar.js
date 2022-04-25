import React from 'react';
import Logovegan from '../img/Logo-Vegan.png'

function Navbar() {
  return (
    <nav className="flex justify-around items-center pa3 ph5-ns">
        <a className="v-mid link dim" href="/" title="Home">
            <img src={Logovegan} className="w4 h3" alt="Site Name"/>
        </a>
        <div className="v-mid">
            <a className="link dim green f4 f3-ns dib mr3 mr5-ns" href="/about" title="About">About</a>
            <a className="link dim green f4 f3-ns dib mr3 mr5-ns" href="/contact" title="Contact">Contact</a>
            <a className="link dim green f4 f3-ns dib" href="/product" title="Product">Product</a>
        </div>
        <div>
            <a className="f3 mr4-ns no-underline bw1 grow shape ph4 pv3 mb2 dib white bg-dark-green" href="#0">Sign Up</a>
            <a className="f3 no-underline shape bw1 ba ph4 pv3 mb2 dib dark-green grow" href="#0">Login</a>
        </div>
    </nav>
  )
}

export default Navbar