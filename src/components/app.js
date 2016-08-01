import React, { Component } from 'react';

import StandsList from './stands_list';
import Header from './header';

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <StandsList />
      </div>
    );
  }
}
