import React from 'react'

function ErrorPage() {
  return (
    <div className='vh-75 bgc-green green-custom2'>
        <header className="tc ph5 lh-copy">
            <h1 className="f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple">404</h1>
            <h2 className="tc f1-l fw1">Sorry, we can't find the page you are looking for.</h2>
        </header>
        <p className="fw1 i tc mt4 mt5-l f4 f3-l">Are you looking for one of these?</p>
        <ul className="list tc pl0 w-100 mt5">
            <li className="dib"><a className="f5 f4-ns link black db pv2 ph3 hover-dark-green" href="/">Home</a></li>
            <li className="dib"><a className="f5 f4-ns link black db pv2 ph3 hover-dark-green" href="/about">About</a></li>
            <li className="dib"><a className="f5 f4-ns link black db pv2 ph3 hover-dark-green" href="/contact">Contact</a></li>
            <li className="dib"><a className="f5 f4-ns link black db pv2 ph3 hover-dark-green" href="/signup">Sign Up</a></li>
        </ul>
    </div>
  )
}

export default ErrorPage