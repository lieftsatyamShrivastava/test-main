// import React, { useState } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";

// const ToggleColumnLayout = () => {
//   const [activeColumn, setActiveColumn] = useState("left");

//   const handleLeftColumnClick = () => {
//     setActiveColumn("left");
//   };

//   const handleRightColumnClick = () => {
//     setActiveColumn("right");
//   };

//   return (
//     <Container>
//       <Row>
//         <Col
//           xs={12}
//           md={6}
//           className={`text-center ${
//             activeColumn === "left" ? "bg-primary text-white" : ""
//           }`}
//           onClick={handleLeftColumnClick}
//         >
//           <div>
//             <h2>Title - Left Column</h2>
//             <p>Subtitle - Left Column</p>
//           </div>
//         </Col>
//         <Col
//           xs={12}
//           md={6}
//           className={`text-center ${
//             activeColumn === "right" ? "bg-primary text-white" : ""
//           }`}
//           onClick={handleRightColumnClick}
//         >
//           <div>
//             <h2>Title - Right Column</h2>
//             <p>Subtitle - Right Column</p>
//           </div>
//         </Col>
//       </Row>
//       {/* <Row>
//         <Col className="text-center">
//           <Button variant="primary" onClick={handleLeftColumnClick}>
//             Toggle to Left Column
//           </Button>
//           <Button variant="primary" onClick={handleRightColumnClick}>
//             Toggle to Right Column
//           </Button>
//         </Col>
//       </Row> */}
//     </Container>
//   );
// };

// export default ToggleColumnLayout;


import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./togglecol.css"; // Import the custom CSS file

const ToggleColumnLayout = () => {
  const [activeColumn, setActiveColumn] = useState("left");

  const handleLeftColumnClick = () => {
    setActiveColumn("left");
  };

  const handleRightColumnClick = () => {
    setActiveColumn("right");
  };

  return (
    <Container className="p-5 my-4" style={{ backgroundColor: "white" }}>
      <Row className="custom-row">
        <Col
          xs={6}
          md={6}
          className={` text-center ${
            activeColumn === "left" ? "bg-primary text-white shadow" : ""
          }`}
          onClick={handleLeftColumnClick}
          style={{ backgroundColor: "#f5f5f5", borderRadius: "10px" }}
        >
          <div className="py-5">
            <h3>1 week Trial</h3>
            <p>Subtitle - Left Column</p>
          </div>
        </Col>
        <Col
          xs={6}
          md={6}
          className={`text-center ${
            activeColumn === "right" ? "bg-primary text-white shadow" : ""
          }`}
          onClick={handleRightColumnClick}
          style={{ backgroundColor: "#f5f5f5", borderRadius: "10px" }}
        >
          <div className="py-5">
            <h3>Monthly Subscription </h3>
            <p>Subtitle - Right Column</p>
          </div>
        </Col>
      </Row>
      {/* <Row>
        <Col className="text-center">
          <Button variant="primary" onClick={handleLeftColumnClick}>
            Toggle to Left Column
          </Button>
          <Button variant="primary" onClick={handleRightColumnClick}>
            Toggle to Right Column
          </Button>
        </Col>
      </Row> */}
    </Container>
  );
};

export default ToggleColumnLayout;
