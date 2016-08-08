import React, { Component } from 'react';
import { connect } from 'react-redux';

import StandsFilters from './stands_filters';

class Header extends Component {
  toggleMenuHandler() {

  }

  render() {
    return(
      <header className="header">
        <div className="header__logo-container">
          <img className="header__logo" src={require('../images/logo.png')} />
          <p className="header__info">Частная коллекция бирдекелей | {this.props.stands.items.length}</p>
        </div>
        <div className="header__filter">
          <span className="toggle-switch" onClick={toggleMenuHandler}>
            <span className="toggle-switch__inner">
              <span className="toggle-switch__line">toggle menu</span>
            </span>
          </span>
          <div className="header__inner">
            <StandsFilters />
          </div>
        </div>
      </header>
    );
  }
};

function mapStateToProps(state) {
  return {
    stands: state.stands
  }
}

export default connect(mapStateToProps)(Header);
