import {
  FETCH_STANDS,
  RESET_FILTERS,
  FILTER_MUSIC_BY_TYPE,
  FILTER_MUSIC_BY_MARK,
  FILTER_MUSIC_BY_VIEW,
  FILTER_MUSIC_BY_COUNTRY,
  FILTER_MUSIC_BY_SHAPE,
  FILTER_MUSIC_BY_TURN,
  VISIBILITY_MODAL
} from '../actions/index';

const INITIAL_STATE = {
  items: []
};

export default function(state = INITIAL_STATE, action) {

  switch (action.type) {

    case FETCH_STANDS:
      return {
        ...state,
        items: action.payload.data,
        type: 'all',
        mark: 'all',
        view: 'all',
        country: 'all',
        shape: 'all',
        turn: 'all',
        modalVisibility: 'none'
      };

    case RESET_FILTERS:
      return {
        ...state,
        type: 'all',
        mark: 'all',
        view: 'all',
        country: 'all',
        shape: 'all',
        turn: 'all'
      };

    case FILTER_MUSIC_BY_TYPE:
      return {
        ...state,
        type: action.payload
      };

    case FILTER_MUSIC_BY_MARK:
      return {
        ...state,
        mark: action.payload
      };

    case FILTER_MUSIC_BY_VIEW:
      return {
        ...state,
        view: action.payload
      };

    case FILTER_MUSIC_BY_COUNTRY:
      return {
        ...state,
        country: action.payload
      };

    case FILTER_MUSIC_BY_SHAPE:
      return {
        ...state,
        shape: action.payload
      };

    case FILTER_MUSIC_BY_TURN:
      return {
        ...state,
        turn: action.payload
      };

    case VISIBILITY_MODAL:
      return {
        ...state,
        modalVisibility: action.payload
      };

    default:
      return state;
  }
}
