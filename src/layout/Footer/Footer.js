import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Footer.css';

class Footer extends Component {
  render() {
    return (
        <footer styleName="footer">
        <span>Made by Francisco Pena</span>
        </footer>
      );
    }
  };

export default CSSModules(Footer, styles)
