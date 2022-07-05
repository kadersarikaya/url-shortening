import React from 'react'

const Header = () => {
  return (
    <div className="header flex">
      <ul className="flex">
        <li className="icon">Shortly</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <div className="btns">
        <button className='login'>Login</button>
        <button className='register' >Sign Up</button>
      </div>
    </div>
  );
}

export default Header