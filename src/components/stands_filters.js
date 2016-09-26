import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  resetFilters,
  filterMusicByType,
  filterMusicByMark,
  filterMusicByView,
  filterMusicByCountry,
  filterMusicByShape,
  filterMusicByTurn,
  visibilityModal
} from '../actions/index';

class StandsFilters extends Component {
  authorInfo() {
    document.body.classList.toggle('menu-opened');
    this.props.visibilityModal('block')
  }

  render() {
    if (!this.props.loaded) {
      return (
        <div></div>
      );
    }

    else {
      return (
        <div>
          <div className="form-group">
            <select
              className="form-group__select"
              value={this.props.selectedType}
              onChange={e => this.props.filterMusicByType(e.target.value)}>
              <option value="all">Тип (все)</option>
              {this.props.type.map((y, i) =>
                  <option key={i} value={y}>{y}</option>
              )}
            </select>
          </div>

          <div className="form-group">
            <select
              className="form-group__select"
              value={this.props.selectedMark}
              onChange={e => this.props.filterMusicByMark(e.target.value)}>
              <option value="all">Марка (все)</option>
              {this.props.mark.map((y, i) =>
                  <option key={i} value={y}>{y}</option>
              )}
            </select>
          </div>

          <div className="form-group">
            <select
              className="form-group__select"
              value={this.props.selectedView}
              onChange={e => this.props.filterMusicByView(e.target.value)}>
              <option value="all">Вид (все)</option>
              {this.props.view.map((y, i) =>
                  <option key={i} value={y}>{y}</option>
              )}
            </select>
          </div>

          <div className="form-group">
            <select
              className="form-group__select"
              value={this.props.selectedCountry}
              onChange={e => this.props.filterMusicByCountry(e.target.value)}>
              <option value="all">Страна (все)</option>
              {this.props.country.map((y, i) =>
                  <option key={i} value={y}>{y}</option>
              )}
            </select>
          </div>

          <div className="form-group">
            <select
              className="form-group__select"
              value={this.props.selectedShape}
              onChange={e => this.props.filterMusicByShape(e.target.value)}>
              <option value="all">Форма (все)</option>
              {this.props.shape.map((y, i) =>
                  <option key={i} value={y}>{y}</option>
              )}
            </select>
          </div>

          <div className="form-group">
            <select
              className="form-group__select"
              value={this.props.selectedTurn}
              onChange={e => this.props.filterMusicByTurn(e.target.value)}>
              <option value="all">Оборот (все)</option>
              {this.props.turn.map((y, i) =>
                  <option key={i} value={y}>{y}</option>
              )}
            </select>
          </div>

          <div className="form-group form-group_links">
            <span className="form-group__link" onClick={() => this.props.resetFilters()}>сбросить фильтр</span>
          </div>

          <div className="form-group form-group_links">
            <span className="form-group__link" onClick={() => this.authorInfo()}>о сайте</span>
          </div>
        </div>
      );
    }
  }
}

function sortStands(type, mark, view, country, shape, turn, stands) {
  return stands
     .filter(stand => {
       return (
         (type == 'all' || type == stand.type) &&
         (mark == 'all' || mark == stand.mark) &&
         (view == 'all' || view == stand.view) &&
         (country == 'all' || country == stand.country) &&
         (shape == 'all' || shape == stand.shape) &&
         (turn == 'all' || turn == stand.turn)
       );
     });
 };

function getFilters(key, stands) {
  return stands.reduce((acc, item) => {
    if (!acc.includes(item[key])) {
      return [...acc, item[key]];
    }
    return acc;
  }, [])
  .sort();
}


function mapStateToProps(state) {
  if (state.stands.items.length === 0) {
    return { loaded: false }
  }

  const { type, mark, view, country, shape, turn, items } = state.stands;

  const filteredStandsForType = sortStands('all', mark, view, country, shape, turn, items);
  const filteredStandsForMark = sortStands(type, 'all', view, country, shape, turn, items);
  const filteredStandsForView = sortStands(type, mark, 'all', country, shape, turn, items);
  const filteredStandsForCountry = sortStands(type, mark, view, 'all', shape, turn, items);
  const filteredStandsForShape = sortStands(type, mark, view, country, 'all', turn, items);
  const filteredStandsForTurn = sortStands(type, mark, view, country, shape, 'all', items);
  return {
    loaded: true,
    selectedType: type,
    selectedMark: mark,
    selectedView: view,
    selectedCountry: country,
    selectedShape: shape,
    selectedTurn: turn,
    type: getFilters('type', filteredStandsForType),
    mark: getFilters('mark', filteredStandsForMark),
    view: getFilters('view', filteredStandsForView),
    country: getFilters('country', filteredStandsForCountry),
    shape: getFilters('shape', filteredStandsForShape),
    turn: getFilters('turn', filteredStandsForTurn)
  }
}

export default connect(mapStateToProps, {
  resetFilters,
  filterMusicByType,
  filterMusicByMark,
  filterMusicByView,
  filterMusicByCountry,
  filterMusicByShape,
  filterMusicByTurn,
  visibilityModal
})(StandsFilters);
