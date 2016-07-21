import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStands } from '../actions/index';

class StandsList extends Component {
  componentWillMount() {
    console.log(this.props);
    this.props.fetchStands();
  }

  render() {
    return (
      <div>Place here stands list</div>
    )
  }
}

export default connect(null, { fetchStands })(StandsList);
