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
    <div className="works">
      <h1>About Me</h1>
      <div className="container">
        <div className="item">
          <div className="left">
            <img src="assets/accentPic.png" alt="" />
          </div>
          <div className="right">
            <div className="rightTech">
                <h2>Tech Stack:</h2>
                <p>JavaScript, TypeScript, React/Redux, SQL, NoSQL, GraphQL, Auth (OAuth, JWT, Bcrypt), TDD (Jest, Vitest, Cypress), Node.js, Express, Axios, Webpack, Vite, CI/CD (Jenkins, Travis CI, GitHub), MUI, HTML/CSS, SCSS, AWS (EC2, S3), K8s, VBA, Docker</p>
              </div>
              <div className="rightBio">
                <h2>Bio:</h2>
              <p>Full Stack & empathetic software engineer contributing to open source tools. Currently working on VaaS, a K8s visualization and diagnostics tool, designed to help devs improve resource utilization and manage expenses. Motivated, curious, and specialized in React.js, Redux.js, JavaScript, TypeScript, Node.js, Express.js, SQL/NoSQL databases.
Previously, I was a software engineer in Innovation at Fisher Investments ($200B IRA), where I led a team using agile scrum methods to ideate and execute automation efforts across all divisions, business process mapping, and a full update to company website focused on UX and SEO.
            </p>
              </div>
              <div className="rightPerson">
                <h2>Personal:</h2>
                <p>Son to Mexican immigrants, I've been working since I was 9 years old. Double majored alum from UC Berkeley. President of my fraternity, and lead instructor for DeCal on Leadership. Fluent in Spanish, Portuguese, Wine, and Memes. When I'm not listening to podcasts or reading, I'm running, rowing, or weight lifting. Certified Vinyasa Yoga instructor and Diploma from WSET.
Looking for any excuse to get another cup of coffee - especially meeting new people. Feel free to reach out at chrisatenorio@gmail.com or DM me on Twitter @chrisatenorio.</p>
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