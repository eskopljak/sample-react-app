import React, { Fragment } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import '../styles/taskList.css'

import SingleTask from './singleTask';


class TaskList extends React.Component {  
    constructor(props) {
        super(props);

        this.state = {
            taskName: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.validateInput = this.validateInput.bind(this);
    }

    onChange(e) {
        this.setState({
            taskName: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        let input = this.state.taskName;
        if (this.validateInput(input)) {
            this.props.onAddTask(input, false);

            this.setState({
                taskName: ''
            });
        }
    }

    validateInput(s) {
        // at least one non-whitespace character
        let regex = /\S/;
    
        return regex.test(s);
    }
    
    render() {
        return (
            <Fragment>
                <div className="align-self-start flex-column border p-3 taskList d-flex">
                    <h3 className="taskNameText">{this.props.list.listName}</h3>
                    <hr/>

                    <form onSubmit={this.onSubmit}>
                        <input 
                            type="text"
                            className="inputTextField p-2"
                            value={this.state.taskName}
                            onChange={this.onChange}
                        />
                    </form>
                    
                    <Droppable droppableId={this.props.list.id}>
                        {(provided) => (
                            <div
                                style={{flexGrow: 1}}
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {this.props.list.tasks.map((taskId, index) => {
                                    return (
                                        <SingleTask 
                                            key={taskId} 
                                            task={this.props.tasks[taskId]} 
                                            onTaskFinished = {
                                                (finished) => {
                                                    this.props.onTaskFinished(taskId, finished);
                                                }
                                            }
                                            index={index}
                                        />
                                    )
                                })}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>

                </div>
            </Fragment>
        );
    }
}
  
export default TaskList;