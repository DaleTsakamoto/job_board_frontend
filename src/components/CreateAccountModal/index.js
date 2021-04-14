import {
  Modal,
  Button,
  Form,
  Row,
  Col,
} from 'react-bootstrap'

function CreateAccountModal(props) {
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
        <Form>
          <Form.Group>
          <Row>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
            </Row>
            </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicPasswordConfirm">
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Modal.Body>
  </Modal>
  )
}

export default CreateAccountModal