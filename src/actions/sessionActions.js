import { FETCH_SESSIONS } from './types';

export const fetchSessions = () => dispatch => {
  fetch('http://localhost:3000/api/allSessions')
    .then(res => res.json())
    .then(session =>
      dispatch({
        type: FETCH_SESSIONS,
        payload: session.session
      })
    );
};
