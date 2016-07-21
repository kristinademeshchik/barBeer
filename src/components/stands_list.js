import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStands } from '../actions/index';

class StandsList extends Component {
  componentWillMount() {
    this.props.fetchStands();
  }

  render() {
    return (
      <div>Place here stands list</div>
    )
  }
}

function MapStateToProps(state) {
  return {
    stands: state.stands
  };
}


export default connect(MapStateToProps, { fetchStands })(StandsList);
