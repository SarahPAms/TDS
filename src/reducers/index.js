import { combineReducers } from 'redux';
import PhonesReducer  from './reducer_phones'
import PlansReducer from './reducer_plans'
import SelectedPhoneReducer from './reducerSelectPhone'

const rootReducer = combineReducers({
  phones: PhonesReducer,
  plans: PlansReducer,
  phone: SelectedPhoneReducer,
});

export default rootReducer;
