import { combineReducers } from 'redux';
import PhonesReducer from './reducer_phones'

const rootReducer = combineReducers({
  phones: PhonesReducer
});

export default rootReducer;
