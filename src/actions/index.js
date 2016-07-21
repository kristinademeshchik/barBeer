import axios from 'axios';

export const FETCH_STANDS = 'FETCH_STANDS';

export function fetchStands() {
  const url = '/data';
  const request = axios.get(url);

  return {
    type: FETCH_STANDS,
    payload: request
  };
}
