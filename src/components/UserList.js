import React, {Component} from 'react';
import UserComponent from '../components/UserComponent'; 

class UserList extends Component{

  render () {
    let _this = this;

    return (
      <ul className="user-list"> 
        {
          this.props.users.map((user) => {  
            return <UserComponent user={user} deleteItem={this.props.deleteItem} updateItem={this.props.updateItem}/>  
          })
        }
      </ul>
    );

  }

}

export default UserList;