import React, { Component } from 'react';

const NavBar = ({totalItems}) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar 
            <span className='badge badge-pill badge-secondary m-2'> {totalItems}
            </span></a>
            </nav>
     );
}
 
export default NavBar;
