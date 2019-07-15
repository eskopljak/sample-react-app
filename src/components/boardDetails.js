import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import '../styles/card.css'

import TaskList from './taskList';
import AddList from './addList';

import { addListReq, addTaskReq, taskFinishedReq, taskMoveReq } from '../actions';

class BoardDetails extends React.Component {  
  constructor(props) {
    super(props);

    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    const { destination, source, draggableId } = result;

    if(destination) {
      if(destination.droppableId !== source.droppableId || destination.index !== source.index) {
        this.props.onTaskMove(draggableId, source.droppableId, destination.droppableId, source.index, destination.index)
      }
    }
  }

  render() {
    let board = this.props.boards[this.props.match.params.id];

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className='container-fluid d-flex flex-wrap px-5'>

          {board.lists.map((listId) => {            
            return (
                <TaskList 
                  key={listId} 
                  list={this.props.lists[listId]} 
                  tasks={this.props.tasks} 
                  onTaskFinished={this.props.onTaskFinished} 
                  onAddTask={(name, finished) => {
                    this.props.onAddTask(board.id, listId, name, finished);
                  }}
                />
            );
          })}

          <AddList onAddList={(name) => {
              this.props.onAddList(board.id, name);
            }} />

        </div>
      </DragDropContext>
    );

    
    return (
      <Fragment>
        <div className='container-fluid d-flex align-items-start flex-wrap px-5'>
            
          {this.getLists().map((list) => {
            return (
              <TaskList key={list.id} />
            );
          })}

          <div className='addList'>
            <h3 className='centered'>Add a list...</h3>
          </div>
          

        </div>
      </Fragment>
    );
  }
}
  
const mapStateToProps = (state, props) => {
  return {
    boards: state.boards,
    lists: state.lists,
    tasks: state.tasks
  }
}

const mapActionsToProps = {
  onAddList: addListReq,
  onAddTask: addTaskReq,
  onTaskFinished: taskFinishedReq,
  onTaskMove: taskMoveReq
}

export default connect(mapStateToProps, mapActionsToProps)(BoardDetails);