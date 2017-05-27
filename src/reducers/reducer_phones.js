import { FETCH_PHONES } from '../actions/fetchPhones';

export default (state = [], { action, payload } = {}) => {
  switch (action){
  case FETCH_PHONES:
    return [].concat(payload);
  //concat payload data to state

  default:
    return state
  }
}
