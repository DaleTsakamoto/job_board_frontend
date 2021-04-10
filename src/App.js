import {Route, Switch} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage'

function App() {
  return (
    <Switch>
      <Route path='/'>
        <HomePage />
      </Route>
    </Switch>
  );
}

export default App;
