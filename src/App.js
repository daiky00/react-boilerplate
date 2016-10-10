import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import s from './app.css';
import Layout from './layout/Layout';
import Home from './containers/Home/Home';
import About from './containers/About/About';

export default class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Home} />
          <Route path="/about" component={About}/>
        </Route>
      </Router>
    );
  }
};
