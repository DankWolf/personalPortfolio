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
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
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
  );
}

export default Works;
