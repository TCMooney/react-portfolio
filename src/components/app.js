import React, { Component } from 'react';
import moment from 'moment';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Tom Mooney React Portfolio</h1>
        <div>{moment().format('MMMM DO YYYY, h:mm:ss a')}</div>
      </div>
    );
  }
}
