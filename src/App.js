import React, { Component } from 'react';
import Timeline from 'react-calendar-timeline'
import moment from 'moment'
import './App.css';

const groups = [
    {id: 1, title: 'group 1'},
    {id: 2, title: 'group 2'}
]

const items = [
    {id: 1, group: 1, title: 'item 1', start_time: moment(), end_time: moment([2017, 8, 31])},
    {id: 2, group: 2, title: 'item 2', start_time: moment([2017, 8, 25]), end_time: moment([2017, 8, 27])},
    {id: 3, group: 1, title: 'item 3', start_time: moment([2017, 8, 26]), end_time: moment([2017, 8, 28])}
]

class App extends Component {
  render() {
      console.log('xxx')
    return (
      <div className="App">
        <Timeline groups={groups}
                  items={items}
                  defaultTimeStart={moment([2017, 7, 31])}
                  defaultTimeEnd={moment([2017, 8, 31])}
                  />
      </div>
    );
  }
}

export default App;
