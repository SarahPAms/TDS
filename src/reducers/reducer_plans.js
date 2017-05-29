import { FETCH_PLANS } from '../actions/fetchPlans';

export default (state = [], { type, payload } = {}) => {
  switch (type){
  case FETCH_PLANS:
  console.log("fetch plans" )
  console.log(payload)
    return [].concat(payload.data);

  default:
    return state
  }
}
