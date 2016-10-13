import React, {Component} from 'react';
import { Link } from 'react-router';
import logoUrl from './logo.svg';
import styles from './Navigation.css';
import CSSModules from 'react-css-modules';
import cx from 'classnames';

class Navigation extends Component {
  render() {
    return (
        <nav styleName='nav'>
          <Link styleName='link' to='/'>
            <span styleName='logo'><img src={logoUrl} width="45" height="45" alt="logo" />Company</span>
            <small>Company made their website with React Boilerplate</small>
          </Link>
          <ul styleName='ul'>
            <li styleName='li'><Link styleName='link' to='about'>About</Link></li>
          </ul>
        </nav>
      );
    }
  }
export default CSSModules(Navigation, styles);
