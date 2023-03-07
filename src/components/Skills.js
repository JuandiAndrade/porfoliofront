import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

import expressIcon from "../assets/img/icons8-express-js-96.png";
import nodeIcon from "../assets/img/icons8-nodejs-96.png";
import postgresIcon from "../assets/img/icons8-postgresql-100.png";
import reactIcon from "../assets/img/icons8-react-80.png";
import reduxIcon from "../assets/img/icons8-redux-96.png";
import jsIcon from "../assets/img/icons8-js-100.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2> 🛠 Habilidades Full Stack Developer </h2>
              <br />
              <br />
              {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p> */}
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={jsIcon} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={reactIcon} alt="Image" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={reduxIcon} alt="Image" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={nodeIcon} alt="Image" />
                  <h5>Node JS</h5>
                </div>
                <div className="item">
                  <img src={expressIcon} alt="Image" />
                  <h5>Express</h5>
                </div>

                <div className="item">
                  <img src={postgresIcon} alt="Image" />
                  <h5>Postgres SQL</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
