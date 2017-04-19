import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div className='container content landing fulcrum-live'>
        <header className='main-headline'>
          <div className='page top-content'>
            {/* <div className='hero-mobile'>
              <figure><img src='/assets/img/landing/dcg-book-mobile.jpg' alt='Mobile book image' /></figure>
            </div> */}
            <div className='logo-cta'>
              <img className='fulcrum-live-header-logo' src='../images/fulcrum-live-logo-01.png' alt='Fulcrum Live logo' />
              <a href='https://www.eventbrite.com/' className='btn primary fulcrum-live-cta'>Register</a>
            </div>
            <img src='../images/fulcrum-live-dates-01.png' alt='August 16th, 2017 at Boston Seaport Hotel and World Trade Center' />
            <div className='inner-nav'>
              <a href='http://www.rowdiessoccer.com/2017schedule'>Schedule</a>
              <span>|</span>
              <a href='https://www.bose.com/en_us/products/speakers.html'>Speakers</a>
              <span>|</span>
              <a href='https://www.fulcrumapp.com/about'>About</a>
            </div>
          </div>
        </header>
        <div className='upper'>
          <div className='contents'>
            <h2>Schedule</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h2>Speakers</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <ul>
              <li>thing #1</li>
              <li>thing #2</li>
              <li>thing #3</li>
              <li>thing #4</li>
            </ul>
          </div>
        </div>
        <div className='lower'>
          <section className='share'>Share section</section>
          <section className='landing-footer'>
            <figure className='triangle'>triangle figure</figure>
            <p>Fulcrum Mobile Solutions, LLC</p>
            <p>&copy; 2011 - 2017</p>
          </section>
        </div>
      </div>
    )
  }
}

export default App
