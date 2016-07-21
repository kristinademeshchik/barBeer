import { FETCH_STANDS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_STANDS:
      console.log(action.payload.data);
      return [...state, action.payload.data];
      break;

    default:
      return state;
  }
}
