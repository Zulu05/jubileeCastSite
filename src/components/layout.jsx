import Header from './header';
import LowerBanners from './lowerBanners';
import { Outlet } from 'react-router-dom';
import './layout.css';
import React from 'react';
import oldPaper from '../assets/oldPaper.jpg';


const Layout = () => {
    return (
        <div className="app-container">
            <Header />
            <main className="main-content">
                <Outlet />
            </main>
            <LowerBanners />
        </div>
    );
}

export default Layout;