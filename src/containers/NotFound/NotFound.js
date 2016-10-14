import React, { Component } from 'react';
import {Grid, Row, Column} from 'react-cellblock';
import confused from './confused.svg';
import CSSModules from 'react-css-modules';
import styles from './NotFound.css'

class NotFound extends Component {
  render() {
    return (
      <section styleName="not-found">
        <Grid>
          <Row>
            <Column offset="2/12" width="8/12">
              <img src={confused} width="200px" height="200px"/>
              <h1>404 NotFound</h1>
              <h3>Opps Something went wrong please go to our homepage</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              </p>
            </Column>
          </Row>
        </Grid>
      </section>
    );
  }
};

export default CSSModules(NotFound, styles);
