import React, {Component} from 'react';
import s from './Header.css';
import Link from 'react-router';
import Navigation from '../Navigation/Navigation';
import logoUrl from './logo.svg';

class Header extends Component{
  render() {
    return (
        <header className={s.header}>
          <img src={logoUrl} width="38" height="38" alt="React" />
          Anime
          <Navigation />
        </header>
        );
      }
    }

export default Header;
