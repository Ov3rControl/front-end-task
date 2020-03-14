import { FETCH_SESSIONS } from '../actions/types';

const initialState = {
  data: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SESSIONS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
