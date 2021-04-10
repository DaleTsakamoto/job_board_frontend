import { useState } from 'react'
import logo from '../logo.svg';
import {
  Row,
  Col,
  Toast
} from 'react-bootstrap'

import '../fonts/Wickedqueen-Wyz34.ttf'
import './HomePage.css'

function HomePage() {
  const [showJob1, setShowJob1] = useState(true);
  const [showJob2, setShowJob2] = useState(true);
  const [showJob3, setShowJob3] = useState(true);
  const [showJob4, setShowJob4] = useState(true);

  return (
    <div className='Homepage-container'>
      <h1 className='Homepage-header'> Villainous Jobs </h1>
      <Row>
        <Col xs={6}>
          <Toast show={showJob1} onClose={() => setShowJob1(false)}>
            <Toast.Header>
              <img
                src="holder.
                js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Job - 456338B</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Need two, young whipersnappers to kidnap around 100 dogs</Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Toast show={showJob2} onClose={() => setShowJob2(false)}>
            <Toast.Header>
              <img
                src="holder.
                js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Job - 275891D</strong>
              <small>57 mins ago</small>
            </Toast.Header>
            <Toast.Body>Require a hunchbacked, decrepit-looking old lady to hand an apple to someone</Toast.Body>
          </Toast>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Toast show={showJob3} onClose={() => setShowJob3(false)}>
            <Toast.Header>
              <img
                src="holder.
                js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Job - 910222H</strong>
              <small>2 hours ago</small>
            </Toast.Header>
            <Toast.Body>Looking for a pale, noseless individual to burn a lightning-shaped tatoo in a young boys head</Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Toast show={showJob4} onClose={() => setShowJob4(false)}>
            <Toast.Header>
              <img
                src="holder.
                js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Job - 524611A</strong>
              <small>3 hours ago</small>
            </Toast.Header>
            <Toast.Body>Need a really big person who can put on a really big bejewelled glove, and knows how to snap their fingers dramatically</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </div>
  );
}

export default HomePage