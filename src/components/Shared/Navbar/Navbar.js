import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../utils/image/logo.png'


let activeStyle = {
    textDecoration: "underline",
   "background-color": '#FF8B42',
   padding:"16px 18px",
   "border-radius": "10px"

};

const Navbar = () => {
    return (
        <>
            <nav className="sticky top-0 w-full z-50 ">

                <div className="navbar bg-[#273240] ">
                    <div className="flex-1 md:pl-5 mx-2">
                        <Link href="/">
                            <div className="relative top-[]">
                                <p className='font-mono font-extrabold text-base flex items-center text-[#FF8B42]  md:text-[28px] my-[10px]'>
                                    <img className='md:w-[49px] md:h-[55px] md:ml-[70px]' src={logo} alt="" />
                                    <i className="fa-solid fa-earth-asia"></i> Doctor Guide
                                </p>
                            </div>
                        </Link>
                    </div>

                    <div className="hidden lg:flex">
                        <div className="flex items-center ">

                            <h1 className="btn text-[16px]  font-light font-sans text-white hover:bg-[#FF8B42]   btn-ghost  rounded-btn ">
                                <NavLink to="/home"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <button className="">HOME</button>
                                </NavLink>
                            </h1>
                            
                            <h1 className="btn text-[16px]  font-light font-sans text-white hover:bg-[#FF8B42]   btn-ghost  rounded-btn">
                                <NavLink to="/features"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <button className="">FEATURES</button>
                                </NavLink>
                            </h1>
                            <h1 className="btn text-[16px]  font-light font-sans text-white hover:bg-[#FF8B42]   btn-ghost  rounded-btn">
                                <NavLink to="/department"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <button className="">DEPARTMENT</button>
                                </NavLink>
                            </h1>
                            <h1 className="btn text-[16px]  font-light font-sans text-white hover:bg-[#FF8B42]   btn-ghost  rounded-btn">
                                <NavLink to="/event"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <button className="">EVENT</button>
                                </NavLink>
                            </h1>
                            <h1 className="btn text-[16px]  font-light font-sans text-white hover:bg-[#FF8B42]   btn-ghost  rounded-btn">
                                <NavLink to="/contact"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <button className="">CONTACT US</button>
                                </NavLink>
                            </h1>


                            <h1 className="btn text-[16px]  font-light font-sans text-white bg-[#FF8B42] hover:bg-[#FF8B42]  btn-ghost  rounded-btn mr-[19px] ml-[70px]">
                                <NavLink to="/login"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <button className="px-[15px] py-[16px] ">LOGIN</button>
                                </NavLink>
                            </h1>
                            <h1 className="btn text-[16px]  font-light font-sans text-white bg-[#FF8B42] hover:bg-[#FF8B42]   btn-ghost  rounded-btn mr-[70px]">
                                <NavLink to="/signup"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <button className="px-[15px] py-[16px] ">SIGNUP</button>
                                </NavLink>
                            </h1>







                        </div>
                    </div>

                    {/* tablate ans phone  */}
                    <div className="flex-none lg:hidden dropdown dropdown-left">
                        <button tabIndex="0" className="m-1 btn hover:bg-white btn-square hover:text-white btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current text-[#FF8B42]">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                        <ul tabIndex="0" className="p-2 relative top-10 shadow menu dropdown-content bg-slate-100 d rounded-box w-52 mt-2">
                            <li>
                                <Link className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-2" to='/'>
                                    HOME
                                </Link>
                            </li>
                            <li className="mt-3">
                                <Link className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3" to="/">
                                FEATURES
                                </Link>
                            </li>
                            <li className="mt-3">
                                <Link className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3" to="/">
                                DEPARTMENT
                                </Link>
                            </li>
                            <li className="mt-3">
                                <Link className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3" to="/">
                                EVENT
                                </Link>
                            </li>

                            <li>
                                <Link className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3" to="/contact">
                                    CONTACT US
                                </Link>
                            </li>
                            <li>
                                <Link className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3" to="/">
                                    LOGIN
                                </Link>
                            </li>
                            <li>
                                <Link className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3" to="/">
                                    SIGNUP
                                </Link>
                            </li>



                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Navbar;