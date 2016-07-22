import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStands } from '../actions/index';

import image from '../images/img.jpg';

class StandsList extends Component {
  componentWillMount() {
    this.props.fetchStands();
  }

  renderStands() {
    const imagePath = '../images/';

    return this.props.items.map((item) => {
      return (
        <div className="box" key={item.id}>
          <div className="box__inner">
            <img className="box__image" src={image} />
          </div>
        </div>
      );
    })
  };

  render() {
    if (this.props.items.length === 0) {
      return(
        <div>Loading...</div>
      );
    }

    return (
      <div>
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
