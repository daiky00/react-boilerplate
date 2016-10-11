import React, {Component} from 'react';
import s from './Header.css';
import Link from 'react-router';
import Navigation from '../Navigation/Navigation';
import {Grid, Row, Column} from 'react-cellblock';

class Header extends Component{
  render() {
    return (
        <header className={s.header}>
          <Grid>
            <Row>
              <Column width="2/2">
                <Navigation />
              </Column>
            </Row>
          </Grid>
        </header>
        );
      }
    }

export default Header;
