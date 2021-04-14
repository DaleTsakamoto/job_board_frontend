
import { Card, Accordion, Button } from 'react-bootstrap'

import './JobPanels.css'

function JobPanels() {
  return (
    <>
    <Accordion>
      {/* My Matches */}
      <Accordion.Toggle as={Card.Header} eventKey='0' className='add-cursor' style={{ backgroundColor: 'whitesmoke', width: '100%' }}> My Matches </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <Accordion>
            <Card style={{border: 'none'}}>
              <Accordion.Toggle as={Card.Header} eventKey='01' className='add-cursor' style={{backgroundColor: 'white'}}>Job Title 1</Accordion.Toggle>
              <Accordion.Collapse eventKey='01'>
                <Card.Body > Panel content 1</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={{border: 'none'}}>
                <Accordion.Toggle as={Card.Header} eventKey='02' className='add-cursor' style={{backgroundColor: 'white'}}>Job Title 2</Accordion.Toggle>
              <Accordion.Collapse eventKey='02'>
                <Card.Body > Panel content 2</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Accordion.Collapse>
      </Accordion>
      <Accordion>
      {/* My Favorites */}
      <Accordion.Toggle as={Card.Header} eventKey='0' className='add-cursor' style={{ backgroundColor: 'whitesmoke', width: '100%' }}> My Favorites </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <Accordion>
            <Card style={{border: 'none'}}>
              <Accordion.Toggle as={Card.Header} eventKey='01' className='add-cursor' style={{backgroundColor: 'white'}}>Job Title 1</Accordion.Toggle>
              <Accordion.Collapse eventKey='01'>
                <Card.Body > Panel content 1</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={{border: 'none'}}>
                <Accordion.Toggle as={Card.Header} eventKey='02' className='add-cursor' style={{backgroundColor: 'white'}}>Job Title 2</Accordion.Toggle>
              <Accordion.Collapse eventKey='02'>
                <Card.Body > Panel content 2</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Accordion.Collapse>
      </Accordion>
      </>
  )
}

export default JobPanels