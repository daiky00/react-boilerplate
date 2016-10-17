import React, {Component} from 'react';
import styles from './Header.css';
import Link from 'react-router';
import Navigation from '../Navigation/Navigation';
import CSSModules from 'react-css-modules';
import {Grid, Row, Column} from 'react-cellblock';

class Header extends Component{
  render() {
    return (
        <header styleName="header">
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

export default CSSModules(Header, styles);
