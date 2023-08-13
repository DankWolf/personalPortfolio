import "./works.scss";
import { useState } from "react";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "",
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id veniam sint eveniet itaque tenetur doloremque rerum perferendis eaque accusamus? Fugiat eius reprehenderit facere. Pariatur porro ipsam assumenda recusandae perspiciatis.",
      img: "https://cdn.dribbble.com/userupload/8955279/file/original-582bb716b19aa525ae08cb1b17d9f204.jpg?resize=1024x768",
    },
    {
      id: "2",
      icon: "",
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id veniam sint eveniet itaque tenetur doloremque rerum perferendis eaque accusamus? Fugiat eius reprehenderit facere. Pariatur porro ipsam assumenda recusandae perspiciatis.",
      img: "https://cdn.dribbble.com/userupload/9060951/file/original-ee8b359aec00f9840f05b87d6c9db380.jpg?resize=1024x768",
    },
    {
      id: "3",
      icon: "",
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id veniam sint eveniet itaque tenetur doloremque rerum perferendis eaque accusamus? Fugiat eius reprehenderit facere. Pariatur porro ipsam assumenda recusandae perspiciatis.",
      img: "https://cdn.dribbble.com/userupload/9069154/file/original-b1b96869ef5bfb31e7989644fcb938f9.png?resize=790x593&vertical=center",
    },
    {
      id: "4",
      icon: "",
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id veniam sint eveniet itaque tenetur doloremque rerum perferendis eaque accusamus? Fugiat eius reprehenderit facere. Pariatur porro ipsam assumenda recusandae perspiciatis.",
      img: "https://cdn.dribbble.com/userupload/9030232/file/original-cc3eb771feb0769535759f6bc8594607.png?resize=1024x768",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <h1>About Me</h1>
      <div className="container">
        <div className="item">
          <div className="left">
            <img src="assets/head.png" alt="" />
          </div>
          <div className="right">
            <div className="rightTech">
              <h2>Tech Stack:</h2>
              <p>
                JavaScript, TypeScript, React/Redux, SQL, NoSQL, GraphQL, Auth
                (OAuth, JWT, Bcrypt), TDD (Jest, Vitest, Cypress), Node.js,
                Express, Axios, Webpack, Vite, CI/CD (Jenkins, Travis CI,
                GitHub), MUI, HTML/CSS, SCSS, AWS (EC2, S3), K8s, VBA, Docker
              </p>
            </div>
            <div className="rightBio">
              <h2>Bio:</h2>
              <p>
                Full Stack software engineer contributing to open source tools.
                Currently working on VaaS, a K8s visualization and diagnostics
                tool, designed to help devs improve resource utilization and
                manage expenses. Previously, I was a software engineer in
                Innovation at Fisher Investments ($200B IRA), where I mentored,
                reviewed code, and led a team using agile scrum methods.
              </p>
              <a href="https://docs.google.com/document/d/1Lhbp6G6GB8S8jfXJYHt_ZW0lNFj9X8ars8obPcBQo3A/edit?usp=sharing">
                Resume
              </a>
            </div>
            <div className="rightPerson">
              <h2>Personal:</h2>
              <p>
                Learning addict, community-driven creator. Software engineering
                is the closest I can get to modern wizardry. Driven by
                problem-solving; if I don’t know a language or technology - show
                me the problem, share the ideal outcome - and I will find my
                way. <br />
              </p>
              <br />
              <p>
                Fluent in Spanish, Portuguese, Wine, and Memes. When I'm not
                listening to podcasts or reading, I'm running, rowing, or weight
                lifting. Certified Vinyasa Yoga instructor and Diploma from
                WSET. Let's get coffee - feel free to reach out at
                chrisatenorio@gmail.com or DM me on Twitter @chrisatenorio.
              </p>
              <div className="rightAwards">
                <a
                  title="University of California, Berkeley; This SVG file: User:RaphaelQS, Public domain, via Wikimedia Commons"
                  href="https://commons.wikimedia.org/wiki/File:Seal_of_University_of_California,_Berkeley.svg"
                >
                  <img
                    width="512"
                    alt="Seal of University of California, Berkeley"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/512px-Seal_of_University_of_California%2C_Berkeley.svg.png"
                  />
                  <a
                    href="https://www.wsetglobal.com/qualifications/wset-level-4-diploma-in-wines/"
                    target="_blank"
                  >
                    <img src="https://media.licdn.com/dms/image/D4E0BAQFvzaeOhFMO4g/company-logo_200_200/0/1667324340657?e=1700092800&v=beta&t=TTkD9q8Ax4CrMmvhZF5wKFuwkcIu0nFv9rc5Fz-JKGg" />
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;


/*
<div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <SendToMobileIcon className="imgIcon" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowBackIosNewOutlinedIcon
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <ArrowForwardIosIcon
        className="arrow right"
        onClick={() => handleClick("right")}
      />
    </div>

*/