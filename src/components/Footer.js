import React from 'react'
import bgBoost from '../images/bg-boost-desktop.svg'
import iconTw from '../images/icon-twitter.svg'
import iconFb from '../images/icon-facebook.svg'
import iconPt from '../images/icon-pinterest.svg'
import iconInsta from '../images/icon-instagram.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="boost-bg">
        <img src={bgBoost} alt="" />
      </div>
      <div className="boost-content">
        <h1>Boost your links today</h1>
        <button>Get Started</button>
      </div>
      <div className="footer-main flex">
        <div className="icon">Shortly</div>
        <div className="mid-sec">
          <div className="mid-1">
            <ul>
              <li>Features</li>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className="mid-2">
            <ul>
              <li>Resources</li>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="mid-3">
            <ul>
              <li>Company</li>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="social-icons flex">
            <img src={iconFb} alt="" />
            <img src={iconTw} alt="" />
            <img src={iconPt} alt="" />
            <img src={iconInsta} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
/**
 *
  
  
  
  
  
 */