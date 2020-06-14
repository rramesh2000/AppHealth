import React, { Component } from 'react';   
import {tr,th,td,Button} from 'reactstrap';

class Program extends Component {
 

    render() { 
    return (
        <tr>
        <th scope="row">3</th>
        <td>{this.props.name}</td>
        <td><Button color={this.props.status} size="lg" disabled></Button></td>
        <td>{this.props.time}</td>
      </tr>); 
 
    }
}
 
export default Program;