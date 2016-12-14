import React, {Component} from 'react';

class UserList extends Component{
  render () {
    let _this = this;
    
    return (
      <ul className="user-list">
        
          {
            this.props.users.map((user) => {       
              return (
                <li key={user.id}>
                  <a href="#" onClick={this.props.toggleActive}>{user.name}</a>
                </li>
              )
            })
          }
        
      </ul>
    );
  }

}

export default UserList;