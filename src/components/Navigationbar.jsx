import "../assets/css/Navigationbar.css";
import { Col } from "react-bootstrap";

const Navigationbar = () => {
  return (
    <section id="menu">
      <div className="menu-wrapper ">
        <div className="menu-box">
          <Col xs="3" className="menu-column">
            <a className="menu" href="#home">
              <i className="bi bi-house-door-fill text-info"></i>
            </a>
          </Col>
          <Col xs="3" className="menu-column">
            <a className="menu" href="#skills">
              <i className="bi bi-person-circle text-info"></i>
            </a>
          </Col>
          <Col xs="3" className="menu-column">
            <a className="menu" href="#projects">
              <i className="bi bi-code-slash text-info"></i>
            </a>
          </Col>
          <Col xs="3" className="menu-column">
            <a className="menu" href="#contact">
              <i className="bi bi-person-lines-fill text-info"></i>
            </a>
          </Col>
        </div>
      </div>
    </section>
  );
};

export default Navigationbar;
