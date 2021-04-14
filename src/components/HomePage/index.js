import { useState, useRef } from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Collapse
} from 'react-bootstrap'

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import QuestionsCarouselEmployee from '../QuestionsCarouselEmployee'
import QuestionsCarouselEmployer from '../QuestionsCarouselEmployer'
import JobPanels from '../JobPanels'

// import '../fonts/Wickedqueen-Wyz34.ttf'
import './HomePage.css'

function HomePage() {
  const [rating, setRating] = useState(50)
  const [user, setUser] = useState('Employer')
  const [sendYesButton, setSendYesButton] = useState("false");
  const [open, setOpen] = useState(false);

  return (
      <div > 
        <Row noGutters={true}>
        <Col xs={10} sm={9} md={7} lg={5} style={{height: '100vh', backgroundColor: 'white'}}>
          <Card>
            <div className='Homepage-Job-Matches-Header'>My Matches</div>
            <Card.Header style={{ backgroundColor: 'whitesmoke', width: '100%' }}>Discover New Matches</Card.Header>
            <JobPanels />         
          </Card>
          </Col>
        <Col xs={12} md={7}>
          <div className="Homepage-Request-Container">
            <Card style={{ width: '20rem' }} className={sendYesButton ? null : "slit-out-vertical"} >
              <Card.Img variant="top" src="./background_1.jpeg" />
              <Card.Body>
                <Card.Title>Make a Match</Card.Title>
                <Card.Text>
                  Answer a few quick questions and get connected today:
                </Card.Text>
              </Card.Body>
              <Card.Body >
                {user === "Employer" ? 
                  <QuestionsCarouselEmployer sendYesButton={sendYesButton} setSendYesButton={setSendYesButton} />
                  :
                  <QuestionsCarouselEmployee sendYesButton={sendYesButton} setSendYesButton={setSendYesButton}/>
                }
              </Card.Body>
            </Card>
            {/* <Slider min={0} max={100} onChange={(e) => setRating(e)} value={rating} /> */}
            </div>
          </Col>
        </Row>
      </div>
  );
}

export default HomePage