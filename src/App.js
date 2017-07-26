import React, {Component} from 'react';
import Timeline from 'react-calendar-timeline'
import moment from 'moment'
import './App.css';

moment().format();




const items = [
    {id: 1, group: 1, title: 'item 1', start_time: moment(), end_time: moment().add(1, 'hour')},
    {id: 2, group: 2, title: 'item 2', start_time: moment().add(-0.5, 'hour'), end_time: moment().add(0.5, 'hour')},
    {id: 3, group: 1, title: 'item 3', start_time: moment().add(2, 'hour'), end_time: moment().add(3, 'hour')}
]

class App extends Component {
    constructor() {
        super()
        this.state = {
            timelineData: []
        }
    }

    componentDidMount() {
        fetch(process.env.PUBLIC_URL + 'data/timelineData.json')
            .then(response => response.json())
            .then(data => this.setState({timelineData: data}))

    }

    render() {
        const projects = this.state.timelineData.map( project => ({id: project.id, title: project.name}))

        console.log(this.state.timelineData)
        return (
            <div className="App">
                <Timeline groups={projects}
                          items={items}
                          defaultTimeStart={moment().add(-12, 'hour')}
                          defaultTimeEnd={moment().add(12, 'hour')}
                />
            </div>
        );
    }
}

export default App;
