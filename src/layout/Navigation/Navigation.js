import React, {Component} from 'react';
import cx from 'classnames';
import s from './Navigation.css';
import { Link } from 'react-router';

class Navigation extends Component {
  render() {
    return (
        <nav>
          <ul className={s.nav}>
            <Link to='/'>Home</Link>
            <Link to='about'>About</Link>
          </ul>
        </nav>
      );
    }
  }
export default Navigation;
