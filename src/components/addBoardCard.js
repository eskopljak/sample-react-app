import React, { Fragment } from 'react';

import '../styles/card.css';
import '../styles/addBoardCard.css';

import xicon from '../res/img/xicon.svg';

class AddBoardCard extends React.Component {    
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      boardTitle: '',
      errorMsg: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }
  
  onChange(e) {
    this.setState({
      boardTitle: e.target.value,
      errorMsg: ''
    })
  }

  onSubmit(e) {
    e.preventDefault();

    let input = this.state.boardTitle;
    if(this.validateInput(input)) {
      this.props.onAddBoard(input);

      this.setState({
        open: false,
        boardTitle: '',
        errorMsg: ''
      });
    }
    else {
      this.setState({
        errorMsg: 'Oops! Looks like you forgot the name!'
      })
    }    
  }

  validateInput(s) {
    // at least one non-whitespace character
    let regex = /\S/;

    return regex.test(s);
  }

  render() {      
    if(!this.state.open) {
      return (
        <div 
          className="card addBoardCard"
          onClick={() => {this.setState({
            open: true
          })}}>

          <h3 className='my-auto textSize outlinedText'>Create a new board...</h3>
          
        </div>
      )
    }

    return (
      <div className="card addBoardCard p-5 flex-column">
        <div className="d-flex justify-content-between">
          <h3 className='my-auto textSize outlinedText'>Creating a board</h3>
          <img src={xicon} className="xsignImg" onClick={() => {
            this.setState({
              open:false,
              errorMsg: ''
            })}
          } />
        </div>

        <hr className="horizontalLine" />

        <div>
          <h6 className="outlinedText">What shall we call the board?</h6>

          <form onSubmit={this.onSubmit}>
            <input 
              type="text" 
              onChange={this.onChange}
              value={this.state.boardTitle}
              className="textInputField p-2"
            />

            {this.state.errorMsg.length > 0 ? 
              <p className="errorText pt-2">{this.state.errorMsg}</p> :
              <Fragment>
                <br/>
                <br/>
              </Fragment>
            }

            <div className="d-flex px-3 justify-content-between">
              <div className="d-flex cancelDiv" onClick={() => {
                this.setState({
                  open: false,
                  errorMsg: ''
                })}
              }>
                <h6 className="outlinedText my-auto"><b>CANCEL</b></h6>
              </div>

              <div className="d-flex">
                <button className="createDiv py-2 px-4" type="submit">
                  <h6 className="my-auto" >CREATE</h6>
                </button>
              </div>
            </div>
            
          </form>

        </div>
      </div>
    )
  }
}
  
export default AddBoardCard;