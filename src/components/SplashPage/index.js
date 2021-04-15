import { useState } from 'react'
import {
  Button
} from 'react-bootstrap'

import CreateAccountModal from '../CreateAccountModal'
import './SplashPage.css'


function SplashPage() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className='SplashPage-Container'>
        <h1>Search Right</h1>
        <Button size="lg" onClick={() => setModalShow(true)}>Create Account</Button>
      </div>
      <CreateAccountModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
    </>
  );
}

export default SplashPage