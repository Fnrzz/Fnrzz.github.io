import "./App.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Col, Container, Row } from "react-bootstrap";

// Image
import headerImg from "./assets/img/header-img.svg";
import js from "./assets/img/js.png";
import laravel from "./assets/img/laravel.png";
import html from "./assets/img/html.png";
import css from "./assets/img/css.png";
import react from "./assets/img/react.png";
import php from "./assets/img/php.png";

// Font
import "./assets/fonts/COOPBL.ttf";

// Components
import CardGlow from "./components/CardGlow";
import Navigationbar from "./components/Navigationbar";
import Cards from "./components/Card";

const App = () => {
  return (
    <div className="App" id="home">
      <Navigationbar />
      <section id="banner">
        <Container>
          <Row className="heading-wraper">
            <Col className="text-center">
              <div className="heading-text text-white ">Hai, Saya Farid</div>
              <button class="shadow_btn">
                <a href="#about" className="text-decoration-none text-white">
                  Tentang Saya
                </a>
              </button>
            </Col>
            <Col className="text-center">
              <img src={headerImg} className="heading-image" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about-section">
        <Row className="about-wrapper">
          <Col>
            <div className="text-center text-white about-title" id="about">
              Tentang Saya
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="6" className="about-column">
            <CardGlow className="about-card" />
          </Col>
          <Col xs="6" className="about-column">
            <div className="about-text">
              Selamat datang di portofolio saya! Nama saya Farid Nur Raidananda.
              Sebagai mahasiswa Teknik Informatika di Universitas Muhammadiyah
              Surakarta, saya memiliki minat dan latar belakang kuat dalam
              pemrograman. Saya pernah menjuarai beberapa kompetisi robotik dan
              lomba terkait. Terus mencari tantangan baru untuk tumbuh, saya
              ingin memperlihatkan karya dan keterampilan melalui portofolio ini
              dan berharap terhubung dengan peluang baru.
            </div>
          </Col>
        </Row>
      </section>
      <section className="skills-section">
        <Row>
          <Col>
            <div className="skills-title text-white" id="skills">
              Kemampuan Saya
            </div>
          </Col>
        </Row>
        <Row className="skills-wrapper">
          <Col xs="2" className="skills-column">
            <div className="skills-img">
              <img src={html} className="img-fluid " />
              <div className="skills-name text-white">HTML</div>
            </div>
          </Col>
          <Col xs="2" className="skills-column">
            <div className="skills-img">
              <img src={css} className="img-fluid " />
              <div className="skills-name text-white">CSS</div>
            </div>
          </Col>
          <Col xs="2" className="skills-column">
            <div className="skills-img">
              <img src={js} className="img-fluid " />
              <div className="skills-name text-white">JavaScript</div>
            </div>
          </Col>
          <Col xs="2" className="skills-column">
            <div className="skills-img">
              <img src={laravel} className="img-fluid " />
              <div className="skills-name text-white">Laravel</div>
            </div>
          </Col>
          <Col xs="2" className="skills-column">
            <div className="skills-img">
              <img src={react} className="img-fluid " />
              <div className="skills-name text-white">React Js</div>
            </div>
          </Col>
          <Col xs="2" className="skills-column">
            <div className="skills-img">
              <img src={php} className="img-fluid " />
              <div className="skills-name text-white">PHP</div>
            </div>
          </Col>
        </Row>
      </section>
      <section className="projects-section">
        <Row>
          <Col>
            <div className="projects-title text-white" id="projects">
              Projects Saya
            </div>
          </Col>
        </Row>
        <div className="projects-wrapper">
          <div className="projects-column">
            <Cards url="https://github.com/Fnrzz/BookStore" img="BookStore" />
          </div>
          <div className="projects-column">
            <Cards url="https://github.com/Fnrzz/React-Movie" img="Movie" />
          </div>
          <div className="projects-column">
            <Cards url="https://github.com/Fnrzz/MyStore" img="Ecommerce" />
          </div>
          <div className="projects-column">
            <Cards url="https://github.com/Fnrzz/Company" img="Company" />
          </div>
        </div>
      </section>
      <section className="contact-section">
        <Row>
          <Col>
            <div className="contact-title text-white" id="contact">
              Sosmed Saya
            </div>
          </Col>
        </Row>
        <Row className="contact-wrapper">
          <Col className="contact-column">
            <a href="https://github.com/Fnrzz" className="contact-icon">
              <i className="bi bi-github"></i>
            </a>
          </Col>
          <Col className="contact-column">
            <a
              href="https://www.instagram.com/massduun/"
              className="contact-icon"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </Col>
          <Col className="contact-column">
            <a href="https://www.tiktok.com/@fnrzzz" className="contact-icon">
              <i className="bi bi-tiktok"></i>
            </a>
          </Col>
          <Col className="contact-column">
            <a className="contact-icon">
              <i className="bi bi-twitter"></i>
            </a>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default App;
