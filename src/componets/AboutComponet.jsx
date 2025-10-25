import React from 'react'
import { FiUsers } from "react-icons/fi";
import { LuTarget } from "react-icons/lu";
import { PiMedalBold } from "react-icons/pi";
import { RiGlobalLine } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const AboutComponet = () => {
    return (
        <div>
            <div className=' bg-gray-100 flex flex-col justify-center items-center py-4'>
                <div className='mt-12 mb-6 '>
                    <h1 className='text-gray-500 font-semibold'>Our Impact by the Numbers</h1>
                </div>
                <div className='flex md:flex-row  flex-wrap flex-col gap-4 h-auto  justify-center items-center m-auto p-4'>

                    <div className="flex flex-col py-4 justify-center items-center border-1 border-gray-300 sm:w-[450px] md:w-[250px] w-full  md:p-6 rounded-lg bg-white shadow-md">
                        <FiUsers className='text-3xl text-gray-900 hover:text-black mb-2 mt-2' />
                        <p className="text-gray-900 text-3xl font-semibold ">15,000+</p>
                        <p className="text-gray-500 text-sm md:w-48 w-full px-4 text-center mt-2">Active Freelancers</p>
                    </div>
                    <div className="flex flex-col py-4 justify-center items-center border-1 border-gray-300  sm:w-[450px] md:w-[250px] w-full md:p-6 rounded-lg bg-white shadow-md">
                        < LuTarget className='text-3xl text-gray-800 hover:text-black mt-2 mb-2' />
                        <p className="text-gray-900 text-3xl font-semibold">50,000+</p>
                        <p className="text-gray-500 text-sm md:w-48 w-full px-4 text-center mt-2">Projects Completed</p>
                    </div>
                    <div className="flex flex-col py-4 justify-center items-center border-1 border-gray-300  sm:w-[450px] md:w-[250px] w-full md:p-6 rounded-lg bg-white shadow-md">
                        < PiMedalBold className='text-3xl text-gray-800 hover:text-black mt-2 mb-2' />
                        <p className="text-gray-900 text-3xl font-semibold ">98%</p>
                        <p className="text-gray-500 text-sm md:w-48 w-full px-4 text-center mt-2">Client Satisfaction</p>
                    </div>
                    <div className="flex flex-col py-4 justify-center items-center border-1 border-gray-300  sm:w-[450px] md:w-[250px] w-full md:p-6 rounded-lg bg-white shadow-md">
                        < RiGlobalLine className='text-3xl text-gray-800 hover:text-black mt-2 mb-2' />
                        <p className="text-gray-900 text-3xl font-semibold">120+</p>
                        <p className="text-gray-500 text-sm md:w-48 w-full px-4 text-center mt-2">Countries Served</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className='mt-12 mb-6  flex justify-center items-center flex-col w-[60%] m-auto '>
                        <h1 className='text-gray-600 font-semibold mb-8'>Our Story</h1>
                        <p className='text-gray-500 mb-4 '>FreelanceHub started in 2025 when our founder, Gaurav Gautam, experienced firsthand the challenges of finding reliable web developers for her startup. After struggling with platforms that prioritized quantity over quality, she envisioned a better way.</p>

                        <p className='text-gray-500 mb-4 '>We built FreelanceHub to be different. Instead of a race to the bottom on pricing, we focus on matching clients with developers who truly understand their needs. Every freelancer undergoes a rigorous vetting process to ensure they have both the technical skills and communication abilities to deliver exceptional results.</p>

                        <p className='text-gray-500 mb-6 '>Today, we're proud to have facilitated thousands of successful collaborations, helping businesses of all sizes achieve their digital goals while providing freelancers with meaningful, well-compensated work.</p>
                    </div>
                </div>
            </div>
            <div className=' bg-gray-100 flex flex-col justify-center items-center py-4'>
                <div className='mt-12 mb-6 '>
                    <h1 className='text-gray-500 font-semibold'>Our Values</h1>
                </div>
                <div className='flex md:flex-row  flex-wrap flex-col gap-4 h-auto  justify-center items-center m-auto p-4'>

                    <div className="flex flex-col py-4 justify-center items-center border-1 border-gray-300 md:w-[250px] w-full  md:p-6 rounded-lg bg-white shadow-md">
                        <PiMedalBold className='text-5xl text-gray-700 hover:text-black mt-2' />
                        <p className="text-gray-900 text-lg font-semibold ">Quality First</p>
                        <p className="text-gray-500 text-sm md:w-48 w-full px-4 text-center mt-2">We maintain the highest standards by carefully vetting every freelancer on our platform.</p>
                    </div>
                    <div className="flex flex-col py-4 justify-center items-center border-1 border-gray-300 md:w-[250px] w-full md:p-6 rounded-lg bg-white shadow-md">
                        < MdSecurity className='text-5xl text-gray-700 hover:text-black mt-2' />
                        <p className="text-gray-900 text-lg font-semibold">Trust & Security</p>
                        <p className="text-gray-500 text-sm md:w-48 w-full px-4 text-center mt-2">Secure payments, verified profiles, and comprehensive dispute resolution protect everyone.</p>
                    </div>
                    <div className="flex flex-col py-4 justify-center items-center border-1 border-gray-300 md:w-[250px] w-full md:p-6 rounded-lg bg-white shadow-md">
                        < FaRegHeart className='text-5xl text-gray-700 hover:text-black mt-2' />
                        <p className="text-gray-900 text-lg font-semibold ">Community Focus</p>
                        <p className="text-gray-500 text-sm md:w-48 w-full px-4 text-center mt-2">Building lasting relationships between clients and freelancers is at the heart of what we do.</p>
                    </div>
                </div>
            </div>
            <div className=' bg-white flex flex-col justify-center items-center py-4'>
                <div className='mt-12 mb-6 '>
                    <h1 className='text-gray-500 font-semibold'>Our Values</h1>
                </div>
                <div  className='flex md:flex-row  flex-wrap flex-col gap-4 h-auto justify-center items-center m-auto p-4 '>
                    <div className='flex flex-col justify-center items-center w-[300px] border-1 rounded-lg border-gray-400 shadow-2xl shadow-gray-400 gap-2'>
                        <div className='cursor-pointer w-18 h-18 rounded-full mt-4 bg-gray-300'>
                            <img src="" alt="" />
                        </div>
                        <h2 className='text-md font-bold '>Gaurav Gautam</h2>
                        <button className='rounded-lg bg-gray-300 text-[12px] p-1 cursor-pointer hover:bg-gray-400 font-semibold'>CEO & Founder</button>
                        <p className='text-center text-[12px] p-4 text-gray-500 font-semibold'>Former tech lead at major startups with 10+ years in web development</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[300px] border-1 rounded-lg shadow-2xl shadow-gray-400 border-gray-400 gap-2'>
                        <div className='w-18 h-18 rounded-full mt-4 bg-gray-300'>
                            <img src="" alt="" />
                        </div>
                        <h2 className='text-md font-bold '>Gaurav Gautam</h2>
                        <button className='rounded-lg bg-gray-300 text-[12px] p-1 cursor-pointer hover:bg-gray-400 font-semibold'>CEO & Founder</button>
                        <p className='text-center text-[12px] p-4 text-gray-500 font-semibold'>Former tech lead at major startups with 10+ years in web development</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[300px]  border-1 rounded-lg shadow-2xl shadow-gray-400 border-gray-400 gap-2'>
                        <div className='w-18 h-18 rounded-full mt-4 bg-gray-300'>
                            <img src="" alt="" />
                        </div>
                        <h2 className='text-md font-bold '>Gaurav Gautam</h2>
                        <button className='rounded-lg bg-gray-300 text-[12px] p-1 cursor-pointer hover:bg-gray-400 font-semibold'>CEO & Founder</button>
                        <p className='text-center text-[12px] p-4 text-gray-500 font-semibold'>Former tech lead at major startups with 10+ years in web development</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponet