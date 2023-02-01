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

const App = () => {
  return (
    <div className="App" id="home">
      <Navigationbar />
      <section id="banner">
        <Container>
          <Row className="heading-wraper">
            <Col className="text-center">
              <div className="heading-text text-white ">Hai,Saya Farid</div>
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
              Selamat datang di portofolio saya! Nama saya Farid Nur Raidananda
              dan saya adalah Mahasiswa Teknik Infromatika di Universitas
              Muhammadiyah Surakarta. Saya memulai belajar pemrograman sejak smp
              dan saya sangat bersemangat tentang pemrograman. Saya memiliki
              latar belakang yang kuat dalam pemrograman. Saya pernah beberapa
              kali menjuarai kompetisi robotik dan beberapa lomba yang masih
              terkait dengan pemrograman. dan saya selalu mencari tantangan baru
              untuk meningkatkan dan memperluas pengetahuan saya. Saya sangat
              senang dapat memperlihatkan karya dan keterampilan saya melalui
              portofolio ini dan saya sangat berharap dapat terhubung dengan
              kesempatan baru di masa depan.
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
            </div>
          </Col>
          <Col xs="2" className="skills-column">
            <div className="skills-img">
              <img src={css} className="img-fluid " />
            </div>
          </Col>
          <Col xs="2" className="skills-column">
            <div className="skills-img">
              <img src={js} className="img-fluid " />
            </div>
          </Col>
          <Col xs="2" className="skills-column">
            <div className="skills-img">
              <img src={laravel} className="img-fluid " />
            </div>
          </Col>
          <Col xs="2" className="skills-column">
            <div className="skills-img">
              <img src={react} className="img-fluid " />
            </div>
          </Col>
          <Col xs="2" className="skills-column">
            <div className="skills-img">
              <img src={php} className="img-fluid " />
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default App;
