import React, { Component } from 'react';
import HeaderHome from './HeaderHome/HeaderHome'
import Header from './Header/Header';
import Helmet from "react-helmet";

export default class Layout extends Component {
  render() {
    return (
      <div>
        { /* Hacky way of adding some SEO please erase this and make it right */ }
        <Helmet
          title={this.props.location.pathname === "/" ? 'HOME' : `${this.props.location.pathname.replace(/[^\w\s!?]/g,' ').toUpperCase()}`}
          titleTemplate="%s | React Boilerplate"
          meta={[
            { name: 'description', content: 'React-Boilerplate | So you can concentrate in what matters to you' },
          ]}
        />
        { /*END*/ }

        { /* LAYOUT */ }
        {this.props.location.pathname === "/" ? <HeaderHome /> : <Header />}
        {this.props.children}
        { /* END */ }
      </div>
    );
  }
};
