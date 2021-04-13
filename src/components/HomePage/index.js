import { useState, useRef } from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap'

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import QuestionsCarousel from '../QuestionsCarousel'
import AutofillBox from '../AutofillBox'

// import '../fonts/Wickedqueen-Wyz34.ttf'
import './HomePage.css'

function HomePage() {
  const [rating, setRating] = useState(50)
  const [sendYesButton, setSendYesButton] = useState("false");
  // const inputEl = useRef(null);
  // const onButtonClick = () => {
  //   // `current` points to the mounted text input element
  //   console.log(inputEl.current.state.value);
  // };

  return (
    <div className='Homepage-container'>
      <Container className={sendYesButton ? null : "slit-out-vertical"} >
        <Row>
          <Col xs={6} md={4}>
          </Col>
          <Col xs={12} md={8}>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="./background_1.jpeg" />
              <Card.Body>
                <Card.Title>Make a Match</Card.Title>
                <Card.Text>
                  Answer a few quick questions and get connected today:
                </Card.Text>
              </Card.Body>
              <Card.Body >
                <QuestionsCarousel sendYesButton={sendYesButton} setSendYesButton={setSendYesButton}/>
              </Card.Body>
            </Card>
            {/* <Slider min={0} max={100} onChange={(e) => setRating(e)} value={rating} /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage