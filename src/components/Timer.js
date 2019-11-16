import React, { Component } from 'react'
import { helpers } from '../helpers';
import TimerActionButton from './TimerActionButton';


export default class Timer extends Component {


    handleDeleteClick = () => {
        // this.props.onDeleteClick(this.props.id);
        // or 
        const { id, onDeleteClick } = this.props;
        onDeleteClick(id);
    }

    handleStartClick = () => {
        const {id, onStartClick} = this.props;
        onStartClick(id);
    }
    handleStopClick = () => {
        const {id, onStopClick} = this.props;
        onStopClick(id);
    }

    componentDidMount() {
       this.forceUpdateInterval = setInterval( () => this.forceUpdate(), 500 );
    }

    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval);
    }

    render() {
        const { id, title, project, elapsed, runningSince, onEditClick } = this.props;

        const elapsedString = helpers.renderElapsedString(elapsed, runningSince);
        return (
            <div className='ui centered card'>
                <div className='content'>
                    <div className='header'>
                        {title}
                    </div>
                    <div className='meta'>
                        {project}
                    </div>
                    <div className='center aligned description'>
                        <h2>
                            {elapsedString}
                        </h2>
                    </div>
                    <div className='extra content'>
                        <span
                            className='right floated edit icon'
                            onClick={onEditClick}
                        >
                            <i className='edit icon' />
                        </span>
                        <span
                            className='right floated trash icon'
                            onClick={this.handleDeleteClick}
                        >
                            <i className='trash icon' />
                        </span>
                    </div>
                </div>
                {/* <div className='ui bottom attached blue basic button'>
                    Start
                </div> */}
                <TimerActionButton 
                    timerIsRunning = {!!runningSince}
                    onStartClick = {this.handleStartClick}
                    onStopClick = {this.handleStopClick}
                />
            </div>
        )
    }
}
