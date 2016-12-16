import React, {Component} from 'react';
import UserComponent from '../components/UserComponent'; 
import { Container, Row, Col, Table } from 'reactstrap';

class UserList extends Component{

  render () {
    let _this = this;
    return (
      <div>
        {
          this.props.users.map((user) => {  
            return (
              <div key={user.id}>
                <UserComponent user={user} deleteItem={this.props.deleteItem} updateItem={this.props.updateItem}/> 
              </div>
            )  
          })
        }
      </div>
    );

  }

}

export default UserList;