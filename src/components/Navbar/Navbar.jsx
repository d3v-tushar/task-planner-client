import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const activeRoute = "text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6";
    const inactiveRoute = "border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6";
    return (
        <nav class="bg-white shadow dark:bg-gray-800">
            <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                <NavLink to='/' className={({isActive}) => isActive ? activeRoute : inactiveRoute}>Add Task</NavLink>

                <NavLink to='/mytask' className={({isActive}) => isActive ? activeRoute : inactiveRoute}>My Task</NavLink>

                <NavLink to='/completed' className={({isActive}) => isActive ? activeRoute : inactiveRoute}>Completed Task</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;