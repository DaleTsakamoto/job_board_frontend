import { useState, useEffect, useRef } from 'react'
import {
  Row,
  Col,
  Card,
  Button,
} from 'react-bootstrap'

import {FaConnectdevelop} from 'react-icons/fa'

import 'rc-slider/assets/index.css';

import QuestionsCarouselEmployee from '../QuestionsCarouselEmployee'
import QuestionsCarouselEmployer from '../QuestionsCarouselEmployer'
import JobPanels from '../JobPanels'
import SidePanel from '../SidePanel'
import CurrentJob from '../CurrentJob'

// import '../fonts/Wickedqueen-Wyz34.ttf'
import './HomePage.css'

function HomePage() {
  const [rating, setRating] = useState(50)
  const [user, setUser] = useState('User')
  const [sendYesButton, setSendYesButton] = useState(false);
  const [open, setOpen] = useState(false);
  let mainCard = useRef(null)

  useEffect(() => {
    if (sendYesButton) {
      let time = setTimeout(function () {
        mainCard.current.classList.remove("slit-in-vertical")
        mainCard.current.classList.add("d-none")
        clearTimeout(time)
       }, 1000);
    }
  }, [sendYesButton])

  return (
    <div >
      <SidePanel />
      <Row noGutters={true}>
        <Col xs={12} md={7}>
          <div className="Homepage-Request-Container">
            <CurrentJob sendYesButton={sendYesButton}/>
            <Card ref={mainCard} style={{ width: '22rem' }} className={sendYesButton ? "slit-out-vertical" : null} >
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