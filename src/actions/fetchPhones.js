import axios from 'axios';

const API_KEY = 'Token "1c7ff3f6-769e-44db-a7ce-97bef6f32341"';
const ROOT_URL = 'https://pcnltelecom.tdsapi.com';
const POPULAR_PHONES= '/portal/api/popular/phones';

export const FETCH_PHONES = 'FETCH_PHONES';

export default function fetchPhones(){
  const phones_url = `${ROOT_URL}${POPULAR_PHONES}`;
  console.log("fetching phones")
  const request = axios.get(phones_url, { 'headers': { 'Authorization' : API_KEY }})
  return{
    type: FETCH_PHONES,
    payload: request,
  }
}
