import React, { Component } from 'react';
import {Grid, Row, Column} from 'react-cellblock';
import CSSModules from 'react-css-modules';
import styles from './Features.css';
import postcss from './postcss.svg'
import modularcss from './mocss.png'
import grid from './grid.svg'

class Features extends Component {
  render() {
    return (
      <section styleName="features">
        <Grid>
          <Row>
            <Column width="2/2">
              <h2>Features</h2>
            </Column>
            <Column width="1/3">
              <img src={grid} width="250px" height="250px" />
              <h3>Grid Components</h3>
              <pre styleName="code text-red">{`
                <Grid>
                    <Row>
                        <Column width="1/3">
                               <YourComponent />
                        </Column>
                        <Column width="1/3">
                               <YourComponent />
                        </Column>
                        <Column width="1/3">
                               <YourComponent />
                        </Column>
                    </Row>
                </Grid>
              `}</pre>
            </Column>
            <Column width="1/3">
            <img src={modularcss} width="300px" height="250px" />
              <h3>Modular CSS</h3>
              <pre styleName="code text-green">{`
                import React, {Component} from 'react';
                import s from './Navigation.css';

                class Navigation extends Component {
                  render() {
                    return (
                        <nav className={s.nav}>
                          <ul className={s.ul}>
                            <li className={s.li}>About</li>
                          </ul>
                        </nav>
                      );
                    }
                  }
                export default Navigation;
              `}</pre>
            </Column>
            <Column width="1/3">
            <img src={postcss} width="250px" height="250px" />
              <h3>PostCSS</h3>
              <pre styleName="code text-yellow">{`
                @import '../../variables.css';

                .features {
                  color: var(--grey);
                  padding: 50px 0;
                  text-align: center;
                }

                .code {
                  background: var(--grey);
                  border-radius: 10px;
                  font-size: 1rem;
                  text-align: left;
                  line-height: 1.5;
                  min-height: 408px;
                }
              `}</pre>
            </Column>
          </Row>
        </Grid>
      </section>
    );
  }
};

export default CSSModules(Features, styles, { allowMultiple: true } )
