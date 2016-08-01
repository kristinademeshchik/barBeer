import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterMusicByType } from '../actions/index';

class StandsFilters extends Component {
  render() {
    if (!this.props.loaded) {
      return (
        <div></div>
      );
    }

    else {
      return (
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

  const {type, items} = state.stands;
  return {
    loaded: true,
    selectedType: type,
    type: getFilters('type', items)
  }
}

export default connect(mapStateToProps, { filterMusicByType })(StandsFilters);
