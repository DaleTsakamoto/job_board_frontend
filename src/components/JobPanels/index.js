
import { Card, Accordion, Button } from 'react-bootstrap'

import './JobPanels.css'

function JobPanels() {
  return (
    <>
      <Accordion>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey='0' className='add-cursor'>Job Title 1</Accordion.Toggle>
          <Accordion.Collapse eventKey='0'>
            <Card.Body > Panel content 1</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey='1' className='add-cursor'>Job Title 2</Accordion.Toggle>
          <Accordion.Collapse eventKey='1'>
            <Card.Body > Panel content 2</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      </>
  )
}

export default JobPanels