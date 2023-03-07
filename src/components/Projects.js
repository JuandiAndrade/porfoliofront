import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import lp1 from "../assets/img/lp1.png";
import lp2 from "../assets/img/lp2.png";
import lp3 from "../assets/img/lp3.png";
import lp4 from "../assets/img/lp4.png";
import lp5 from "../assets/img/lp5.png";
import lp6 from "../assets/img/lp6.png";

import f1 from "../assets/img/f1.png";


export const Projects = () => {

  const projects1 = [
    {
      title: "LookingPlace",
      description: "",
      imgUrl: lp1,
    },
    {
      title: "LookingPlace",
      description: "",
      imgUrl: lp2,
    },
    {
      title: "LookingPlace",
      description: "",
      imgUrl: lp3,
    },
    {
      title: "LookingPlace",
      description: "",
      imgUrl: lp4,
    },
    {
      title: "LookingPlace",
      description: "",
      imgUrl: lp5,
    },
    {
      title: "LookingPlace",
      description: "",
      imgUrl: lp6,
    },
  ];

  const projects2 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: f1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: f1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: f1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: f1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: f1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: f1,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <p><strong>LookingPlace:</strong> LookingPlace es una plataforma completa para alquilar propiedades en línea, diseñada para hacer que el proceso de búsqueda y reserva sea más fácil y eficiente para los usuarios.</p>
                <p><strong>Food:</strong> Food es una aplicacion para descubrir y disfrutar de nuevas receta</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">LookingPlace</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Food</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Proyecto 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Actualmente no existe un Proyecto</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
