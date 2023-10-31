// import { useState } from "react";
// import { Form } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// function EmailModal() {
//   const [show, setShow] = useState(false);
//   const [isClicked, setIsClicked] = useState(false);

//  const [email, setEmail] = useState("");

//  const handleEmailChange = (e) => {
//    setEmail(e.target.value);
//  };

//  const handleSubmit = (e) => {
//    e.preventDefault();
//    // Add your logic for handling the form submission with the email
//    console.log("Submitted email:", email);
//  };


//   const handleShow = () => setShow(true);
//     const handleClose = () => {
//      setShow(false)
//   setIsClicked(!isClicked);
// };
//   return (
//     <>
//       <Button
//         onClick={handleShow}
//         style={{ background: "none", color: "#084aa6", border: "none" }}
//         variant={isClicked ? "white" : "#f5f5f5"}
//       >
//         Pitch Deck
//       </Button>

//       <Modal show={show} onHide={handleClose} centered>
//         <Modal.Header closeButton>
//           <Modal.Title style={{ color: "#084aa6" }}>Pitch Deck</Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="pt-3 pb-5">
//           <Form onSubmit={handleSubmit}>
//             {/* <Form.Group controlId="formEmail"> */}
//             <Form.Label>Email address</Form.Label>
//             <div className="d-flex align-items-center">
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={handleEmailChange}
//               />
//               {/* </Form.Group> */}

//               <Button
//                 style={{
//                   backgroundColor: "#084aa6",
//                   color: "white",
//                   borderRadius: "0",
//                   borderTopRightRadius: "15px",
//                   borderBottomRightRadius: "15px",
//                 }}
//                 type="submit"
//               >
//                 Submit
//               </Button>
//             </div>
//           </Form>
//         </Modal.Body>
//         {/* <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer> */}
//       </Modal>
//     </>
//   );
// }

// export default EmailModal;

// code i have changed 

// import React, { useState } from "react";
// import { Form, Button, Modal, Alert } from "react-bootstrap";
// import EmailFormNew from "./EmailModalUpdated";
// import {AddDoc, Collection} from "firebase/analytics"
// import {getAnalytics} from "../firebase"
// import { collection } from "firebase/firestore";

