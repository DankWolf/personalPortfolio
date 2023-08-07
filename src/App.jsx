import "./app.scss";
import { useState } from "react";
import TopBar from "./components/TopBar/TopBar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import PropTypes from "prop-types";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Works />
        <Portfolio />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

TopBar.propTypes = {
  menuOpen: PropTypes.node.isRequired,
  setMenuOpen: PropTypes.node.isRequired,
};

export default App;
