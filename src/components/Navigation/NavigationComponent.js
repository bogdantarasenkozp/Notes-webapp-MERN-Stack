import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router';
import store from '../../store/index';
import { clearContent } from '../../actions/note';

class Navigation extends Component{

  logout () {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    axios.defaults.headers.common['Authorization'] = '';
    store.dispatch(clearContent());
    console.log(store.getState())
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <Nav className="" navbar>
          	<NavItem>
              <Link to="/">
          		  <img src='./logo.svg' width="35" height="35" alt="reactlogo"/>
              </Link>
          	</NavItem>
            <NavItem>
              <NavLink>
              	<Link to="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
              	<Link to="/notes" activeClassName="active">Users</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/auth">Auth</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={this.logout}>
                <Link to="/">Logout</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
