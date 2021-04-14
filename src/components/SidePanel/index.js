import {useRef} from 'react'

import {
  Button,
  Card,
} from 'react-bootstrap'
import {FaConnectdevelop} from 'react-icons/fa'

import './SidePanel.css'

import JobPanels from '../JobPanels'

function SidePanel() {
  let side = useRef(null)

  function openNav() {
    side.current.style.width = "350px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    side.current.style.width = "0";
  }

  return (
    <>
      <div ref={side} id="mySidepanel" class="sidepanel">
        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
        <Card>
          <div className='Homepage-Job-Matches-Header'>
            <FaConnectdevelop className='HomePage-Tech-Logo' />
            <h1 className='HomePage-Logo-Title'>techSearch </h1>
          </div>
          <JobPanels />         
          </Card>
      </div>
      <Button class="openbtn" onClick={openNav}>&#9776; My Jobs</Button>
  </>
  )
}

export default SidePanel