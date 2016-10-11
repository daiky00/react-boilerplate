import React, { Component } from 'react';
import {Grid, Row, Column} from 'react-cellblock';
import cx from 'classnames';
import s from './Features.css';

export default class Features extends Component {
  render() {
    return (
      <section className={s.features}>
        <Grid>
          <Row>
            <Column width="2/2">
              <h2>Features</h2>
            </Column>
            <Column width="1/3">
              <h3>Grid Layout Component</h3>
              <pre className={cx(s.code, s.textRed)}>{`
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
              <h3>Modular CSS</h3>
              <pre className={cx(s.code, s.textGreen)}>{`
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
              <h3>PostCSS</h3>
              <pre className={cx(s.code, s.textYellow)}>{`
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
