import {Route, Switch} from 'react-router-dom'

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
