import {useState, useEffect} from 'react'
import { Route, Switch } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import './App.css';

import HomePage from './components/HomePage'
import Header from './components/Header'
import SplashPage from './components/SplashPage'

import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user)

  useEffect(() => {
    dispatch(sessionActions.restoreUser())
      .then(() => setIsLoaded(true));
  }, [dispatch]);

  return(
    <Switch>
      <Route path='/'>
        {sessionUser ?
          <HomePage />
          :
          <>
          <Header />
            <SplashPage />
          </>
        }
        </Route>
    </Switch>
  );
}

export default App;
