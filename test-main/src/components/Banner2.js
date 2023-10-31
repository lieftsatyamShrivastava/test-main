import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Banner.css";
import MyVerticallyCenteredModal from "./Modals";
import { useEffect, useRef, useState } from "react";



function Banner2() {
    const [showModal, setShowModal] = useState(false);

    // const vidRef = useRef();

    // useEffect(() => {
    //   vidRef.current.play();
    // }, []);

    const handleSubmit = () => {
      setShowModal(true);
    };

    const handleCloseModal = () => {
      setShowModal(false);
    };
  return (
    <Container>
      <Row>
        {/* First Column */}
        <Col lg={5} xs={12} className="p-5 px-lg-2 align-items-center">
          <h1 style={{ color: "rgba(3,69,174,255)", fontWeight: "bold" }}>
           Zero Stress Commute
          </h1>
          <h3 className="my-5" style={{ fontWeight: "500" }}>
            Weekly & Monthly Subscription based <span style={{ color: "green" }}>electric </span> rides for daily
            commute.
          </h3>
          <Row className="mt-3">
            <Col xs={6} className="px-0">
              <Button
                className="bookbtn px-lg-4 "
                onClick={handleSubmit}
                style={{
                  fontSize: "20px",
                  backgroundColor: "#084aa6",
                  borderRadius: "50px",
                  padding: "12px",
                  width: "150px",
                }}
              >
                Book a slot
              </Button>
            </Col>
            <MyVerticallyCenteredModal
              show={showModal}
              handleClose={handleCloseModal}
            />
          </Row>
        </Col>

        {/* Second Column */}
        <Col lg={7} xs={12}>
          <div className="video-container">
            <video src="animation2.mp4" autoPlay muted loop ></video>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner2;
