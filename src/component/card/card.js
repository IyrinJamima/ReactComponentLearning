import React, { Component } from 'react';
import './card.css';

class Card extends Component {
    render() {
        return (
            <div>
                <div className="card">
                <h4 className="card1">Available Accounts</h4> 
                <table>
                    <tr>
                        <th>Account Name</th>
                        <th>Company</th>
                        <th>Email</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>Sample Accounts</td>
                        <td>Sample</td>
                        <td>Sample@.com</td>
                        <td>Sample</td>
                        <td><button className="tab"></button></td>
                        <td><button className="tab"></button></td>
                        <td><button className="tab"></button></td>
                    </tr>
                    <tr>
                        <td>Sample Accounts</td>
                        <td>Sample</td>
                        <td>Sample@.com</td>
                        <td>Sample</td>
                        <td><button className="tab"></button></td>
                        <td><button className="tab"></button></td>
                        <td><button className="tab"></button></td>
                    </tr>             
                    <tr>
                        <td>Sample Accounts</td>
                        <td>Sample</td>
                        <td>Sample@.com</td>
                        <td>Sample</td>
                        <td><button className="tab"></button></td>
                        <td><button className="tab"></button></td>
                        <td><button className="tab"></button></td>
                    </tr>              
                </table>
                </div>

            </div>
        );
    }        
}   

export default Card;