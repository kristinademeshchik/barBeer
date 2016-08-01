import axios from 'axios';

export const FETCH_STANDS = 'FETCH_STANDS';
export const RESET_FILTERS = 'RESET_FILTERS';
export const FILTER_MUSIC_BY_TYPE = 'FILTER_MUSIC_BY_TYPE';
export const FILTER_MUSIC_BY_MARK = 'FILTER_MUSIC_BY_MARK';
export const FILTER_MUSIC_BY_VIEW = 'FILTER_MUSIC_BY_VIEW';
export const FILTER_MUSIC_BY_COUNTRY = 'FILTER_MUSIC_BY_COUNTRY';
export const FILTER_MUSIC_BY_SHAPE = 'FILTER_MUSIC_BY_SHAPE';
export const FILTER_MUSIC_BY_TURN = 'FILTER_MUSIC_BY_TURN';

export function fetchStands() {
  const url = '/data';
  const request = axios.get(url);

  return {
    type: FETCH_STANDS,
    payload: request
  };
}

export function resetFilters() {
  return {
    type: RESET_FILTERS
  }
}

export function filterMusicByType(param) {
  return {
    type: FILTER_MUSIC_BY_TYPE,
    payload: param
  };
}

export function filterMusicByMark(param) {
  return {
    type: FILTER_MUSIC_BY_MARK,
    payload: param
  };
}

export function filterMusicByView(param) {
  return {
    type: FILTER_MUSIC_BY_VIEW,
    payload: param
  };
}

export function filterMusicByCountry(param) {
  return {
    type: FILTER_MUSIC_BY_COUNTRY,
    payload: param
  };
}

export function filterMusicByShape(param) {
  return {
    type: FILTER_MUSIC_BY_SHAPE,
    payload: param
  };
}

export function filterMusicByTurn(param) {
  return {
    type: FILTER_MUSIC_BY_TURN,
    payload: param
  };
}
