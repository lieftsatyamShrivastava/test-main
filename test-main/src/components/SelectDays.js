import React, { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const sampleData = [
  "Data1",
  "Data2",
  "Data3",
  "Data4",
  "Data5",
  "Data6",
  "Data7",
]; // Example data

const MyComponent = () => {
   const [selectedDays, setSelectedDays] = useState([]);

   const handleDaySelect = (day) => {
     setSelectedDays((prevSelectedDays) => {
       if (prevSelectedDays.includes(day)) {
         return prevSelectedDays.filter((selectedDay) => selectedDay !== day);
       } else {
         return [...prevSelectedDays, day];
       }
     });
   };
  return (
    <>
      {/* <Container className="p-4" style={{ backgroundColor: "white" }}>
        <h4>Select the days</h4>
        <p>Select the days of the week which you need the service</p>
        <Row>
          {daysOfWeek.map((day, index) => (
            <Col key={index} xs={12} md>
              <Card className="m-1 shadow">
                <Card.Body
                  className="p-4"
                  style={{ backgroundColor: "#f5f5f5" }}
                >
                  <Card.Text>{day} </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container> */}
      <Container >
        <p style={{fontSize:"15px",fontWeight:"bold"}}>Selected Days</p>
        <Row>
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <Col key={day} xs={2} xl={1}>
              <Form.Check
                type="checkbox"
                id={day}
                label={day}
                checked={selectedDays.includes(day)}
                onChange={() => handleDaySelect(day)}
                // style={{ border:"2px solid blue" }}
              />
            </Col>
          ))}
        </Row>
        <Row className="mt-3">
          <Col>
            <p>Selected days: {selectedDays.join(", ")}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyComponent;
