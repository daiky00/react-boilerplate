import React, { Component } from 'react';
import confused from './confused.svg'
export default class NotFound extends Component {

  render() {
    return (
      <section>
      <img src={confused} width="200px" height="200px"/>
        <h1>404 NotFound</h1>
        </section>
    );
  }
};
