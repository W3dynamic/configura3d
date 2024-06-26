import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/van.png";
import projImg2 from "../assets/img/volvo.png";
import projImg3 from "../assets/img/press.png";
import projImg4 from "../assets/img/mach.png";
import projImg5 from "../assets/img/slid.png";
import projImg6 from "../assets/img/trike.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import link1 from "../assets/img/link.png";

export const Projects = () => {

  const projects = [
    {
      title: "Camper van configurator",
      description:  "",
      imgUrl: projImg1,
      logo:<div className="social-icon">
              <a href="https://builder.campsuha.com/build/"><img src={link1} alt="Icon" /></a>
              
            </div>
    },
      
     {
      title: "Volvo showroom",
      description:  "",
      imgUrl: projImg2,
      logo:<div className="social-icon">
              <a href="https://www.ex-showroom.de/"><img src={link1} alt="Icon" /></a>
              
            </div>
    },
      
       {
      title: "Metal recycling press",
      description:  "",
      imgUrl: projImg3,
      logo:<div className="social-icon">
              <a href="https://lindemann-metalrecycling.com/images/render/mobile/etapress/index.html"><img src={link1} alt="Icon" /></a>
              
            </div>
    },

     
    {
      title: "Machinery demo",
      description:  "",
      imgUrl: projImg4,
      logo:<div className="social-icon">
              <a href="https://assets.abiattachments.com/interactive-spins/ABI-Gravel-Grader/Gravel-Grader-Interactive.html"><img src={link1} alt="Icon" /></a>
              
            </div>
    },

     
    {
      title: "Sliding door configurator with dynamic price",
      description:  "",
      imgUrl: projImg5,
      logo:<div className="social-icon">
              <a href="https://staalo.nl/configurator/"><img src={link1} alt="Icon" /></a>
              
            </div>
    },

     
    {
      title: "Fantastic trike configurator",
      description:  "",
      imgUrl: projImg6,
      logo:<div className="social-icon">
              <a href=""><img src={link1} alt="Icon" /></a>
              
            </div>
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
                <h2>Projects</h2>
                <p>Here is the list of best projects out there.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
