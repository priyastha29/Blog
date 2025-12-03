import React from 'react'
import logo from "../assets/logo/logo.png"
import { Link }from "react-router-dom";
import { Outlet } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='menu'>
        <ul>
            <li><Link to ="/"> Home </Link></li>
            <li><Link to ="/about"> About </Link></li>
            <li><Link to ="/contact"> Contact </Link></li>
            <li><Link to ="/blog"> Blog</Link></li>
        </ul>
      </div>
      <div className='btn'>
        <button>Sign Up</button>
        <Outlet/>
      </div>
    </div>
    </div>
  )
}

export default Navbar
