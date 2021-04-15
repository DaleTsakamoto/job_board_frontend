import { useEffect, useRef, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
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
  const matches = useSelector(state => state.matches)
  const [count, setCount] = useState(0)
  const [rating, setRating] = useState(0)
  const [like, setLike] = useState(false)
  let singleCard = useRef(null)

  useEffect(() => {
    if (sendYesButton) {
      let time = setTimeout(function () {
        singleCard.current.classList.remove("d-none")
        singleCard.current.classList.add("slit-in-vertical")
        clearTimeout(time)
       }, 2000);
    }
  }, [sendYesButton])

  const jobRated = () => {
    singleCard.current.classList.remove("slit-in-vertical")
    singleCard.current.classList.add("slit-out-vertical")
    let time = setTimeout(function () {
      setCount(prevCount => prevCount + 1)
      singleCard.current.classList.remove("slit-out-vertical")
      singleCard.current.classList.add("slit-in-vertical")
      clearTimeout(time)
     }, 2000);
  }

  return (
    <Card ref={singleCard} style={{ width: '22rem' }} className="d-none" >
          {
        matches[count] ?
          <>
      <Card.Img variant="top" src={matches[count].website} />
      <Card.Body>
        <Card.Title className="justify-content-md-space-between">{matches[count].name} {matches[count].JobPostings[0].experience === 1 ? 'Jr.' : null} {matches[count].JobPostings[0].experience === 2 ? 'Mid.' : null} {matches[count].JobPostings[0].experience === 3 ? 'Sr.' : null} {`$${matches[count].JobPostings[0].salary}`}</Card.Title>
        <Card.Text>
          What we're looking for:
        </Card.Text>
        <Card.Text>
          {matches[count].JobPostings[0].description}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <div style={{ textAlign: 'center', marginBottom: '-0.8rem'}}>My rating: {rating}</div>
        <Row className="justify-content-md-center">
          <Button onClick={() => {
            setLike(false)
            jobRated()
          }} variant="danger" style={{ width: '50px', height: '50px', borderRadius: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <IoMdClose style={{ fontSize: '30px', color: 'white', fontWeight: 'bold'}} />
          </Button>
          <Slider style={{ width: '10rem', margin: '1rem' }} min={0} max={100} onChange={(e) => setRating(e)} value={rating} />
          <Button onClick={() => {
            setLike(true)
            jobRated()
          }} variant="primary" style={{ width: '50px', height: '50px', borderRadius: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <AiFillHeart style={{ fontSize: '30px', color: 'white', fontWeight: 'bold'}} />
          </Button>
        </Row>
            </Card.Body>
            </>
        :
      null
    }
      </Card >
  )
}

export default CurrentJob