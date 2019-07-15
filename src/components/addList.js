import React from 'react';
import '../styles/taskList.css';
import '../styles/addList.css';

import xicon from '../res/img/xicon.svg';

export default class addList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            listName: '',
            errorMsg: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.validateInput = this.validateInput.bind(this);
    }

    onChange(e) {
        this.setState({
            listName: e.target.value,
            errorMsg: ''
        })
    }

    onSubmit(e) {
        e.preventDefault();

        let input = this.state.listName;
        if (this.validateInput(input)) {
            this.props.onAddList(input);

            this.setState({
                listName: ''
            });
        }
        else {
            this.setState({
                errorMsg: 'give me a name!'
            })
        }  
    }

    validateInput(s) {
        // at least one non-whitespace character
        let regex = /\S/;
    
        return regex.test(s);
    }

    render() {
        if(!this.state.open)
        {
            return (
                <div 
                    className="border align-self-start flex-column d-flex p-3 blueBox"
                    onClick={() => { this.setState({ open: true }) }}
                >
                    <h3 className='addListText my-auto'>Add a list...</h3>
                </div>
            )
        }

        return (
                <div className="border align-self-start flex-column taskList d-flex">      
                
                    <img
                        src={xicon} 
                        className="xsignImg align-self-end"
                        onClick={() => {
                            this.setState({ 
                                open: false ,
                                errorMsg: ''
                            });
                        }}
                    />     

                    <form className="mb-2 px-3 py-1" onSubmit={this.onSubmit}>
                        <input 
                            type="text" 
                            placeholder="add a list"
                            onChange={this.onChange}
                            value={this.state.listName}
                            className="inputTextField p-2"
                        />
                    </form>

                    <p>{this.state.errorMsg}&nbsp;</p>

                </div>
        )
    }
}

