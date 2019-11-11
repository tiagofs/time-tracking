import React, { Component } from 'react'
import { helpers } from '../helpers';


export default class Timer extends Component {

    
    handleDeleteClick = () => {
        this.props.onDeleteClick(this.props.id);
    }
    
    render() {
        const { title, project, elapsed, runningSince } = this.props;
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
                        <span
                            className='right floated edit icon'
                            onClick={this.props.onEditClick}
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
                <div className='ui bottom attached blue basic button'>
                    Start
        </div>
            </div>
        )
    }
}
