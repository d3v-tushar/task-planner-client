import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Main = () => {
    const [dark, setDark] = useState(false);
    return (
        <div className={dark ? "dark" : undefined}>
            <Navbar
            dark={dark}
            setDark={setDark}
            ></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;