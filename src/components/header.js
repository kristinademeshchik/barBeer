import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return(
      <header className="header">
        <div className="header__logo-container">
          <img className="header__logo" src={require('../images/logo.png')} />
        </div>
        <div className="header__filter">
          Test
        </div>
      </header>
    );
  }
};

export default connect()(Header);
