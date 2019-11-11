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
        if (this.state.editFormOpen) {
            return ( 
                <TimerForm 
                    id = {this.props.id}
                    title = {this.props.title}
                    project = {this.props.project}
                    onFormSubmit={this.handleSubmit}
                    onFormClose={this.handleFormClose}
                />
            );
        } else {
            return ( 
                <Timer 
                    id = {this.props.id}
                    title = {this.props.title}
                    project = {this.props.project}
                    elapsed = {this.props.elapsed}
                    runningSince = {this.props.runningSince}
                    onEditClick={this.handleEditClick}
                    onDeleteClick={this.props.onTimerDelete}
                />
            );
        }
    }
}