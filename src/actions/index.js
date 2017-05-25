import axios from 'axios';

const API_KEY = 'token="1c7ff3f6-769e-44db-a7ce-97bef6f32341"';
const ROOT_URL = 'https://nltelecom.tdsapi.com';
const POPULAR_PHONES= '/portal/api/popular/phones';

export const FETCH_PHONES = 'FETCH_PHONES';

export function fetchPhones(model){
  const phones_url = `${ROOT_URL}&${POPULAR_PHONES}`;
  const phones_request = axios.get(phones_url, { 'headers': { 'AUTHORIZATION': API_KEY }});

  return{
    type: FETCH_PHONES,
    payload: phones_request,
  };
}
