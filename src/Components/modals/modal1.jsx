

/* eslint-disable react/prop-types */

import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form, Modal } from "react-bootstrap";
// import emailjs from "emailjs-com";
// import { toast } from "react-toastify";

// const serviceId = "service_wrk5j76"
// const templateId = "template_ajfrv6q"
// const publicKey = "3CoQnyOSI3gq1XqZ6"

const Modal1 = ({
  formData,
  handleChange,
  setModalShow,
  setIndividualModal,
  ...props
}) => {
  const [activeButton, setActiveButton] = useState("foreign");

  // const [formData, setFormData] = useState({
  //   name: "",
  //   country: "",
  //   state: "",
  //   email: "",
  //   phone: "",
  //   occupation: "",
  // });

  // Handle input changes
  // const handleChange = (e) => {
  //   console.log(e);

  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // Send Email using Email JS
  // const sendEmail = async () => {
  //   try {
  //     // const result = await emailjs.send(
  //     //   serviceId, 
  //     //   templateId,  
  //     //   formData,    
  //     //   publicKey    
  //     // );

  //     // toast.success("Email sent successfully:");
  //     console.log(formData);
  //     // console.log(result);




  //   } catch (error) {
  //     toast.error("Error sending email:", error);

  //   }
  // };




  const handleBeforeClose = () => {
    setModalShow(false); // Close Modal1
    setIndividualModal(true); // Open Individual modal
  };

  return (

    <>

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        contentClassName="custom-modal-style" // New class added for styling
      >
        {/* Selector buttons for input of foreign and indian */}
        {/* <div className="form-top-selector">
          <button
            className={`selector-btn ${activeButton === "foreign" ? "active" : ""}`}
            onClick={() => setActiveButton("foreign")}
          >
            Foreign
          </button>
          <button
            className={`selector-btn ${activeButton === "indian" ? "active" : ""}`}
            onClick={() => setActiveButton("indian")}
          >
            Indian
          </button>
        </div> */}
        <Modal.Body>
          <Form className="modalForm d-flex flex-column justify-content-center">
          <h2 className="name-div-head text-center">Enroll
          </h2>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="number"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
              />
            </Form.Group>
            <Button style={{ width: '40%', margin: '0 auto' }} variant="primary"
              // type="submit"
              className="section-3-btn my-2"
              onClick={handleBeforeClose}
            >
              Next
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};






export default Modal1;