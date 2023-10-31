// import React, { Component } from "react";
// import "./myform.css";
// import { Button, Modal } from "react-bootstrap";

// class OfficeForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       gender: "Male",
//       mobnumber: "",
//       pickupLocation: "",
//       dropLocation: "",
//       pickupTime: "",
//       returnTime: "",
//       days: {
//         Sunday: false,
//         Monday: false,
//         Tuesday: false,
//         Wednesday: false,
//         Thursday: false,
//         Friday: false,
//         Saturday: false,
//       },
//       wantReturn: "yes", // Default to 'yes'

//       errors: {},
//       showModal: false,
//     };
//   }

//   handleInputChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     this.setState((prevState) => ({
//       days: {
//         ...prevState.days,
//         [name]: checked,
//       },
//     }));
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = this.validateForm();
//     const popup = this.handleShow();
//     if (Object.keys(errors).length != 0) {
//       // Form is valid, proceed with submission
//       // You can submit the form data to your API or perform any other actions here.
//      this.setState({ errors });
      
//     } else {
//      console.log("hello");
//      this.setState({ popup });
//     }
//   };

//   handleReturnToggle = (value) => {
//     this.setState({ wantReturn: value });
//   };
//   handleShow = () => {
//        this.setState({ showModal: true });
//      }

//   closeModal = () => {
//     this.setState({ showModal: false });
//   };
//   validateForm = () => {
//     const errors = {};
//     const {
//       name,
//       mobnumber,
//       pickupLocation,
//       dropLocation,
//       pickupTime,
//       returnTime,
//       days,
//       date,
//       age,
//     } = this.state;

//     if (!name) errors.name = "Name is required";
//     if (!mobnumber) errors.mobnumber = "Mobile number is required";
//     if (!pickupLocation) errors.pickupLocation = "Pickup location is required";
//     if (!dropLocation) errors.dropLocation = "Drop location is required";
//     if (!pickupTime) errors.pickupTime = "Pickup time is required";
//     if (!returnTime) errors.returnTime = "Return time is required";
//     if (age === "" || isNaN(age) || age < 18)
//       errors.age = "Please enter a valid age";
//     if (!date) errors.date = "Date is required";

//     const selectedDays = Object.values(days).filter((day) => day);
//     if (selectedDays.length === 0)
//       errors.days = "At least one day must be selected";

//     return errors;
//   };

//   render() {
//     const { errors, wantReturn, showModal, show } = this.state;

//     return (
//       <div className="form-container">
//         <form onSubmit={this.handleSubmit}>
//           <div className="row inputrow">
//             <div className="form-group">
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 onChange={this.handleInputChange}
//               />
//               {errors.name && <div className="error">{errors.name}</div>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="gender">Gender:</label>
//               <select name="gender" onChange={this.handleInputChange}>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label htmlFor="mobnumber">Mob No:</label>
//               <input
//                 type="text"
//                 name="mobnumber"
//                 onChange={this.handleInputChange}
//               />
//               {errors.mobnumber && (
//                 <div className="error">{errors.mobnumber}</div>
//               )}
//             </div>
//           </div>

//           <div className="row inputrow">
//             <div className="form-group">
//               <label htmlFor="pickupLocation">Pickup Location:</label>
//               <input
//                 type="text"
//                 name="pickupLocation"
//                 onChange={this.handleInputChange}
//               />
//               {errors.pickupLocation && (
//                 <div className="error">{errors.pickupLocation}</div>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="dropLocation">Drop Location:</label>
//               <input
//                 type="text"
//                 name="dropLocation"
//                 onChange={this.handleInputChange}
//               />
//               {errors.dropLocation && (
//                 <div className="error">{errors.dropLocation}</div>
//               )}
//             </div>
//           </div>
//           <div className="row inputrow">
//             <div className="form-group">
//               <label>Days:</label>{" "}
//               <div className="days-checkboxes">
//                 {Object.keys(this.state.days).map((day) => (
//                   <div key={day}>
//                     <input
//                       type="checkbox"
//                       name={day}
//                       checked={this.state.days[day]}
//                       onChange={this.handleCheckboxChange}
//                     />
//                     {day}
//                   </div>
//                 ))}
//               </div>
//               {errors.days && <div className="error">{errors.days}</div>}
//             </div>
//           </div>

//           <div className="row inputrow">
//             <div className="form-group">
//               <label htmlFor="pickupTime">Pickup Time:</label>
//               <input
//                 type="time"
//                 name="pickupTime"
//                 onChange={this.handleInputChange}
//               />
//               {errors.pickupTime && (
//                 <div className="error">{errors.pickupTime}</div>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="returnTime">Return Time:</label>
//               <input
//                 type="time"
//                 name="returnTime"
//                 onChange={this.handleInputChange}
//               />
//               {errors.returnTime && (
//                 <div className="error">{errors.returnTime}</div>
//               )}
//             </div>
//             <div className="form-group">
//               <label>Do you want a return?</label>
//               <div className="toggle-buttons">
//                 <button
//                   className={`toggle-button ${
//                     wantReturn === "yes" ? "active" : ""
//                   }`}
//                   onClick={() => this.handleReturnToggle("yes")}
//                 >
//                   Yes
//                 </button>
//                 <button
//                   className={`toggle-button ${
//                     wantReturn === "no" ? "active" : ""
//                   }`}
//                   onClick={() => this.handleReturnToggle("no")}
//                 >
//                   No
//                 </button>
//               </div>
//             </div>
//           </div>

//           <button type="submit" className="inputrow">
//             Submit
//           </button>
//         </form>
//         {/* Form Submitted Modal */}
//         <Modal show={showModal} onHide={this.closeModal}>
//           <Modal.Header closeButton>
//             <Modal.Title>Form Submitted</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <h5 className="p-4" style={{ color: "navy" }}>
//               Your response is recorded! Our customer support team will reach
//               out to you within 6 business hours.
//               <br />
//               <br />
//               Thanks for connecting with
//               MyPickup. Happy Commuting!
//             </h5>
//             <h5></h5>
//           </Modal.Body>
//         </Modal>
//       </div>
//     );
//   }
// }
// export default OfficeForm;
