import React, {Component} from 'react';

class UserList extends Component{
  render: function() {
    let _this = this;
    
    return (
      <ul className="user-list">
        {this.props.users.map(function(user) {         
          return (
            <li key={user.id}>
              <a href="#">{user.name}</a>
              <span>{user.active ? 'Active' : 'Not Active'}</span>
              <button onClick={_this.props.toggleActive.bind(null, user.id)}>Toggle Active</button>
            </li>
            );
        })}
      </ul>
      );
  }

}

export default UserList;