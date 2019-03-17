import React, { Component } from 'react';
//import  'src/App.css';
import './nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className = "navbar">
                    <text className="content">Dashboard</text>
                    <text className="content">Environment</text>
                    <text className="content">Projects</text>
                    <text className="content">Team</text>
                    <text className="content">Documentation</text>
                </div>    
                <div className = "navbar1">
                    <text className="content">Account</text>
                    <text className="content">Administration</text>
                    <text className="content">Settings</text>
                </div>
            </div>    
        )
    }
}

export default Nav;