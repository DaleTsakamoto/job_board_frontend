import {useEffect, useRef, useState} from 'react'

import {
  Card
} from 'react-bootstrap'

import './CurrentJob.css'

function CurrentJob({ sendYesButton }) {
  let singleCard = useRef(null)

  useEffect(() => {
    if (sendYesButton) {
      console.log("WE MADE IT IN HERE")
      let time = setTimeout(function () {
        singleCard.current.classList.remove("d-none")
        singleCard.current.classList.add("slit-in-vertical")
        clearTimeout(time)
       }, 2000);
    }
  }, [sendYesButton])
  return (
    <Card ref={singleCard} style={{ width: '22rem' }} className="d-none" >
      <Card.Img variant="top" src="./background_1.jpeg" />
      <Card.Body>
        <Card.Title>Make a Match</Card.Title>
        <Card.Text>
          Answer a few quick questions and get connected today:
        </Card.Text>
      </Card.Body>
      <Card.Body >
        <p>Hello</p>
      </Card.Body>
      </Card>
  )
}

export default CurrentJob