/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

const MainMenuContent = () => {
    return (
        <div className='bg-white text-black'>
            <div className="navbar bg-[#adceba]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm text-black font-bold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/" >Home</NavLink></li>
                            <li><NavLink to="/Courses" >Courses</NavLink></li>
                            <li><NavLink to="/Team">Team</NavLink></li>
                            <li><NavLink to="/Contact">Contact</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <span className="text-black font-bold m-0 p-0">Online</span>
                        <span className="text-orange-500 font-bold m-0 p-0">Education</span>
                    </a>



                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-black font-bold px-1">
                            <li><NavLink to="/" >Home</NavLink></li>
                            <li><NavLink to="/Courses" >Courses</NavLink></li>
                            <li><NavLink to="/Team">Team</NavLink></li>
                            <li><NavLink to="/Contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to="/login" className="btn bg-[#adceba] border border-green-500 text-black font-bold mr-4 hover:text-white hover:bg-green-500">
                        Login
                    </NavLink>
                    <NavLink to="/registration" className="btn bg-[#adceba] border border-green-500 text-black font-bold hover:text-white hover:bg-green-500">
                        Registration
                    </NavLink>
                </div>



            </div>


        </div>
    );
};

export default MainMenuContent;