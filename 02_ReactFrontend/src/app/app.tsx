import * as React from 'react';
import './app.css';

import * as logo from '../logo.svg';
import { BookContainer } from './books';
import * as Row from 'react-bootstrap/lib/Row';
import * as Col from 'react-bootstrap/lib/Col';
import Grid = require('react-bootstrap/lib/Grid');

export class App extends React.Component {

  public render() {
    return (
      <div className="App">
        <header className="App-header">
            <Grid>
                <Row>
                    <Col>
                        <img src={logo} className="App-logo" alt="logo" height="150px"/>
                    </Col>
                    <Col>
                        <h2 className="App-title">Welcome to React-Spring Library</h2>
                    </Col>
                </Row>
            </Grid>
        </header>

        <h2 className="App-intro">
          The following Books are Available:
        </h2>
          <BookContainer/>
      </div>
    );
  }
}
