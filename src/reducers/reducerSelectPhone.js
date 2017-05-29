import { PHONE_SELECTED } from '../actions/selectPhone'

export default (state = [], { type, payload } = {}) => {
  switch (type){
  case PHONE_SELECTED:
  console.log("phone selected" )
  console.log(payload)
    return payload;

  default:
    return state
  }
}
