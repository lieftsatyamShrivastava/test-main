import React, { useState } from "react";
import { ToggleButtonGroup, ToggleButton, Button } from "react-bootstrap";
import "./togglebtn.css"; // Import custom CSS file

const MyToggleButton = () => {
  const [value, setValue] = useState(null);
  const [activeButton, setActiveButton] = useState("office"); // Track the active button
const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const handleToggle = (val) => {
    setValue(val);
  };

  return (

    <div className="d-flex" >
      <Button
        className={`px-4  custom-button ${
          activeButton === "office" ? "active" : ""
        } ${activeButton === "office" ? "btn-primary" : "btn-secondary"}`}
        onClick={() => handleButtonClick("office")}
      style={{borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}}
      >
        yes
      </Button>
      <Button
        className={`px-4 custom-button ${
          activeButton === "school" ? "active" : ""
        } ${activeButton === "school" ? "btn-primary" : "btn-secondary"}`}
        onClick={() => handleButtonClick("school")}
        style={{borderTopRightRadius:"10px",borderBottomRightRadius:"10px"}}
      >
        No
      </Button>
    </div>
  );
};

export default MyToggleButton;
