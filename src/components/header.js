import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

import icon from '../res/img/icon.svg';

class Header extends React.Component {    
    render() {
        return (
            <div className="container-fluid text-center header">
                <Link to="/">
                    <img className="icon" src={icon}/>
                </Link>
            </div>
        );
    }
}

export default Header;