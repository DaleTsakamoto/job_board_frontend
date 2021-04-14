import {Route, Switch} from 'react-router-dom'

import './App.css';

import HomePage from './components/HomePage'
import Header from './components/Header'
import SplashPage from './components/SplashPage'


function App() {
  return (
    <Switch>
      <Route path='/splash'>
        <Header />
        <SplashPage />
      </Route>
      <Route path='/'>
        {/* <Header /> */}
        <HomePage />
      </Route>
    </Switch>
  );
}

export default App;
