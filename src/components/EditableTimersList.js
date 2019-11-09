import React, { Component } from 'react'
import EditableTimer from './EditableTimer';

export default class EditableTimerList extends Component {
    render() {

        const { timers } = this.props;

        const timersList = timers.map(({id,title,project,elapsed,runningSince}) => (
            <EditableTimer
                key={id}
                id={id}
                title={title}
                project={project}
                elapsed={elapsed}
                runningSince={runningSince}
            />
        ));

        return (
            <div id='timers'>
                {timersList}
            </div>
        );
    }
}
