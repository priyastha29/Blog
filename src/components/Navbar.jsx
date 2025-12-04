import React from 'react'
import logo from "../assets/logo/logo.png"
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      
      {/* Logo */}
      <div className='logo'>
        <img src={logo} alt="Logo" />
      </div>

      {/* Menu */}
      <div className='menu'>
        <ul >
          <li>
            <NavLink to ="/">Home</NavLink>
          </li>
          <li>
            <NavLink to ="/about">About</NavLink>
          </li>
          <li>
            <NavLink to ="/contact">Contact</NavLink>
          </li>

          <li>
            <NavLink to="/blog" >Blog</NavLink>
          </li>
        </ul>
      </div>

      {/* Sign Up Button */}
      <div className='btn'>
        <button onClick={() => navigate("/signup")}>Sign Up</button>
      </div>

    </div>
  );
};

export default Navbar;
