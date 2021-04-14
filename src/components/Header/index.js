import {
  Navbar,
  Button,
} from 'react-bootstrap'

import {FaConnectdevelop} from 'react-icons/fa'

import './Header.css'

function Header() {
  return (
    <>
      <Navbar bg="transparent" expand="xs sm md lg">
        <div className='Header-Navbar-Symbol-Holder'>
        <Navbar.Brand style={{ fill: 'white' }} href="/">
          <div>
            <FaConnectdevelop className='Header-Tech-Logo' />
          </div>
        </Navbar.Brand>
        <h1 className='Navbar-Logo-Title'>techSearch </h1>
        </div>
        <Button className="Navbar-Signin" size="md"> Log In </Button>
      </Navbar>
    </>
  )
}

export default Header