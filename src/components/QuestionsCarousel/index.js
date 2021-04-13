import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider, { createSliderWithTooltip } from 'rc-slider';

import {
  ButtonGroup,
  ToggleButton
} from 'react-bootstrap'

import './QuestionsCarousel.css'

import AutofillBox from '../AutofillBox'

function QuestionsCarousel() {
  const Range = createSliderWithTooltip(Slider.Range);
  const [salary, setSalary] = useState(0)
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Jr (0-3 yrs)', value: '1' },
    { name: 'Mid (3-5 yrs)', value: '2' },
    { name: 'Sr (5+ yrs)', value: '3' },
  ];


  return (
    <Carousel showIndicators={ false} showThumbs={ false} showArrows={true} >
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
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      </div>
        <div className='Questions-Carousel-Slides'>
          <Range min={0} max={200000} />
        </div>
    </Carousel>
  );  
}

export default QuestionsCarousel