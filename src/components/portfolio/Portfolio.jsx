import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useState } from "react";

function Portfolio() {
  const [selected, setSelected] = useState("featured");

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

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
        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
