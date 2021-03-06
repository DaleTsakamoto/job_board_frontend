import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Form} from 'react-bootstrap'
import { Carousel } from 'react-responsive-carousel';
import Slider, { createSliderWithTooltip } from 'rc-slider';

import * as matchActions from "../../store/matches";

import {
  ButtonGroup,
  ToggleButton,
  Button,
} from 'react-bootstrap'

import './QuestionsCarouselEmployee.css'

import AutofillBox from '../AutofillBox'

function QuestionsCarouselEmployee({ sendYesButton, setSendYesButton, setIsLoaded }) {
  const dispatch = useDispatch();
  const Range = createSliderWithTooltip(Slider.Range);
  const [salary, setSalary] = useState([0, 0])
  const [experience, setExperience] = useState(1)
  const [errors, setErrors] = useState([])

  const radios = [
    { name: 'Jr (0-3 yrs)', value: 1 },
    { name: 'Mid (3-5 yrs)', value: 2 },
    { name: 'Sr (5+ yrs)', value: 3 },
  ];

  const calcSalary = (val) => {
    setSalary(val)
  }

  const sendInfo = () => {
    setSendYesButton(!sendYesButton)
    dispatch(matchActions.findMatches({ salary, experience }))
      .then(()=> setIsLoaded(true))
      .catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );

  }

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
        <AutofillBox />
      </div>
      <div className='Questions-Carousel-Slides'>
        <label>Enter your Level: </label>
        <ButtonGroup toggle>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={experience === radio.value}
            onChange={(e) => setExperience(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      </div>
        <div className='Questions-Carousel-Slides'>
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
          defaultValue={salary}
          onChange={(val) => calcSalary(val)} />
      </div>
      <div className='Questions-Carousel-Slides'>
      <ul>
              {errors.map((error, idx) => (
                  <li key={idx}>{error}</li>
              ))}
          </ul>
        <p>Are you ready to be matched with you perfect company?</p>
        <Button onClick={sendInfo} variant="primary" size="lg" active>
          Yes!
        </Button>
      </div>
    </Carousel>
  );  
}

export default QuestionsCarouselEmployee;