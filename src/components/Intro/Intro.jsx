import "./intro.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { init } from "ityped";
import { useEffect, useRef } from "react";

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Software Engineer",
        "Yogi",
        "Sommelier",
        "Developer",
        "Problem Solver",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/mainPic.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hey, I'm</h2>
          <h1>Christopher Tenorio</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <ExpandMoreIcon className="arrowIcon" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
