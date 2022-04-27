import React from 'react'
import logoVegan from '../img/Logo-Vegan.png'

function Footer() {
  return (
    <div className="bgc-green  green-custom2 flex flex-column">
        <div className='flex justify-around flex-column flex-row-l pv3 pa3-l mt2-l ph6-l'>
        <div class=" w-third-l pa3 mr2-l flex flex-column mb3 mb0-l">
            <img src={logoVegan} alt='logo vegan' className='mw5 '/>
            <p className='f2 mv3 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
            <p className='mt3-l mt3 flex items-center'>
            <i className="fa-solid fa-location-dot text-5xl text-contact mr3"></i>
            <span className='f3-l f4'>London Eye, London, United Kingdom</span>
            </p>
            
        </div>
        <div className=' w-two-thirds-l flex justify-around flex-row-ns flex-column'>
            <div class=" w-25-l pa3">
                <h1 className="fw1">Navigation</h1>
                <p className='f3 fw2 mv5-l'>
                    Home<br/>
                    Page<br/>
                    About Us<br/>
                    Services<br/>
                </p>
                <p className='mt5-l mt3 flex items-center'>
                <i class="fa-solid fa-phone text-4xl text-contact mr3"></i>
                <span className='f3-l f4'>088-777-666-85</span>
                </p>
            </div>
            <div class=" w-25-l pa3">
                <h1 className="fw1">Quick Link</h1>
                <p className='f3 fw2 mv5-l'>
                    Contact Us<br/>
                    FAQS<br/>
                    Booking<br/>
                    Pages<br/>
                </p>
                <p className='mt5-l mt3 flex items-center'>
                <i class="fa-solid fa-envelope-open-text text-4xl text-contact mr3"></i>
                <span className='f3-l f4'>Contact@Vegan.com</span>
                </p>
            </div>
            <div class=" w-25-l pa3">
                <h1 className="fw1">Services</h1>
                <p className='f3 fw2 mv5-l'>
                    Home<br/>
                    Contact<br/>
                    Blog<br/>
                    404<br/>
                </p>
                <div className="pv3">
                        <a href="https://www.facebook.com/" class="link dim dib mr3 black-70" title="Impossible Labs on Facebook">
                            <svg class="db w2 h2" data-icon="facebook" viewBox="0 0 32 32" fill="currentColor">
                            <title >facebook icon</title>
                            <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"
                            ></path>
                            </svg>
                        </a>
                        <a href="https://twitter.com/" class="link dim dib mr3 black-70">
                            <svg class="db w2 h2" data-icon="twitter" viewBox="0 0 32 32"
                            fill="currentColor" >
                            <title >twitter icon</title>
                            <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"
                            ></path>
                            </svg>
                        </a>
                        <a href="https://medium.com/" class="link dim dib mr3 black-70" title="Impossible Labs on Medium">
                            <svg class="db w2 h2" x="0px" y="0px" viewBox="0 0 290 248.6"
                            fill="currentColor" >
                            <g >
                                <path fill="currentColor" class="st0" d="M287.8,46.3L196,0.3c-0.4-0.2-0.9-0.3-1.3-0.3c0,0-0.1,0-0.1,0c-1.1,0-2.2,0.6-2.8,1.5l-56.6,92l63.2,102.7 l90.4-146.9C289.4,48.3,289,46.8,287.8,46.3z"
                                ></path>
                                <polygon fill="currentColor" points="105.2,61.2 105.2,160.3 193.3,204.4 	"
                                ></polygon>
                                <path fill="currentColor" d="M201,208.2l80.9,40.5c4.4,2.2,8,0,8-5v-180L201,208.2z"
                                ></path>
                                <path fill="currentColor" d="M95.5,46.7L10.7,4.3L5.4,1.7C4.6,1.3,3.8,1.1,3.2,1.1c-0.9,0-1.7,0.4-2.3,1.1C0.3,2.8,0,3.8,0,5v193.4 c0,3.3,2.4,7.2,5.4,8.7l83.3,41.6c1.2,0.6,2.3,0.9,3.3,0.9c2.8,0,4.8-2.2,4.8-5.8V48.7C96.7,47.8,96.2,47.1,95.5,46.7z"
                                ></path>
                            </g>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/" class="link dim dib black-70">
                            <svg class="db w2 h2" x="0px" y="0px" viewBox="0 0 48 48" >
                            <linearGradient gradientUnits="userSpaceOnUse" x1="23.9995"
                                y1="0" x2="23.9995" y2="48.0005" >
                                <stop offset="0" ></stop>
                                <stop offset="1" ></stop>
                            </linearGradient>
                            <path fill="currentColor" d="M48,42c0,3.313-2.687,6-6,6H6c-3.313,0-6-2.687-6-6V6 c0-3.313,2.687-6,6-6h36c3.313,0,6,2.687,6,6V42z"
                            ></path>
                            <g >
                                <g >
                                <path fill="#FFFFFF" d="M15.731,11.633c-1.608,0-2.658,1.083-2.625,2.527c-0.033,1.378,1.018,2.494,2.593,2.494 c1.641,0,2.691-1.116,2.691-2.494C18.357,12.716,17.339,11.633,15.731,11.633z M13.237,35.557h4.988V18.508h-4.988V35.557z M31.712,18.748c-1.595,0-3.222-0.329-4.956,2.36h-0.099l-0.087-2.599h-4.417c0.065,1.411,0.074,3.518,0.074,5.52v11.529h4.988 v-9.854c0-0.46,0.065-0.919,0.196-1.248c0.328-0.919,1.149-1.871,2.527-1.871c1.805,0,2.527,1.411,2.527,3.479v9.494h4.988V25.439 C37.455,20.713,34.993,18.748,31.712,18.748z"
                                ></path>
                                </g>
                            </g>
                            </svg>
                        </a>
                </div>
            </div>
        </div>
        </div>
        <div className='bt pt5 w-90 center' style={{borderColor: '#256C40'}}></div>
        <div className='center f3 pb5 ph3'> &copy; 2021 Vegan Template • All Rights Reserved </div>
    </div>
  )
}

export default Footer