// function EmailModal() {
//   const [show, setShow] = useState(false);
//   const [isClicked, setIsClicked] = useState(false);
//   const [email, setEmail] = useState("");
//   const [hasError, setHasError] = useState(false);

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setHasError(false); // Reset error when user types
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email) {
//       setHasError(true);
//       return;
//     }

//     // Add your logic for handling the form submission with the email
//     console.log("Submitted email:", email);
       
//     // Close the modal after successful submission
//     handleClose();
//   };
 
//   const handleShow = () => setShow(true);
//   const handleClose = () => {
//     setShow(false);
//     setIsClicked(!isClicked);
//     setHasError(false); // Reset error when modal is closed
//   };
//   await AddDoc(collection)(getAnalytics,"email")


//   return (
//     <>
//       <Button
//         onClick={handleShow}
//         style={{ background: "none", color: "#084aa6", border: "none" }}
//         variant={isClicked ? "white" : "#f5f5f5"}
//       >
//         Pitch Deck
//       </Button>

//       <Modal show={show} onHide={handleClose} centered>
//         <Modal.Header closeButton>
//           <Modal.Title style={{ color: "#084aa6" }}>Pitch Deck</Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="pt-3 pb-5">
//           {/* <Form onSubmit={handleSubmit}>
//             <Form.Label>Email address</Form.Label>
//             <div className="d-flex align-items-center">
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={handleEmailChange}
//                 isInvalid={hasError} // Apply Bootstrap's isInvalid prop to show error style
//               />
//               <Button
//                 style={{
//                   backgroundColor: "#084aa6",
//                   color: "white",
//                   borderRadius: "0",
//                   borderTopRightRadius: "15px",
//                   borderBottomRightRadius: "15px",
//                   width:"20%"
//                 }}
//                 type="submit"
//               >
//                 Submit
//               </Button>
//             </div>
//             {hasError && (
//               <Alert variant="danger" className="mt-2">
//                 Email is required.
//               </Alert>
//             )}
//           </Form> */}
//           <EmailFormNew/>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }

// export default EmailModal;

//  code changed by satyam 2 time    

// import React, { useState } from "react";
// import { Form, Button, Modal, Alert } from "react-bootstrap";
// import { getAnalytics } from "firebase/analytics";
// import { collection, addDoc, getFirestore } from "firebase/firestore"; // Import getFirestore
// import { initializeApp } from "firebase/app";
// import {app} from "../firebase"
// // const firebaseConfig = {
// //   apiKey: "AIzaSyCCTJ2spyzXQSxUTe8n4zlh-NimPvg4ho8",
// //   authDomain: "mypickup-aad9c.firebaseapp.com",
// //   projectId: "mypickup-aad9c",
// //   storageBucket: "mypickup-aad9c.appspot.com",
// //   messagingSenderId: "282092225148",
// //   appId: "1:282092225148:web:e6270cc2886b212841bff9",
// //   measurementId: "G-CDLQSPH99X"
// // };

// // const app = initializeApp(firebaseConfig);

// const EmailModal = () => {
//   const [show, setShow] = useState(false);
//   const [isClicked, setIsClicked] = useState(false);
//   const [email, setEmail] = useState("");
//   const [hasError, setHasError] = useState(false);

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setHasError(false); // Reset error when the user types
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email) {
//       setHasError(true);
//       return;
//     }

//     // Add your logic for handling the form submission with the email
//     console.log("Submitted email:", email);

//     // Send email to Firebase collection
//     const db = getFirestore(app); // Get a Firestore reference
//     const emailCollection = collection(db, "emails");
//     addDoc(emailCollection, { email: email });

//     // Close the modal after successful submission
//     handleClose();
//   };

//   const handleShow = () => setShow(true);
//   const handleClose = () => {
//     setShow(false);
//     setIsClicked(!isClicked);
//     setHasError(false); // Reset error when the modal is closed
//   };

//   const submitData = async(event) =>{
//     event.preventDefault();
//     const{email,}= userData;
//     fetch("https://mypickup-aad9c-default-rtdb.firebaseio.com/userDataEmaul.json",
//     {
//       method: "POST",
//         headers:{
//           "Content-Type":"application/json"

//         },
//         body:JSON.stringify({
//           email
//         })
//       }
//     );
        
        
  
  
//   }
//   return (
//     <>
//       <Button
//         onClick={handleShow}
//         style={{ background: "none", color: "#084aa6", border: "none" }}
//         variant={isClicked ? "white" : "#f5f5f5"}
//       >
//         Pitch Deck
//       </Button>

//       <Modal show={show} onHide={handleClose} centered>
//         <Modal.Header closeButton>
//           <Modal.Title style={{ color: "#084aa6" }}>Pitch Deck</Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="pt-3 pb-5">
//           <Form onSubmit={handleSubmit}>
//             <Form.Label>Email address</Form.Label>
//             <div className="d-flex align-items-center">
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={handleEmailChange}
//                 isInvalid={hasError} // Apply Bootstrap's isInvalid prop to show error style
//               />
//               <Button
//                 style={{
//                   backgroundColor: "#084aa6",
//                   color: "white",
//                   borderRadius: "0",
//                   borderTopRightRadius: "15px",
//                   borderBottomRightRadius: "15px",
//                   width: "20%"
//                 }}
//                 type="submit"
//               >
//                 Submit
//               </Button>
//             </div>
//             {hasError && (
//               <Alert variant="danger" className="mt-2">
//                 Email is required.
//               </Alert>
//             )}
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// };

// export default EmailModal;


import React, { useState } from "react";
import { Form, Button, Modal, Alert } from "react-bootstrap";
// extra code starts
// import installations from 'firebase/installations';
// extra code ends
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database"; // Import Realtime Database functions
import {app} from "../firebase";

const EmailModal = () => {
  const [show, setShow] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState(false);
// // extra code starts
// const [installationId, setInstallationId] = useState('');

//   useEffect(() => {
//     const installations = installations();
//     installations.enableRestrictedApi('Firebase Installations API');

//     installations.createInstallation().then((installation) => {
//       setInstallationId(installation.installationId);
//     });
//   }, []);
//   console.log("instaLLATION iD", installationId);
// // extra code ends
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setHasError(false); // Reset error when the user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setHasError(true); // error
      return;
    }

    // Add your logic for handling the form submission with the email
    console.log("Submitted email:", email);

    // Send email to Firebase Firestore
    const dbFirestore = getFirestore(app); // Get a Firestore reference
    const emailCollection = collection(dbFirestore, "emails");
    // addDoc(emailCollection, { email: email });
    const newDoc = addDoc(emailCollection, { email: email });
    console.log(newDoc.id);

    // Send email to Firebase Realtime Database
    const dbRealtime = getDatabase(app); // Get Realtime Database reference
    const realtimeRef = ref(dbRealtime, "userDataEmail"); // Specify the path you want to use
    
    
    push(realtimeRef, email);

    // Close the modal after successful submission
    handleClose();
  };

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setIsClicked(!isClicked);
    setHasError(false); // Reset error when the modal is closed
  };

  return (
    <>
      <Button
        onClick={handleShow}
        style={{ background: "none", color: "#084aa6", border: "none" }}
        variant={isClicked ? "white" : "#f5f5f5"}
      >
        Pitch Deck
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#084aa6" }}>Pitch Deck</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-3 pb-5">
          <Form onSubmit={handleSubmit}>
            <Form.Label>Email address</Form.Label>
            <div className="d-flex align-items-center">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
                isInvalid={hasError} // Apply Bootstrap's isInvalid prop to show error style
              />
              <Button
                style={{
                  backgroundColor: "#084aa6",
                  color: "white",
                  borderRadius: "0",
                  borderTopRightRadius: "15px",
                  borderBottomRightRadius: "15px",
                  width: "20%"
                }}
                type="submit"
              >
                Submit
              </Button>
            </div>
            {hasError && (
              <Alert variant="danger" className="mt-2">
                Email is required.
              </Alert>
            )}
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EmailModal;
