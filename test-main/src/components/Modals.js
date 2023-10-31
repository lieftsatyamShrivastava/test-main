import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ContactForm from "./ContactForm ";
import ContactForm2 from "./demoContact";
import MyForm from "./OfficeForm";

function MyVerticallyCenteredModal({ show, handleClose }) {
  return (
    <Modal
      // {...props}
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      
    >
      <Modal.Header closeButton>
        
        <div style={{ display: "block" }}>
          <h4 className="" style={{ fontWeight: "700" }}>
            Book a slot
          </h4>
          {/* <p>All your rides for the coming days will be displayed here</p> */}
        </div>
      </Modal.Header>
      <Modal.Body style={{ padding: "0px", backgroundColor: "#f5f5f5" }}>
       
        <ContactForm />
        
      </Modal.Body>
      
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
