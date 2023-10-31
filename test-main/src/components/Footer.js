import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"; // Import LinkedIn and WhatsApp icons

import "./footer.css"
import { Element } from "react-scroll";
import { Link, scroller } from "react-scroll";
import MyVerticallyCenteredModal from "./Modals";
import EmailModal from "./EmailModal";


const Footer = () => {
  const [showModal, setShowModal] = useState(false);
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);

  const handleSubmit = () => {
    // Perform any necessary submission logic here

    // Show the modal if a mobile number is provided
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 1000,
      delay: 0,
      // smooth: "easeInOutQuint",
    });
  }
  return (
    <Element name="footer">
      {" "}
      <Container fluid className="footercss p-5 section">
        <main>
          <Row>
            {/* Social links */}
            <Col xs={3} md={3}>
              <img
                fluid
                src="./logodark.png"
                alt="Logo"
                style={{ height: "80px" }}
              />
            </Col>
            {/* Quick links */}
            <Col xs={12} md={3}>
              <ul className="quick-links" style={{ listStyle: "none" }}>
                <li>
                  {" "}
                  <Link
                    to="faq"
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "white",
                      cursor: "pointer",
                      padding: "10px",
                    }}
                    onClick={() => scrollToSection("faq")}
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="features"
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "white",
                      cursor: "pointer",
                      padding: "10px",
                    }}
                    onClick={() => scrollToSection("features")}
                  >
                    Our Services
                  </Link>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={3}>
              <ul className="quick-links" style={{ listStyle: "none" }}>
                {/* <li>
                  <Link
                    to="Testimonials"
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "white",
                      cursor: "pointer",
                      padding: "10px",
                    }}
                    onClick={() => scrollToSection("Testimonials")}
                  >
                    Pitch Desk
                  </Link>
                  <EmailModal show={show} onHide={handleClose} />
                </li> */}
                <li>
                  {" "}
                  <Link
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "white",
                      cursor: "pointer",
                      padding: "10px",
                    }}
                    // onClick={() => scrollToSection("faq")}
                    onClick={handleSubmit}
                  >
                    Book a Slot
                  </Link>
                  <MyVerticallyCenteredModal
                    show={showModal}
                    handleClose={handleCloseModal}
                  />
                </li>
                <li>
                  <Link
                    to="Testimonials"
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "white",
                      cursor: "pointer",
                      padding: "10px",
                    }}
                    onClick={() => scrollToSection("Testimonials")}
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            </Col>

            <Col xs={12} md={3}>
              {/* <h4 className="mb-2"> social Links</h4> */}

              <ul
                className="social-links"
                style={{
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <li>
                  <a
                    href="mailto:telkestech@mypickup.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "20px", color: "white" }}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/mypickup/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "20px", color: "white" }}
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/mypickup.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "20px", color: "white" }}
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a
                    href="http://wa.me/918867712288"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "20px", color: "white" }}
                  >
                    <FontAwesomeIcon icon={faWhatsapp} /> {/* WhatsApp icon */}
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+9188677122880"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "20px", color: "white" }}
                  >
                    <FontAwesomeIcon icon={faPhone} /> {/* Call icon */}
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </main>
        <hr />

        {/* Footer */}
        <footer>
          <Row>
            <Col className="text-center" xs={12} style={{}}>
              <p>&copy; 2023 mypickup</p>
            </Col>
          </Row>
        </footer>
      </Container>
    </Element>
  );
};

export default Footer;
