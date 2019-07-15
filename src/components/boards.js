import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import '../styles/boards.css';

import AddBoardCard from './addBoardCard';
import BoardCard from './boardCard';

import { addBoardReq } from '../actions';

class Boards extends React.Component {    
    constructor() {
      super();
    
      this.onAddBoard = this.onAddBoard.bind(this);
    }

    onAddBoard(name) {
      this.props.onAddBoard(name);
    }

    render() {
      return (
        <Fragment>
          <div className='container-fluid d-flex align-items-start flex-wrap px-5 '>

            <AddBoardCard onAddBoard={this.onAddBoard} />
            
            {Object.keys(this.props.boards).map((keyName, i) => {
              let board = this.props.boards[keyName];
              return (
                <Link to={`/b/${board.id}`} key={i} className="linkFont" >

                  <BoardCard name={board.name} />

                </Link>
              );
            })}

          </div>
        </Fragment>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    boards: state.boards
  }
}

const mapActionsToProps = {
    onAddBoard: addBoardReq
}
  
export default connect(mapStateToProps, mapActionsToProps)(Boards);