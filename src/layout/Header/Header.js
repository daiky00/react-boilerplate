import React, {Component} from 'react';
import s from './Header.css';
import Link from 'react-router';
import Navigation from '../Navigation/Navigation';
import {Grid, Row, Column} from 'react-cellblock';
import code from './coding.svg';

class Header extends Component{
  render() {
    return (
        <header className={s.header}>
          <Grid>
            <Row>
              <Column width="2/2">
                <Navigation />
                <img className={s.coding} src={code} width="500px" height="500px" />
              </Column>
            </Row>
          </Grid>
        </header>
        );
      }
    }

export default Header;
