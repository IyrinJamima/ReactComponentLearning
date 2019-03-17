import React, { Component } from 'react';
import './contentheader.css';

class ContentHeader extends Component {
    render() {
        return (
            <div>
                <div className="nav1">
                <div className = "account">
                    <text>Account</text>
                </div>    
                <div className = "add">
                    <button className="button">Add</button>
                </div>
                </div>
            </div>    
        )
        
    }    
    
}

export default ContentHeader;
    









