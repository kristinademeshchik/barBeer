import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStands } from '../actions/index';

class StandsList extends Component {
  componentWillMount() {
    this.props.fetchStands();
  }

  componentDidUpdate() {
    let items = document.getElementsByClassName('box'),
      list = document.getElementsByClassName('container__inner')[0];

    this.setHeights(items, list);
    window.addEventListener('resize', function() {
      this.setHeights(items, list);
    }.bind(this));
  }

  setHeights(items, list) {
    let maxHeight = 250,
      perCell = Math.floor(list.clientHeight / maxHeight);

    let itemSize = window.innerHeight / (perCell + 1);
    for (let i = 0; i < items.length; i++) {
      items[i].style.height = `${itemSize}px`;
      items[i].style.width = `${itemSize}px`;
    }
  }

  renderStands() {
    return this.props.items.map((item) => {
      return (
        <div className="box" key={item.id}>
          <img className="box__image" src={require(`../images/${item.imgSrc}`)} />
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
