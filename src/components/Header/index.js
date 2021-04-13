import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  InputGroup,

} from 'react-bootstrap'

import {IoMdSearch} from 'react-icons/io'
import { ImLocation } from 'react-icons/im'
import { FaHome } from 'react-icons/fa'
import { RiDatabaseLine } from 'react-icons/ri'

import './Header.css'

function Header() {
  return (
    <>
      <Navbar bg="transparent" expand="lg">
      <Navbar.Brand href="/">
      <img
        src="/tech_logo.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="Black hat logo"
      />
        </Navbar.Brand>
        <Form inline>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1"><IoMdSearch /></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </InputGroup>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1"><ImLocation /></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type="text" placeholder="Location" className="mr-sm-2" />
          </InputGroup>
        <Button className='Navbar-Search-Button' variant="outline-success">Search</Button>
      </Form>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/"><FaHome className="Header-Icons"/></Nav.Link>
          <Nav.Link href="/jobboard"><RiDatabaseLine className="Header-Icons"/></Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header