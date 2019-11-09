import React, { Component } from 'react'
import { helpers } from '../helpers';


export default class Timer extends Component {
  render() {
      const {title, project, elapsed, runningSince} = this.props;
      const elapsedString = helpers.renderElapsedString(elapsed);
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
            <span className='right floated edit icon'>
                <i className='edit icon' />
            </span>
            <span className='right floated trash icon'>
                <i className='trash icon' />
            </span>
            </div>
        </div>
        <div className='ui bottom attached blue basic button'>
            Start
        </div>
    </div>
    )
  }
}
