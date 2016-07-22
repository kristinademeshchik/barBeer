import { FETCH_STANDS } from '../actions/index';

const INITIAL_STATE = {
  items: [],
  filters: null
};

export default function(state = INITIAL_STATE, action) {

  switch (action.type) {

    case FETCH_STANDS:
      return {
        ...state,
        items: action.payload.data
      };

    default:
      return state;
  }
}
