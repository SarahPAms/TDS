import axios from 'axios';

const API_KEY = 'Token "1c7ff3f6-769e-44db-a7ce-97bef6f32341"';
const ROOT_URL = 'https://pcnltelecom.tdsapi.com';
const FILTERED_BRAND = '/portal/api/popular/propositions?brand_id';

export const FETCH_PLANS = 'FETCH_PLANS';

export function fetchPlans(phone_id){
  const propositions_url = `${ROOT_URL}${FILTERED_BRAND}=${phone_id}`;
  console.log("fetching plans")
  const request = axios.get(propositions_url, { 'headers': { 'Authorization' : API_KEY }})
  console.log(request)

   return{
     type: FETCH_PLANS,
     payload: request,
   }
}
