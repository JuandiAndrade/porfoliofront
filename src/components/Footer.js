import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import github2 from "../assets/img/github-90.png";
import fotoDePerfil from "../assets/img/fotoDePerfilRedonda.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <div>
              {/* <img src={fotoDePerfil} alt="Logo" /> */}
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/juan-diego-andrade-polimeni-1a4501249/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/JuandiAndrade">
                <img src={github2} alt="Icon" />
              </a>
              {/* <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
            </div>
            <p>Juan Diego Andrade Polimeni</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
