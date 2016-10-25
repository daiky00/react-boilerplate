import React, {Component} from 'react';
import Link from 'react-router';
import Navigation from '../Navigation/Navigation';
import {Grid, Row, Column} from 'react-cellblock';
import CSSModules from 'react-css-modules';
import styles from './HeaderHome.css';
import code from './coding.svg';

class HeaderHome extends Component{
  render() {
    return (
        <header styleName="header">
          <Grid>
            <Row>
              <Column width="2/2">
                <Navigation />
              </Column>
              <Column width="2/2">
                <h1>React Boilerplate</h1>
                <h3>So you can concentrate in what matters to you</h3>
                <img styleName="coding" src={code} width="350px" height="350px" />
              </Column>
            </Row>
          </Grid>
        </header>
        );
      }
    }

export default CSSModules(HeaderHome, styles);
