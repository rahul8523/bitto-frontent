/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Form, Modal } from "react-bootstrap";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";


const serviceId = "service_wrk5j76"
const templateId = "template_ajfrv6q"
const publicKey = "3CoQnyOSI3gq1XqZ6"

const Individual = ({ formData, handleChange, finalSubmit, ...props }) => {
    const [activeTab, setActiveTab] = useState("individual"); // Manage active tab state


    // const [formData2, setFormData2] = useState({
    //     cityPincode: "",
    //     gender: "",
    //     qualification: "",
    //     compnayName: "",
    //     industry: "",
    //     country: "",
    //     stateCorporate: '',
    //     corporateCity: ''
    // });


    // Handle input changes
    // const handleChange = (e) => {
    //     console.log(e);

    //     setFormData2({ ...formData2, [e.target.name]: e.target.value });
    // };

    // const sendEmail = async () => {
    //     try {
    //         // const result = await emailjs.send(
    //         //     serviceId,
    //         //     templateId,
    //         //     formData2,
    //         //     publicKey
    //         // );

    //         toast.success("Email sent successfully:");
    //         console.log(formData2);
    //         // console.log(result);




    //     } catch (error) {
    //         toast.error("Error sending email:", error);

    //     }
    // };

    // const handleFormSubmit = () => { 
    //     props.finalSubmit()
        
    // }

    const renderForm = () => {
        if (activeTab === "individual") {
            return (
                <Form className="modalForm d-flex flex-column justify-content-center">
                    <Form.Group>
                        <Form.Control type="text" placeholder="City with Pincode" value={formData.cityPincode} onChange={handleChange} name='cityPincode' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Gender" value={formData.gender} onChange={handleChange} name='gender' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Qualification" value={formData.qualification} onChange={handleChange} name='qualification' />
                    </Form.Group>
                    <Button style={{ width: '40%', margin: '0 auto' }} variant="primary"
                        // type="submit"
                        className="section-3-btn my-2"
                        onClick={finalSubmit}
                    >
                        Submit
                    </Button>
                </Form>
            );
        } else {
            // Corporate Form
            return (
                <Form className="modalForm d-flex flex-column justify-content-center">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Company Name" value={formData.compnayName} onChange={handleChange} name='compnayName' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Industry Type" value={formData.industry} onChange={handleChange} name='industry' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Country" value={formData.country} onChange={handleChange} name='country' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="email" placeholder="State" value={formData.stateCorporate} onChange={handleChange} name='stateCorporate' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="City" value={formData.corporateCity} onChange={handleChange} name='corporateCity' />
                    </Form.Group>
                    <Button style={{ width: '40%', margin: '0 auto' }} variant="primary"
                        // type="submit"
                        className="section-3-btn my-2"
                        onClick={finalSubmit}
                    >
                        Submit
                    </Button>
                </Form>
            );
        }
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            contentClassName="custom-modal-style" // New class added for styling
        >
            <div className="form-top-selector">
                <button
                    className={`selector-btn ${activeTab === "individual" ? "active" : ""}`}
                    onClick={() => setActiveTab("individual")}
                >
                    Individual
                </button>
                <button
                    className={`selector-btn ${activeTab === "corporate" ? "active" : ""}`}
                    onClick={() => setActiveTab("corporate")}
                >
                    Corporate
                </button>
            </div>
            <Modal.Body>
                {renderForm()} {/* Render the form based on the active tab */}
            </Modal.Body>
        </Modal>
    );
};

export default Individual;
