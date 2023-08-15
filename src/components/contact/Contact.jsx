import "./contact.scss";
import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState(false);
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

const myEmail = "chrisatenorio@gmail.com";

return (
  <div className="contact" id="contact">
    <div className="left">
      <img src="assets/contact.svg" alt="" />
    </div>
    <div className="right">
      <h2>Contact.</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Subject"
        />
        <textarea
          onChange={(e) => setText(e.target.value)}
          placeholder="Message"
        ></textarea>
        <a href={`mailto:${myEmail}?subject=${email}&body=${text}`}>
          <button type="submit" onClick={handleSubmit}>
            Send
          </button>
        </a>
        {message && <span>Thank you, I will respond ASAP :)</span>}
      </form>
    </div>
  </div>
);
}

export default Contact;
