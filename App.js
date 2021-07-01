/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import Navigation from './src/Navigation/Navigation';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return <Navigation />;
  }
}
