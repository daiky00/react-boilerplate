import React, { Component } from 'react';
import HeaderHome from './HeaderHome/HeaderHome'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Helmet from "react-helmet";
import CSSModules from 'react-css-modules';
import styles from './Layout.css';

class Layout extends Component {
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

        { /* ----------------------------- LAYOUT------------------------*/ }
        {this.props.location.pathname === "/" ? <HeaderHome /> : <Header />}
        <main styleName="main">
        {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
};

export default CSSModules(Layout, styles);
