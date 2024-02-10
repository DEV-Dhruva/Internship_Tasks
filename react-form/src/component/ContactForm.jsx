import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const ContactForm = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setTimeout(() => {
      setSuccessMessage("Your message has been successfully submitted!");
      setFormData({ email: "", message: "" });
      setErrorMessage("");
    }, 1000);
  };

  return (
    <div>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Form onSubmit={handleSubmit} className="m-5 p-5 bg-body-secondary">
        <Form.Group controlId="formBasicEmail" className="my-2">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicMessage" className="my-2">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="my-2">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
