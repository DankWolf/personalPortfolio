import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useState, useEffect } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data.js";

function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Personal Projects",
    },
    {
      id: "mobile",
      title: "Full Stack Practice",
    },
    {
      id: "design",
      title: "Design Practice",
    },
    {
      id: "content",
      title: "IRL",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            id={item.id}
            key={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {selected === "design" || selected === "content"
          ? data.map((d) => (
              <div className="project" key="{d.id}">
                <div className="item">
                  <img src={d.img} alt="" />
                  <h3>{d.title}</h3>
                </div>
              </div>
            ))
          : data.map((d) => (
              <div className="project" key="{d.id}">
                <div className="item">
                  <img src={d.img} alt="" />
                  <h3>{d.title}</h3>
                </div>
                <h3>Tech Stack</h3>
                <p>{d.stack}</p>
                <h3>Problem</h3>
                <p>{d.prob}</p>
                <h3>Solution</h3>
                <p>{d.solution}</p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Portfolio;
