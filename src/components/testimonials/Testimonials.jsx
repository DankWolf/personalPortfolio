import "./testimonials.scss";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SubdirectoryArrowRightOutlinedIcon from "@mui/icons-material/SubdirectoryArrowRightOutlined";

function Testimonials() {
  const data = [
    {
      id: 1,
      name: "God",
      title: "CEO of Stuff",
      img: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      icon: "",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      id: 2,
      name: "Tokaji",
      title: "CEO of my house",
      img: "https://images.unsplash.com/photo-1583071647239-da8180d40b99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9yYW5nZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      icon: "",
      desc: "He's alright.",
      featured: true,
    },
    {
      id: 3,
      name: "Linley Barba",
      title: "CEO of my Heart",
      img: "https://images.unsplash.com/photo-1527999319509-bf0360a1f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHdvbWFuJTIwcmVkaGVhZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      icon: "",
      desc: "He's the best <3",
    },
    {
      id: 4,
      name: "Kevin Sheptock",
      title: "Longtime Friend",
      img: "https://images.unsplash.com/photo-1565104781149-275a5392dabc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbGQlMjBtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      icon: "",
      desc: "This guy fucks.",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <SubdirectoryArrowRightOutlinedIcon className="left" />
              <img src={d.img} alt="" className="user" />
              <YouTubeIcon className="right" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
