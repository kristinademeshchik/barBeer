import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  filterMusicByType,
  filterMusicByMark,
  filterMusicByView,
  filterMusicByCountry,
  filterMusicByShape,
  filterMusicByTurn
} from '../actions/index';

class StandsFilters extends Component {
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
              defaultValue={this.props.selectedType}
              onChange={e => this.props.filterMusicByType(e.target.value)}>
              <option value="all">Тип</option>
              {this.props.type.map((y, i) =>
                  <option key={i} value={y}>{y}</option>
              )}
            </select>
          </div>

          <div className="form-group">
            <select
              className="form-group__select"
              defaultValue={this.props.selectedMark}
              onChange={e => this.props.filterMusicByMark(e.target.value)}>
              <option value="all">Марка</option>
              {this.props.mark.map((y, i) =>
                  <option key={i} value={y}>{y}</option>
              )}
            </select>
          </div>

          <div className="form-group">
            <select
              className="form-group__select"
              defaultValue={this.props.selectedView}
              onChange={e => this.props.filterMusicByView(e.target.value)}>
              <option value="all">Вид</option>
              {this.props.view.map((y, i) =>
                  <option key={i} value={y}>{y}</option>
              )}
            </select>
          </div>

          <div className="form-group">
            <select
              className="form-group__select"
              defaultValue={this.props.selectedCountry}
              onChange={e => this.props.filterMusicByCountry(e.target.value)}>
              <option value="all">Страна</option>
              {this.props.country.map((y, i) =>
                  <option key={i} value={y}>{y}</option>
              )}
            </select>
          </div>

          <div className="form-group">
            <select
              className="form-group__select"
              defaultValue={this.props.selectedShape}
              onChange={e => this.props.filterMusicByShape(e.target.value)}>
              <option value="all">Форма</option>
              {this.props.shape.map((y, i) =>
                  <option key={i} value={y}>{y}</option>
              )}
            </select>
          </div>

          <div className="form-group">
            <select
              className="form-group__select"
              defaultValue={this.props.selectedTurn}
              onChange={e => this.props.filterMusicByTurn(e.target.value)}>
              <option value="all">Оборот</option>
              {this.props.turn.map((y, i) =>
                  <option key={i} value={y}>{y}</option>
              )}
            </select>
          </div>
        </div>
      );
    }
  }
}

function getFilters(key, stands) {
  return stands.reduce((acc, item) => {
    if (!acc.includes(item[key])) {
      return [...acc, item[key]];
    }
    return acc;
  }, []);
}


function mapStateToProps(state) {
  if (!state.stands.items) {
    return { loaded: false }
  }

  const {type, mark, view, country, shape, turn, items} = state.stands;
  return {
    loaded: true,
    selectedType: type,
    selectedMark: mark,
    selectedView: view,
    selectedCountry: country,
    selectedShape: shape,
    selectedTurn: turn,
    type: getFilters('type', items),
    mark: getFilters('mark', items),
    view: getFilters('view', items),
    country: getFilters('country', items),
    shape: getFilters('shape', items),
    turn: getFilters('turn', items)
  }
}

export default connect(mapStateToProps, {
  filterMusicByType,
  filterMusicByMark,
  filterMusicByView,
  filterMusicByCountry,
  filterMusicByShape,
  filterMusicByTurn
})(StandsFilters);
