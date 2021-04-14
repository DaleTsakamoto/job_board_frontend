import { useState } from 'react'
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

// import '../fonts/Wickedqueen-Wyz34.ttf'
import './HomePage.css'

function HomePage() {
  const [rating, setRating] = useState(50)
  const [user, setUser] = useState('User')
  const [sendYesButton, setSendYesButton] = useState("false");
  const [open, setOpen] = useState(false);

  return (
    <div >
              <SidePanel />
      <Row noGutters={true}>
        {/* <Col xs={10} sm={9} md={7} lg={5} style={{height: '100vh', backgroundColor: 'white'}}>
          <Card>
            <div className='Homepage-Job-Matches-Header'>
              <FaConnectdevelop className='HomePage-Tech-Logo' />
              <h1 className='HomePage-Logo-Title'>techSearch </h1>
            </div>
            <Card.Header style={{ backgroundColor: 'whitesmoke', width: '100%' }}>My Matches</Card.Header>
            <JobPanels />         
          </Card>
        </Col> */}
        <Col xs={12} md={7}>
          <div className="Homepage-Request-Container">
            <Card style={{ width: '22rem' }} className={sendYesButton ? null : "slit-out-vertical"} >
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