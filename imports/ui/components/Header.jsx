import React from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';


import LoginButtons from './LoginButtons.jsx';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    return (
      <header className='Header'>

         <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">Voting App</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <NavLink activeClassName="active" exact to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/about">About Page</NavLink>
            <NavLink to="/bad-url">Not Found Page</NavLink>
            <LoginButtons align='right' className='float-xs-left' />
          </Collapse>
        </Navbar>


      </header>
    );
  }
}

