import { FETCH_PHONES } from '../actions/fetchPhones';

export default (state = [], { type, payload } = {}) => {
  switch (type){
  case FETCH_PHONES:
  console.log("fetch phones")
  console.log(payload)
    return [].concat(payload.data);
  //concat payload data to state

  default:
    return state
  }
}
