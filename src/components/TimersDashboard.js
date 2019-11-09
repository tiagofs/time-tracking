import React, { Component } from 'react'
import EditableTimerList from './EditableTimersList';
import ToggleableTimerForm from './ToggleableTimerForm';

export default class TimersDashboard extends Component {

    state = {
        timers: [
            {
                id: 1,
                title: "Mow the lawn",
                project: "House Chores",
                elapsed: 5520654,
                runningSince: 1551385150973,
            },
            {
                id: 2,
                title: "Clear paper jam",
                project: "Office Chores",
                elapsed: 1273998,
                runningSince: null,
            },
        ]
    }

    render() {
        return (
            <div className='ui three column centered grid'>
                <div className='column'>
                    <EditableTimerList timers={this.state.timers} />
                    <ToggleableTimerForm />
                </div>
            </div>
        );
    }
}