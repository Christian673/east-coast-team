import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styling/Register.css";
import Navbar from "./Navbar";

export default function Register() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  function validateForm() {
    return email.length > 0 && firstname.length > 0 && lastname.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="Register">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="first name">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="first name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="last name">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="last name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}