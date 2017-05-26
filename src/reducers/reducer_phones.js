import { FETCH_PHONES } from '../actions/fetchPhones';

export default function(state = [], action){
  switch (action.type){
  case FETCH_PHONES:
    console.log("monkey");
    break;
  //concat action.payload.data to state
    // return [ action.payload.data, ...state ];

  default:
    return state
  }
}
