import React from "react";
import Accordion from "react-bootstrap/Accordion";

// import "../../App.css";
const AccordionCard = ({ data }) => {
 
  return (
    <Accordion
      defaultActiveKey={["0"]}
      alwaysOpen
      className="my-3 "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Accordion.Item eventKey={data?.id} className="p-2 shadow ">
        <Accordion.Header className="FaqHeader" style={{ fontSize: "33px" }}>
          <p style={{ fontWeight: "bold" }}> {data?.ques}</p>
        </Accordion.Header>
        <Accordion.Body className="p-4 text-start">{data?.ans}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionCard;
