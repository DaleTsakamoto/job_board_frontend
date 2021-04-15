import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";

import * as sessionActions from "../../store/session";

import {
  Modal,
  Button,
  Form
} from 'react-bootstrap'

function LoginModal(props) {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  useEffect(() => {
    if (validated) {
        setErrors([]);
        return dispatch(sessionActions.login({ email, password })).catch(
          (res) => {
            if (res.data && res.data.errors) setErrors(res.data.errors);
          }
        );
      };
  },[validated])

  return (
    <Modal
    {...props}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Log In
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <ul>
              {errors.map((error, idx) => (
                  <li key={idx}>{error}</li>
              ))}
          </ul>
        <Form.Group controlId="formBasicEmail">
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Control
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Text className="text-muted">
              Your match is just around the corner.
            </Form.Text>
          </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form>
    </Modal.Body>
  </Modal>
  )
}

export default LoginModal