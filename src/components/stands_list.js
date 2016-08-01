import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStands } from '../actions/index';

class StandsList extends Component {
  componentWillMount() {
    this.props.fetchStands();
  }

  renderStands() {
    return this.props.items.map((item) => {
      return (
        <div className="box" key={item.id}>
          <img className="box__image" src={require(`../images/stands/${item.id}.jpg`)} />
        </div>
      );
    })
  };

  render() {
    if (this.props.items.length === 0) {
      return(
        <div className="stands-list">Loading...</div>
      );
    }

    return (
      <div className='stands-list container__inner'>
        {this.renderStands()}
      </div>
    )
  }
}

function MapStateToProps(state) {
  return {
    items: state.stands.items
  };
}


export default connect(MapStateToProps, { fetchStands })(StandsList);
