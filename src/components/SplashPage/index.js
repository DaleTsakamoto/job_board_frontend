import { useState } from 'react'
import {
  Button
} from 'react-bootstrap'


import './SplashPage.css'

function SplashPage() {

  return (
    <div className='SplashPage-Container'>
      <h1>Search Right</h1>
      <Button size="lg">Create Account</Button>
    </div>
  );
}

export default SplashPage