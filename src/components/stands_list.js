import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStands } from '../actions/index';

class StandsList extends Component {
  componentWillMount() {
    this.props.fetchStands();
  }

  renderStands() {
    return this.props.stands.map((stand) => {
      return (
        <div className="box" key={stand.id}>
          <img className="box__image" src={require(`../images/stands/${stand.id}.jpg`)} />
        </div>
      );
    })
  };

  render() {
    if (this.props.stands.length === 0) {
      return(
        <div className="stands-list"></div>
      );
    }

    return (
      <div className='stands-list container__inner'>
        {this.renderStands()}
      </div>
    )
  }
};

function sortStands(type, stands) {
  return stands
    .filter(stand => {
      return (
        (type == 'all' || type == stand.type)
      );
    });
};

function MapStateToProps(state) {

  if (!state.stands.items) {
    return {stands: []};
  }

  const { type, items } = state.stands;
  return {
    stands: sortStands(type, items)
  };
}


export default connect(MapStateToProps, { fetchStands })(StandsList);
