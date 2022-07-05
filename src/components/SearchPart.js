import React from "react";
import bgShortenDesktop from "../images/bg-shorten-desktop.svg";
import brandRecognition from "../images/icon-brand-recognition.svg";
import iconDetailed from "../images/icon-detailed-records.svg";
import fullyCostomizableIcon from "../images/icon-fully-customizable.svg";

const SearchPart = () => {
  const Cards = [
    {
      title: "Brand Recognition",
      icon: brandRecognition,
      desc: `Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.`,
    },
    {
      title: "Detailed Records",
      icon: iconDetailed,
      desc: `Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.`,
    },
    {
      title: "Fully Customizable",
      icon: fullyCostomizableIcon,
      desc: `Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.`,
    },
  ];
  return (
    <div className="search-part">
      <div className="search-bg">
        <div className="dark-purple"></div>
        <img className="search-svg" src={bgShortenDesktop} alt="" />
        <form action="">
          <div className="flex">
            <input placeholder="Shorten a link here..." type="text" />
            <button className="search">Shorten It!</button>
          </div>
          <span>
            <i>Please add a link</i>
          </span>
        </form>
        <div className="btm-container">
          <div className="txt">
            <h1>Advanced Statistics</h1>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="cards">
            <div className="card">
              <div className="card-icon">
                <img src={Cards[0].icon} alt="" />
              </div>
              <div className="title">{Cards[0].title}</div>
              <p>{Cards[0].desc}</p>
            </div>
            <div className="card el-1">
              <div className="card-icon">
                <img src={Cards[1].icon} alt="" />
              </div>
              <div className="title">{Cards[1].title}</div>
              <p>{Cards[1].desc}</p>
            </div>
            <div className="card el-2">
              <div className="card-icon">
                <img src={Cards[2].icon} alt="" />
              </div>
              <div className="title">{Cards[2].title}</div>
              <p>{Cards[2].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPart;
