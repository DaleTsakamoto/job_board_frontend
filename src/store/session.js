import { fetch } from './csrf'

const SET_USER = 'session/setUser'

const setUser = (user) => {
  // debugger
  return {
    type: SET_USER,
    user
  }
}

export const login = (user) => async (dispatch) => {
  const { email, password, employer } = user;
  console.log("WORKS GOING IN!!!!!!")
  const res = await fetch('api/session/login', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      employer,
    }),
  })
  console.log("WORKS COMING OUT!!!", res)
  console.log(res)
  dispatch(setUser(res.data.user))
  return res;
}


export const signup = (user) => async (dispatch) => {
  const { email, password, firstName, lastName, employer } = user;
  const res = await fetch('/api/session/signup', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      firstName,
      lastName,
      employer
    }),
  })
  dispatch(setUser(res.data.user))
  return res;
}

export const restoreUser = () => async dispatch => {
  // debugger
  const res = await fetch('/api/session');
  console.log(res)
  dispatch(setUser(res.data));
  return res;
};

const initialState = { user: null }

const sessionReducer = (state = initialState, action) => {
  let newState;
  // debugger
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state)
      newState.user = action.user;
      return newState;
    default:
      return state;
  }
}


export default sessionReducer