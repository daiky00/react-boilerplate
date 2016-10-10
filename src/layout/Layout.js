import React, { Component } from 'react';
import HeaderHome from './HeaderHome/HeaderHome'
import Header from './Header/Header';

export default class Layout extends Component {

  render() {
    return (
      <div>
        {this.props.location.pathname === "/" ? <HeaderHome /> : <Header />}
        {this.props.children}
      </div>
    );
  }
};
