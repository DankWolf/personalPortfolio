import "./testimonials.scss";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SubdirectoryArrowRightOutlinedIcon from "@mui/icons-material/SubdirectoryArrowRightOutlined";

function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Steven Tong",
      title: "Software Engineer",
      img: "https://media.licdn.com/dms/image/D5603AQF78ncKKWDbWQ/profile-displayphoto-shrink_800_800/0/1673294288879?e=1697068800&v=beta&t=6cYP9XE3pqDQEVPE6-1TKV31u0GkY3vTnSL92CoPefQ",
      icon: "https://www.linkedin.com/in/steven-tong-b5578991/",
      desc: "Chris was an excellent software engineer and an integral member to the team. He placed a high importance on UX and took the lead in revamping the look and feel of VaaS. In addition to making design changes that made the app more appealing, he also made significant changes in frontend routing that improved the UX and made data more accessible to users. In the process, he identified and fixed numerous bugs that improved the overall performance of VaaS. Chris was a great pleasure to work with and will make significant contributions in any team or organization.",
    },
    {
      id: 2,
      name: "Tokaji",
      title: "Cat, and CEO of my house",
      img: "assets/Tokaji.png",
      icon: "",
      desc: "He's alright.",
      featured: true,
    },
    {
      id: 3,
      name: "Johanna Merluza",
      title: "Software Engineer",
      img: "https://media.licdn.com/dms/image/D4E03AQFpuDhDy-Uoqw/profile-displayphoto-shrink_800_800/0/1688703599070?e=1697068800&v=beta&t=o6ECDhVBQ2Nu_s9pwLGaMl5ws-Ot7Z6MhJMb823sqR8",
      icon: "https://www.linkedin.com/in/johannamerluza/",
      desc: "Chris Tenorio is an exceptional Software Engineer who consistently demonstrates strong problem-solving skills. He lead the UI/UX improvements for VaaS, flattening the navigation and improving user experience, and made contributions to the test suite to expand test coverage. Beyond his technical abilities, Chris Tenorio is an absolute pleasure to work with. They communicate effectively with team members, offer constructive feedback, and always collaborate well with others. As a member of the VaaS team, Chris has been an invaluable asset, and I have no doubt that he will continue to excel in his future endeavors.",
    },
    // {
    //   id: 4,
    //   name: "Kevin Sheptock",
    //   title: "Longtime Friend",
    //   img: "https://images.unsplash.com/photo-1565104781149-275a5392dabc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbGQlMjBtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    //   icon: "",
    //   desc: "This guy fucks.",
    // },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"} key={d.id}>
            <div className="top">
              {/* <SubdirectoryArrowRightOutlinedIcon className="left" /> */}
              <a href={d.icon} target="_blank">
                <img src={d.img} alt="" className="user" />
              </a>
              {/* <YouTubeIcon className="right" /> */}
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
