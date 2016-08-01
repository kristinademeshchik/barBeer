import axios from 'axios';

export const FETCH_STANDS = 'FETCH_STANDS';
export const FILTER_MUSIC_BY_TYPE = 'FILTER_MUSIC_BY_TYPE';

export function fetchStands() {
  const url = '/data';
  const request = axios.get(url);

  return {
    type: FETCH_STANDS,
    payload: request
  };
}

export function filterMusicByType(param) {
  return {
    type: FILTER_MUSIC_BY_TYPE,
    payload: param
  };
}
