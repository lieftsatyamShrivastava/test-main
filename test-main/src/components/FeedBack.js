import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Rating from "./Rating";
import { auto, auto2, auto3 } from "../assets";
import "./Feedback.css"

const Feed = () => {
  return (
    <Container fluid className="my-5" id="Feedbacks">
      <h2 className="Heading -1  text-center my-4 py-5" data-aos="fade-up">
        Testimonials
      </h2>
      <Row className="m-2 container-fluid d-flex justify-content-center">
        <Col
          xs={12}
          sm={3}
          className="m-4 mycard"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="d-sm-flex p-4 pb-1">
            <div>
              {" "}
              <img
                src={auto2}
                alt=""
                style={{ width: "90px", height: "90px", borderRadius: "50px" }}
              />
            </div>
            <div className="text-left " style={{ paddingLeft: "10px" }}>
              <h4>Mahesh</h4>
              <Rating value={4.5} />

              <p>AVP @ Reliance Jio</p>
              <span>
                Commute - 5 days a week from Marathahalli to Dairy Circle
              </span>
            </div>
          </div>
          <Row className="p-4">
            <p>
              Mypickup has made my travel from office to home a hassle free
              affair. Earlier i used to struggle to find a cab back home on time
              - This awesome service provides well maintained E ricks on time
              with drivers who are courteous.
            </p>
          </Row>
        </Col>
        <Col
          xs={12}
          sm={3}
          className="m-4 mycard"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="d-sm-flex p-4 pb-1">
            <div>
              {" "}
              <img
                src={auto2}
                alt=""
                style={{ width: "90px", height: "90px", borderRadius: "50px" }}
              />
            </div>
            <div className="text-left " style={{ paddingLeft: "10px" }}>
              <h4>Prasanthi</h4>
              <Rating value={4.5} />

              <p>(Manager @ Ola Electric) </p>
              <span>
                Commute - 5 days a week & back from Sarjapur Road to Kormangla{" "}
              </span>
            </div>
          </div>
          <Row className="p-4">
            <p>
              MyPickup helps me save a lot of booking time. All autos are
              electric which is a feel-good factor. Drivers are courteous and
              rides are affordable. No surge-pricing like other apps.
            </p>
          </Row>
        </Col>
        <Col
          xs={12}
          sm={3}
          className="m-4 mycard"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="d-sm-flex p-4 pb-1">
            <div>
              {" "}
              <img
                src={auto2}
                alt=""
                style={{ width: "90px", height: "90px", borderRadius: "50px" }}
              />
            </div>
            <div className="text-left " style={{ paddingLeft: "10px" }}>
              <p style={{fontSize:"20px",fontWeight:"bold"}} className="mb-1">Sulbha </p>
              <Rating value={4.5} />

              <p className="mb-1">Program Manager @ Zeta, India</p>
              <p style={{fontSize:"15px"}}>Commute - 4 days a week from Harlur to Indiranagar </p>
            </div>
          </div>
          <Row className="p-4 pt-1">
            <p style={{fontStyle:"italic"}}>
             " I can vouch for MyPickup. Been a customer for nearly 2 months now!
              Sharing with co-passengers saves a lot of money and hassle. I
              suggest we all use it to improve Bangalore traffic conditions.  "
            </p>
          </Row>
        </Col>
        {/* <Col
          xs={12}
          sm={3}
          className="m-4"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <Row>
            <Col
              xs={12}
              className="m-2 mycard"
              style={{ marginBottom: "20px" }}
            >
              <div className="d-sm-flex p-2 pb-1">
                <div>
                  {" "}
                  <img
                    src={auto}
                    alt=""
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50px",
                    }}
                  />
                </div>
                <div className="text-center " style={{ paddingLeft: "10px" }}>
                  <h4>lorem</h4>
                  <Rating value={4.5} />
                </div>
              </div>
              <Row className="p-2">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus,
                </p>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="m-2 mycard">
              <div className="d-sm-flex p-2 pb-1">
                <div>
                  {" "}
                  <img
                    src={auto3}
                    alt=""
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50px",
                    }}
                  />
                </div>
                <div className="text-center " style={{ paddingLeft: "10px" }}>
                  <h4>lorem</h4>
                  <Rating value={4.5} />
                </div>
              </div>
              <Row className="p-2">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus, placeat!
                </p>
              </Row>
            </Col>
          </Row>
        </Col> */}
      </Row>
    </Container>
  );
};

export default Feed;
