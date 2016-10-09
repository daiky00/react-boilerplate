import React, {Component} from 'react';
import cx from 'classnames';
import s from './Navigation.css';
import { Link } from 'react-router';
import logoUrl from './logo.svg';

class Navigation extends Component {
  render() {
    return (
        <nav className={s.nav}>
          <Link className={s.link} to='/'>
            <span className={s.logo}><img src={logoUrl} width="45" height="45" alt="logo" />Brand Name</span>
          </Link>
          <ul className={s.ul}>
            <li className={s.li}><Link className={s.link} to='about'>About</Link></li>
          </ul>
        </nav>
      );
    }
  }
export default Navigation;
