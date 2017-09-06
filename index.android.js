/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import EventCalendar from './src/EventCalendar';
let { width } = Dimensions.get('window');

export default class Cal extends Component {
  state = {
    events: [
      [
        { start: 100, end: 150, contentEvent: 'ahihi' },
        { start: 540, end: 600,contentEvent: 'ahihi' },
        { start: 560, end: 620,contentEvent: 'ahihi' },
        { start: 610, end: 670,contentEvent: 'ahihi' },
      ],
      [
        { start: 100, end: 200,contentEvent: 'ahihi' },
        { start: 250, end: 350,contentEvent: 'ahihi' },
        { start: 325, end: 400,contentEvent: 'ahihi' },
        { start: 300, end: 400,contentEvent: 'ahihi' },
      ],
      [
        { start: 100, end: 200,contentEvent: 'ahihi' },
        { start: 250, end: 350,contentEvent: 'ahihi' },
        { start: 325, end: 400,contentEvent: 'ahihi' },
        { start: 300, end: 400,contentEvent: 'ahihi' },
        { start: 250, end: 350,contentEvent: 'ahihi' },
        { start: 325, end: 400,contentEvent: 'ahihi' },
        { start: 300, end: 400,contentEvent: 'ahihi' },
      ],
    ],
  };

  _eventTapped(event) {
    alert(JSON.stringify(event));
  }

  _getEventsForIndex = (data: any, index: number) => {
    return this.state.events[Math.abs(index % this.state.events.length)];
  };

  render() {
    return (
      <View style={{marginTop: 10}}>
      <EventCalendar
        eventTapped={this._eventTapped}
        events={this.state.events}
        getItem={this._getEventsForIndex}
        width={width}
      />
      </View>
    );
  }
}
AppRegistry.registerComponent('Cal', () => Cal);
