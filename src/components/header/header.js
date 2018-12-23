import React from 'react';
import { NavLink } from 'react-router-dom';
// import './header.css';

const Header = () => (
  <header className="">
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <NavLink exact to='/' className='navbar-brand col-sm-3 col-md-2 mr-0 text-center app-logo font-weight-bold'>Dog API</NavLink>
      <ul className="navbar-nav px-3 flex-row">
        <li className="nav-item text-nowrap px-3"><NavLink className="nav-link" exact to='/'>Home</NavLink></li>
        <li className="nav-item text-nowrap px-3"><NavLink className="nav-link" to='/about'>About</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;