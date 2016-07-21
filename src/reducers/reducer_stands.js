import { FETCH_STANDS } from '../actions/index';

export default function(state = [], action) {

  switch (action.type) {
    case FETCH_STANDS:
      return [
        ...state,
        action.payload.data
      ];

    default:
      return state;
  }
}
