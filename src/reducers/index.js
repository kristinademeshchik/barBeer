import { combineReducers } from 'redux';

import StandsReducer from './reducer_stands';

const rootReducer = combineReducers({
  stands: StandsReducer
});

export default rootReducer;
