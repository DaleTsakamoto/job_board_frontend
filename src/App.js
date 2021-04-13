import {Route, Switch} from 'react-router-dom'

import './App.css';

import HomePage from './components/HomePage'
import Header from './components/Header'


function App() {
  return (
    <Switch>
      <Route path='/'>
        <Header />
        <HomePage />
      </Route>
    </Switch>
  );
}

export default App;
