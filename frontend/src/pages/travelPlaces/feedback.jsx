import React from "react";
// import Navbar from "../../components/navbar.jsx";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

export default function Feedback() {
  return (
    <div>
      <div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
      <label class="form-label" for="form3Example3">Feedback Form</label>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="your name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email Address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="subject" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Feedback</Form.Label>
        <Form.Control as="textarea" rows={4} />
      </Form.Group>
      <Button type = "submit">Submit</Button>
    </Form>
    </div>
      </div>
    </div>
  );
}
