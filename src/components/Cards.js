import React from 'react'

const Cards = ({title, icon, desc}) => {
  return (
      <div className="cards">
        <div className="card">
          <div className="card-icon">
            <img src={icon} alt="" />
          </div>
          <div className="title">{title}</div>
          <p>{desc}</p>
        </div>
      </div>
  );
}

export default Cards