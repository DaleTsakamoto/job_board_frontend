import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Modal,
  Button,
  Form,
  Row,
  Col,
} from 'react-bootstrap'

import * as sessionActions from '../../store/session'

function CreateAccountModal(props) {
  const dispatch = useDispatch()
  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [employer, setEmployer] = useState(false)
  const [errors, setErrors] = useState([])

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false || password !== confirmPassword) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      return (
        dispatch(sessionActions.signup({ email, password, firstName, lastName, employer }))
      )
        .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });
    }
    setValidated(true);
  };

  return (
    <Modal
    {...props}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Sign Up
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <ul>
              {errors.map((error, idx) => (
                  <li key={idx}>{error}</li>
              ))}
      </ul>
      <Form.Group>
        <Row>
          <Col>
            <Form.Control
              required
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid first name.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Col>
          <Col>
            <Form.Control
              required
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid last name.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Col>
          </Row>
          </Form.Group>
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
        </Form.Group>
          <Form.Group controlId="formBasicPasswordConfirm">
            {password !== confirmPassword ?
            <Form.Control
            required
            isInvalid
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
              />
              :
            <Form.Control
            required
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
              />
            
          }
          {password !== confirmPassword ?
          <Form.Control.Feedback type="invalid">
                  Passwords don't match
          </Form.Control.Feedback>
            :
            null
            }
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check value={employer} onChange={(e) => setEmployer(e.target.value)}type="checkbox" label="Employer" />
            </Form.Group>
          </Form.Group>
          <div className="mb-3">
            <Form.File id="formcheck-api-regular">
              <Form.File.Label>Upload your resume</Form.File.Label>
              <Form.File.Input />
            </Form.File>
          </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Modal.Body>
  </Modal>
  )
}

export default CreateAccountModal