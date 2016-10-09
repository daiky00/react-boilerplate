import React, { Component } from 'react';
import Header from './Header/Header'

export default class Layout extends Component {

  render() {
    return (
      <div>
          <Header />
          {this.props.children}
      </div>
    );
  }
};
