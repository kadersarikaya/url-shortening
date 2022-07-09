import React from 'react'
import iconTw from '../images/icon-twitter.svg'
import iconFb from '../images/icon-facebook.svg'
import iconPt from '../images/icon-pinterest.svg'
import iconInsta from '../images/icon-instagram.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="boost-content">
        <h1>Boost your links today</h1>
        <button>Get Started</button>
      </div>
      <div className="footer-main flex">
          <div className="social-icons flex">
            <img src={iconFb} alt="" />
            <img src={iconTw} alt="" />
            <img src={iconPt} alt="" />
            <img src={iconInsta} alt="" />
          </div>
      </div>
    </div>
  );
}

export default Footer
