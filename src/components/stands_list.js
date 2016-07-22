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
          <div className="box__inner">
            <img className="box__image" src={require(`../images/${item.imgSrc}`)} />
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
