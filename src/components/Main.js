import React from 'react'
import workingIllus  from "../images/illustration-working.svg";

const Main = () => {
  return (
    <div className="main">
      <div className="slogan flex">
        <div className="left-part">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="start-btn">Get Started</button>
        </div>
        <div className="right-part">
          <img src={workingIllus} alt="" />
        </div>
      </div>
     
    </div>
  );
}

export default Main