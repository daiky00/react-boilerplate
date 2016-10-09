import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import s from './App.css';
import Layout from './layout/Layout';
import Home from './containers/Home/Home';

export default class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Home} />
        </Route>
      </Router>
    );
  }
};
