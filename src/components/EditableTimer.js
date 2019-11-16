import React, {Component} from 'react'
import TimerForm from './TimerForm';
import Timer from './Timer';

export default class EditableTimer extends Component {

    state = {
        editFormOpen: false,
    }

    handleEditClick = () => {
        this.openForm();
    };

    handleFormClose = () => {
        this.closeForm();
    };
    
    handleSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.closeForm();
    };

    openForm = () => {
        this.setState({ editFormOpen: true });
    };
    
    closeForm = () => {
        this.setState({ editFormOpen: false });
    };

    render() {

        const {id, title, project, elapsed, runningSince, onDeleteClick, onStartClick,onStopClick} = this.props;

        if (this.state.editFormOpen) {
            return ( 
                <TimerForm 
                    id = {id}
                    title = {title}
                    project = {project}
                    onFormSubmit={this.handleSubmit}
                    onFormClose={this.handleFormClose}
                />
            );
        } else {
            return ( 
                <Timer 
                    id = {id}
                    title = {title}
                    project = {project}
                    elapsed = {elapsed}
                    runningSince = {runningSince}
                    onEditClick={this.handleEditClick}
                    onDeleteClick={onDeleteClick}
                    onStartClick={onStartClick}
                    onStopClick={onStopClick}
                />
            );
        }
    }
}