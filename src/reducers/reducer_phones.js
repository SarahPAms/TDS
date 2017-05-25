import { FETCH_PHONES } from '../actions/index';

export default function(state = [], action){
  switch (action.type){
  case FETCH_PHONES:
  //concat action.payload.data to state
    return [ action.payload.data, ...state ];
  }
  return state;
}
