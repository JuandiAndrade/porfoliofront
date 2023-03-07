import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import fotoDePerfil from '../assets/img/fotoDePerfilRedonda.png';
import astronauta from '../assets/img/astronauta.png';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full Stack Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bienvenido a mi Porfolio</span>
                <h1>{`Hola!🖐 Soy Juandi -`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack Developer"]'><span className="wrap">{text}</span></span></h1>
                  <p>Soy una persona apasionada por el aprendizaje y con una gran curiosidad por descubrir cosas nuevas. Desde que descubrí el mundo de la programación, me sentí atraído por la creatividad y el potencial que ofrece la tecnología para resolver problemas y mejorar la vida de las personas.</p>
                  {/* <p>Con una mentalidad perseverante y enfocada en el logro de objetivos, me he dedicado a explorar diferentes lenguajes de programación y herramientas tecnológicas, con el fin de expandir mis conocimientos y habilidades en el campo de la informática.</p> */}
                  {/* <p>Me emociona la idea de seguir aprendiendo y explorando nuevas tecnologías, con el objetivo de seguir mejorando en el mundo de la programación y aportar soluciones innovadoras a problemas cotidianos.</p> */}
                  {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={astronauta} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
