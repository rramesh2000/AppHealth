import React, { Component } from 'react';
import{Table, Button} from "reactstrap";
import Program from './Program';
import moment from "moment";


export class Home extends Component {
  static displayName = Home.name;
  constructor() {
    super();
    this.state = {
        date: moment().format("DD-MM-YYYY hh:mm:ss")
    };
    this.OnclickHandler = this.OnclickHandler.bind(this);
}

OnclickHandler(){


}

  render () {
    return (
      <div>
       <ul class="list-unstyled">
         <li><Button color="primary" OnClick={this.OnclickHandler}  >Refresh</Button> </li>
       </ul>
      <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Status</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>       
        <Program name="App 1"  status="success" time={this.state.date} />
        <Program name="App 1"  status="success" time={this.state.date} />
        <Program name="App 1"  status="danger"  time={this.state.date} />        
        <Program name="App 1"  status="success" time={this.state.date} />
        <Program name="App 1"  status="success" time={this.state.date} />        
      </tbody>
    </Table>
      </div>
    );
  }
}
