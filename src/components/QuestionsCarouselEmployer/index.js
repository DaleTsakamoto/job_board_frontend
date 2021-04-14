import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider, { createSliderWithTooltip } from 'rc-slider';

import {
  ButtonGroup,
  ToggleButton,
  Button,
  Form,
  Alert,
  Row,
  Col
} from 'react-bootstrap'

import './QuestionsCarouselEmployer.css'

import AutofillBox from '../AutofillBox'

function QuestionsCarouselEmployer({sendYesButton, setSendYesButton}) {
  const Range = createSliderWithTooltip(Slider.Range);
  const [range, setRange] = useState([0, 0])
  const [radioValue, setRadioValue] = useState('1');
  const [employerInfo, setEmployerInfo] = useState(null)
  const [employerCount, setEmployerCount] = useState(0)
  const [userCount, setUserCount] = useState(0)
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [userInfo, setUserInfo] = useState(null)


  const radios = [
    { name: 'Jr (0-3 yrs)', value: '1' },
    { name: 'Mid (3-5 yrs)', value: '2' },
    { name: 'Sr (5+ yrs)', value: '3' },
  ];

  const calcSalary = (val) => {
    setRange(val)
  }

  const sendInfo = () => {
    setSendYesButton(!sendYesButton)
  }

  const employerKeyPress = (e) => {
    setEmployerInfo(e.target.value)
  }

  const userKeyPress = (e) => {
    setUserInfo(e.target.value)
  }

  useEffect(() => {
    if (employerCount <= 100) {
      setShow1(true)
    }
  }, [employerCount])
  
  useEffect(() => {
    if (userCount <= 100) {
      setShow2(true)
    }
  },[userCount])


  return (
    <Carousel showIndicators={false} showThumbs={false} showArrows={true} >
      <div className='Questions-Carousel-Slides'>
      <Form.Group controlId='location'>
        <Form.Label>
            What is the closest large city to you?
        </Form.Label>
        <Form.Control style={{fontSize: 12}} />
      </Form.Group>
      </div>
      <div className='Questions-Carousel-Slides'>
        <Form.Group controlId='AboutUs'>
          <Form.Label>
            What do you love about your company?
          </Form.Label>
          <Form.Control style={{fontSize: 12}}as='textarea' rows={3} onChange={(e) => {
            employerKeyPress(e)
            setEmployerCount(e.target.value.length)
          }} />
          <div>{`${employerCount}/100`}</div>
          {employerCount > 100 && show1 ?
          <Alert style={{ height: '3rem' }} variant="danger" onClose={() => setShow1(false)} dismissible>
            <p className='words-alert'>Too many words!</p>
          </Alert>
            :
            null
          }
        </Form.Group>
      </div>
      <div className='Questions-Carousel-Slides'>
        <Form.Group controlId='AboutYou'>
          <Form.Label>
            What do look for in an employee?
          </Form.Label>
          <Form.Control style={{fontSize: 12}}as='textarea' rows={3} onChange={(e) => {
            userKeyPress(e)
            setUserCount(e.target.value.length)
          }} />
          <div>{`${userCount}/100`}</div>
          {userCount > 100 && show2 ?
          <Alert style={{ height: '3rem' }} variant="danger" onClose={() => setShow2(false)} dismissible>
            <p className='words-alert'>Too many words!</p>
                </Alert>
            :
            null
          }
        </Form.Group>
      </div>
      <div className='Questions-Carousel-Slides'>
        <AutofillBox />
      </div>
      <div className='Questions-Carousel-Slides'>
        <Form.Label> What level are you looking for? </Form.Label>
        <ButtonGroup toggle>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      </div>
      <div className='Questions-Carousel-Slides'>
      <Form.Label> What is your salary range? </Form.Label>
        <Range
          dotStyle={{ display: 'none' }}
          step={null}
          tipProps={{ visible: true }}
          tipFormatter={value => {
            if (value < 10000) return '$0'
            else if (value >= 10000 && value < 100000) return `$${value}`.slice(0, 3) + 'k'
            else return `$${value}`.slice(0, 4) + 'k'
          }
          }
          min={0}
          max={200000}
          marks={{ 0: '$0', 10000: '', 20000: '', 30000: '', 40000: '', 50000: '$50k', 60000: '', 70000: '', 80000: '', 90000: '', 100000: '$100k', 110000: '', 120000: '', 130000: '', 140000: '', 150000: '$150k', 160000: '', 170000: '', 180000: '', 190000: '', 200000: '$200k' }}
          defaultValue={range}
          onChange={(val) => calcSalary(val)} />
      </div>
      <div className='Questions-Carousel-Slides'>
        <p>Are you ready to be matched with your perfect candidate?</p>
        <Button onClick={sendInfo} variant="primary" size="lg" active>
          Yes!
        </Button>
      </div>
    </Carousel>
  );  
}

export default QuestionsCarouselEmployer;