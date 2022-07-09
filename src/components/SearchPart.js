import React, { useEffect, useState } from "react";
import brandRecognition from "../images/icon-brand-recognition.svg";
import iconDetailed from "../images/icon-detailed-records.svg";
import fullyCostomizableIcon from "../images/icon-fully-customizable.svg";
import Footer from "./Footer";
import CopyToClipboard from "react-copy-to-clipboard";

const SearchPart = () => {
  const [links, setLinks] = useState([]);
  const [inputText, setInputText] = useState("");
  const [res, setRes] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIssubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    try {
      fetch(`https://api.shrtco.de/v2/shorten?url=${inputText}`)
        .then((response) => response.json())
        .then((data) => setRes(data));
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }, [inputText]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 1000);
    return () => clearTimeout(timer);
  }, [error]);

  function submitToHandler(e) {
    e.preventDefault();
    setIssubmitted(true);
    {
      inputText && !res.error && isSubmitted
        ? setLinks([
            ...links,
            { url: res.result.full_short_link, mainURL: inputText },
          ])
        : setError("Please enter a valid URL");
    }
    setInputText("");
  }

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
        <form action="">
          <div className="flex form-els">
            <input
              value={inputText}
              placeholder="Shorten a link here..."
              type="text"
              onChange={inputTextHandler}
            />
            <button onClick={submitToHandler} className="search">
              Shorten!
            </button>
            {error && <p className="mobile-err">{error}</p>}
          </div>
        </form>
        {error && (
          <p className="desk-err" style={{ color: "red", marginTop: "40px" }}>
            {error}
          </p>
        )}

        <div className="btm-container">
          <div className="short-link">
            {links.map((link, index) => (
              <div key={index} className="">
                {
                  <div className="link-bg flex">
                    <p>{link.mainURL}</p>
                    <div className="flex link-wrap">
                      <a>{link.url}</a>
                      <CopyToClipboard
                        text={link.url}
                        onCopy={() => setCopied(true)}
                      >
                        <button className="copy-btn">Copy</button>
                      </CopyToClipboard>
                    </div>
                  </div>
                }
              </div>
            ))}
          </div>
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
      <Footer />
    </div>
  );
};

export default SearchPart;
