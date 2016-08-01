import { FETCH_STANDS, FILTER_MUSIC_BY_TYPE } from '../actions/index';

const INITIAL_STATE = {
  items: []
};

export default function(state = INITIAL_STATE, action) {

  switch (action.type) {

    case FETCH_STANDS:
      return {
        ...state,
        items: action.payload.data,
        type: 'all'
      };

    case FILTER_MUSIC_BY_TYPE:
      return {
        ...state,
        type: action.payload
      };

    default:
      return state;
  }
}
