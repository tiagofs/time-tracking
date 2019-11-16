/* import React, { Component } from 'react'

export default class TimerActionButton extends Component {
  render() {

    const {timerIsRunning, onStartClick, onStopClick} =  this.props;

    if (timerIsRunning) {
        return (
            <div className='ui bottom attached red basic button' onClick={onStopClick}>
                Stop
            </div> 
        )
    }

    return (
        <div className='ui bottom attached green basic button' onClick={onStartClick}>
            Start
        </div> 
    )
    
  }
}
 */

import React from 'react'

const TimerActionButton = ({
    timerIsRunning,
    onStartClick,
    onStopClick,
}) => {
    //console.log(timerIsRunning)

    if (timerIsRunning) {
        return (
             <div className='ui bottom attached red basic button' onClick={onStopClick}>
                Stop
            </div> 
        )
    }

    return (
        <div className='ui bottom attached green basic button' onClick={onStartClick}>
            Start
        </div> 
    )
    
}

export default TimerActionButton;
