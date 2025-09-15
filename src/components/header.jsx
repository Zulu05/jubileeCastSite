import React from 'react'
import './header.css'
import jubilee from '../assets/jubilee.png'
import { Link, Outlet } from 'react-router-dom';
import Home from './home';

const Header = () => {
return (
    <div className="header-container">
         {/* Header Section */}
         <h1 className="Home-header flex justify-between items-center px-8 {/*border-2 border-red-500*/}" >
      <a href="/">
        <img src={jubilee} alt="jubilee" className="logo" />
       </a>          
       <nav className="flex items-center text-right">
            <ul className="flex space-x-6">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to = "contact">Contact</Link></li>
              <li className='text-yellow-500'><Link to="/signIn">Sign In</Link></li>
            </ul>
          </nav>
      </h1>
       </div>
);
}
export default Header