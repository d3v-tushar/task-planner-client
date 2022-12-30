import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Main = () => {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <div className={darkMode ? "dark" : undefined}>
            <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            ></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;