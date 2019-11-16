import React, { Component } from 'react'
import EditableTimerList from './EditableTimersList';
import ToggleableTimerForm from './ToggleableTimerForm';
import { helpers } from '../helpers';

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

    handleCreateFormSubmit = (timer) => {
        this.createTimer(timer);
    };

    handleEditFormSubmit = (attrs) => {
        this.updateTimer(attrs);
    };

    handleDeleteClick = (timerId) => {
        this.setState({
            timers: this.state.timers.filter( timer => timer.id !== timerId )
        });
    }

    handleStartClick = (timerID) => {
        this.startTimer(timerID);
    }
    handleStopClick = (timerID) => {
        this.stopTimer(timerID);
    }

    createTimer = (timer) => {
        const t = helpers.newTimer(timer);
        this.setState({
            timers: this.state.timers.concat(t),
        });
    };

    updateTimer = (attrs) => {
        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === attrs.id) {
                    return Object.assign({}, timer, {
                        title: attrs.title,
                        project: attrs.project,
                    });
                } else {
                    return timer;
                }
            }),
        });
    };

    startTimer = (timerID) => {
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map( timer => {
                if (timer.id === timerID){
                    return {...timer, runningSince: now};
                } else {
                    return timer;
                }
            })
        })
    }

    stopTimer = (timerID) => {
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map( timer =>{
                if (timer.id === timerID){
                    const lastElapsed = now - timer.runningSince;
                    return {...timer, runningSince: null, elapsed: timer.elapsed + lastElapsed};
                } else {
                    return timer;
                }
            })
        })
    }

    render() {
        return (
            <div className='ui three column centered grid'>
                <div className='column'>
                    <EditableTimerList
                        timers={this.state.timers}
                        onFormSubmit={this.handleEditFormSubmit}
                        onDeleteClick={this.handleDeleteClick}
                        onStartClick={this.handleStartClick}
                        onStopClick={this.handleStopClick}
                    />
                    <ToggleableTimerForm
                        onFormSubmit={this.handleCreateFormSubmit}
                    />
                </div>
            </div>
        );
    }
}