import { useEffect, useRef, useState } from 'react'
import Slider from 'rc-slider'

import {
  Card,
  Row,
  Button
} from 'react-bootstrap'
import { AiFillHeart } from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'

import './CurrentJob.css'

function CurrentJob({ sendYesButton }) {
  const [rating, setRating] = useState(0)
  const [like, setLike] = useState(false)
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
        <Card.Title>Comp Name-Level-Approx Comp</Card.Title>
      <Card.Text>
          About us:
        </Card.Text>
        <Card.Text>
          What we're looking for:
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <div style={{ textAlign: 'center'}}>My rating: {rating}</div>
        <Row className="justify-content-md-center">
          <Button onClick={() => setLike(false)} variant="danger" style={{ width: '50px', height: '50px', borderRadius: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <IoMdClose style={{ fontSize: '30px', color: 'white', fontWeight: 'bold'}} />
          </Button>
          <Slider style={{ width: '10rem', margin: '1rem' }} min={0} max={100} onChange={(e) => setRating(e)} value={rating} />
          <Button onClick={() => setLike(true)} variant="primary" style={{ width: '50px', height: '50px', borderRadius: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <AiFillHeart style={{ fontSize: '30px', color: 'white', fontWeight: 'bold'}} />
          </Button>
        </Row>
      </Card.Body>
      </Card>
  )
}

export default CurrentJob