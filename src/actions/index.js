import axios from 'axios';

export const FETCH_STANDS = 'FETCH_STANDS';

export function fetchStands() {
  const request = axios.get('data/data.json');
  
  return {
    type: FETCH_STANDS,
    payload: request
  }
}
