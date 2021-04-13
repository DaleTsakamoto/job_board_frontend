import React, { Component, useState } from "react";
import Slider from "react-slick";

import {Button} from 'react-bootstrap'

import './QuestionsCarousel.css'

// function Questions() {
//   const [next, setNext] = useState(false)
// }

class QuestionsCarousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      arrows: false,
      dots: false,
      fade: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
            <h3>1</h3>
          </div>
          <div key={2}>
            <h3>2</h3>
          </div>
          <div key={3}>
            <h3>3</h3>
          </div>
          <div key={4}>
            <h3>4</h3>
          </div>
        </Slider>
        <div style={{ textAlign: "center" }}>
          <Button variant="primary" size="sm" onClick={this.previous}>
            Previous
          </Button>{' '}
          <Button variant="primary" size="sm" onClick={this.next}>
            Next
          </Button>
        </div>
      </div>
    );
  }
}

export default QuestionsCarousel