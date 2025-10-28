import React, { useState, useContext } from 'react'
import { SiBackendless } from "react-icons/si";
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
import SignupForm from './web/SignupForm';
import { UserContext } from '../context/UserContext';



const Navbar = () => {

    const [open, setOpen] = useState(false)
    const [form, setForm] = useState(false)
    const {selected, setselected} = useContext(UserContext)


    return (
        <>
            <nav className="h-[70px] relative w-full  md:px-16 flex items-center md:justify-between lg:justify-between justify-evenly  z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all" >

                <div className='flex justify-center items-center gap-1 cursor-pointer'>
                    <SiBackendless className='text-purple-600 text-4xl font-bold' />
                    <h2 className='text-md font-bold text-gray-600'>FreelanceHub</h2>
                </div>


                <div className='flex gap-4 lg:gap-4 items-center justify-center'>
                    <ul className="md:flex hidden md:text-sm text-sm items-center gap-10 md:gap-6">
                        <li><Link className="hover:text-gray-500/80 transition" to="/">Home</Link></li>
                        <li><Link className="hover:text-gray-500/80 transition" to="/about">About</Link></li>
                        <li><Link className="hover:text-gray-500/80 transition" to="/services">Services</Link></li>
                        <li><Link className="hover:text-gray-500/80 transition" to="/contact">Contact Us</Link></li>
                    </ul>

                    <div className='flex gap-0.5'>
                        <button onClick={() => setForm(true)} type="button" className="bg-purple-600 text-white opacity-80 border border-gray-300 md:inline hidden text-sm hover:bg-purple-500 active:scale-95 transition-all w-20 h-8  rounded-lg">
                            Sign Up
                        </button>
                        <div className='absolute md:top-12 md:right-70 right-0 top-20'>
                            {form ? <SignupForm form={form} setFrom={setForm}/> : null}
                        </div>
                    </div>

                </div>
                <button aria-label="menu-btn" type="button" className="menu-btn inline-block md:hidden active:scale-90 transition">
                    <IoMenu onClick={() => setOpen(!open)} className='text-2xl' />
                </button>
                <div className={`mobile-menu absolute top-[70px] right-0 opacity-90    w-3xs h-screen md:w-[400px] bg-gray-200 p-6  md:hidden ${open ? "block" : "hidden"}`}>
                    <ul onClick={() => setOpen(!open)} className="flex flex-col space-y-4 text-lg">
                        <li><Link  className="hover:text-gray-500/80 transition " to="/">Home</Link></li>
                        <li><Link className="hover:text-gray-500/80 transition" to="/about">About</Link></li>
                        <li><Link className="hover:text-gray-500/80 transition" to="/services">Services</Link></li>
                        <li><Link className="hover:text-gray-500/80 transition" to="/contact">Contact Us</Link></li>
                    </ul>

                    <div className='flex flex-col mt-5 gap-2'>
                        <button onClick={() => {
                            setForm(true);
                            setOpen(!open)

                        }} type="button" className="bg-white text-gray-600 border border-gray-300 md:inline text-sm hover:bg-gray-50 active:scale-95 transition-all  h-8 rounded-lg w-full">
                            Sign Up 
                        </button>
                        <button type="button" className="bg-purple-600  text-white border border-gray-300 md:inline text-sm hover:bg-purple-500 active:scale-95 transition-all w-full h-8 rounded-lg">
                            Join  as Developer
                        </button>
                    </div>
                </div>
            </nav>
            
        </>
    )
}

export default Navbar