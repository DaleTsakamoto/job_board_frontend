import { useState, useEffect, useRef } from 'react'
import {
  Row,
  Col,
  Card,
} from 'react-bootstrap'

import 'rc-slider/assets/index.css';

import QuestionsCarouselEmployee from '../QuestionsCarouselEmployee'
import QuestionsCarouselEmployer from '../QuestionsCarouselEmployer'
import SidePanel from '../SidePanel'
import CurrentJob from '../CurrentJob'

// import '../fonts/Wickedqueen-Wyz34.ttf'
import './HomePage.css'

function HomePage() {
  const [rating, setRating] = useState(50)
  const [user, setUser] = useState('User')
  const [sendYesButton, setSendYesButton] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false)
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
            <CurrentJob isLoaded={ isLoaded} sendYesButton={sendYesButton}/>
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
                  <QuestionsCarouselEmployee setIsLoaded={setIsLoaded} sendYesButton={sendYesButton} setSendYesButton={setSendYesButton}/>
                }
              </Card.Body>
            </Card>
            </div>
          </Col>
        </Row>
      </div>
  );
}

export default HomePage