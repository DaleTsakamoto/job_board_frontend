import { fetch } from './csrf'

const GET_MATCHES = 'matches/getMatches'

const getMatches = (matches) => {
  return {
    type: GET_MATCHES,
    matches
  }
}


export const findMatches = (matches) => async (dispatch) => {
  const { salary, experience } = matches;
  const res = await fetch('/api/matches', {
    method: 'POST',
    body: JSON.stringify({
      salary,
      experience
    }),
  })
  console.log(res.data.jobs)
  dispatch(getMatches(res.data.jobs))
  return res;
}

const initialState = { matches: null }

const matchesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_MATCHES:
      newState = Object.assign({}, action.matches)
      // newState = action.matches;
      return newState;
    default:
      return state;
  }
}

export default matchesReducer