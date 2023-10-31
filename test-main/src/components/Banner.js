// import { Button, Col, Container, Row } from "react-bootstrap";
// import "./Banner.css";
// import MyVerticallyCenteredModal from "./Modals";
// import { useEffect, useRef, useState } from "react";

// function Banner() {
//   const [showModal, setShowModal] = useState(false);

//   const vidRef = useRef();

//   useEffect(() => {
//     vidRef.current.play();
//   }, []);

//   const handleSubmit = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <>
//       <Container className=" pt-sm-3 p-lg-5">
//         <Row style={{ background: "" }}>
//           <Col lg={6} className="text-start text-align-center p-5 ">
//             <h1 style={{ color: "rgba(3,69,174,255)", fontWeight: "bold" }}>
//               Zero Stress Commute
//             </h1>
//             <h3 className="my-5" style={{ fontWeight: "500" }}>
//               Weekly & Monthly Subscription based <br />{" "}
//               <span style={{ color: "green" }}>electric</span> rides for daily
//               commute
//             </h3>
//             <Container>
//               <Row className="mt-3">
//                 <Col xs={6} className="px-0">
//                   <Button
//                     className="bookbtn px-lg-4 "
//                     onClick={handleSubmit}
//                     style={{
//                       fontSize: "20px",
//                       backgroundColor: "#084aa6",
//                       borderRadius: "50px",
//                       padding: "12px",
//                       width: "150px",
//                     }}
//                   >
//                     Book a slot
//                   </Button>
//                 </Col>
//               </Row>

//               <MyVerticallyCenteredModal
//                 show={showModal}
//                 handleClose={handleCloseModal}
//               />
//             </Container>
//           </Col>
//           <Col className="p-0 ">
//             <video
//               style={{ width: "100%", height: "100%" }}
//               ref={vidRef}
//               muted
//               autoPlay
//               loop
//             >
//               <source src="./animation2.mp4" type="video/mp4" />
//               Sorry, your browser doesn't support videos.
//             </video>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default Banner;


import { Button, Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import MyVerticallyCenteredModal from "./Modals";
import React, { useEffect, useRef, useState } from "react";

function Banner() {
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
    <>
      <Container className="pt-sm-3 p-lg-5">
        <Row style={{ background: "" }}>
          <Col lg={6} className="text-start text-align-center p-5 ">
            <h1 style={{ color: "rgba(3,69,174,255)", fontWeight: "bold" }}>
              Zero Stress Commute
            </h1>
            <h3 className="my-5" style={{ fontWeight: "500" }}>
              Weekly & Monthly Subscription based <br />{" "}
              <span style={{ color: "green" }}>electric</span> rides for daily
              commute.
            </h3>
            <Container>
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
              </Row>

              <MyVerticallyCenteredModal
                show={showModal}
                handleClose={handleCloseModal}
              />
            </Container>
          </Col>
          {/* <Col className="p-0">
            <div className="video-container">
              <video ref={vidRef} muted autoPlay loop>
                <source src="./animation2.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>
          </Col> */}
          <Col lg={6} xs={12}>
            <div className="video-container">
              <video
                src="animation2.mp4"
                autoPlay
                muted
                loop
                controls
              ></video>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Banner;



