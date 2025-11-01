import React, { useState,  useContext } from 'react'
import { LuClock2 } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { BsCurrencyDollar } from "react-icons/bs";
import ProposalForm from '../componets/web/ProposalForm';
import { UserContext } from '../context/UserContext'
import ProfileForm from '../componets/web/ProfileForm';

const DeveloperPage = () => {

    const [selected, setSelected] = useState("Browse Projects");
    const [btnColor, setBtnColor] = useState("All")
    const { form, setForm } = useContext(UserContext)
    return (
        <>
            <div className='flex md:justify-between flex-col gap-2 md:flex-row  w-full md:h-16 m-auto items-center h-26 px-4 border-b-1 border-b-gray-400'>
                <div>
                    <h1 className='font-bold md:text-lg text-xl text-gray-700'>Developer Dashboard</h1>
                    <p className='text-sm text-gray-500 font-semibold '>Welcome back</p>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='text-sm px-2 text-gray-500 font-semibold'><span className='px-0.5'>⭐</span>4.8<span className='px-2'>(projects)</span></div>
                    <button className='border-1 text-sm md:text-md font-semibold rounded-lg px-4 bg-white md:mx-2 mx-4 cursor-pointer text-gray-700 py-1 hover:bg-purple-500 hover:text-white '>Logout</button>
                </div>
            </div>
            <div className='my-6 mx-6'>

                <div className="md:w-[400px] w-full flex border rounded-2xl overflow-hidden">
                    <button
                        onClick={() => setSelected("Browse Projects")}
                        className={`w-1/2 py-1 font-medium ${selected === "Browse Projects"
                            ? "bg-purple-600 text-white text-[12px] font-semibold m-1 rounded-2xl"
                            : "bg-gray-100 text-gray-700 text-[12px] font-semibold"
                            }`}
                    >
                        Browse Project
                    </button>
                    <button
                        onClick={() => setSelected("My Project")}
                        className={`w-1/2 py-1 font-medium ${selected === "My Project"
                            ? "bg-purple-600 text-white text-[12px] font-semibold m-1 rounded-2xl"
                            : "bg-gray-100 text-gray-700 text-[12px] font-semibold"
                            }`}
                    >
                        My Project
                    </button>
                    <button
                        onClick={() => setSelected("Active Proposals")}
                        className={`w-1/2 py-1 font-medium ${selected === "Active Proposals"
                            ? "bg-purple-600 text-white text-[12px] font-semibold m-1 rounded-2xl"
                            : "bg-gray-100 text-gray-700 text-[12px] font-semibold"
                            }`}
                    >
                        Active Proposals
                    </button>
                    <button
                        onClick={() => setSelected("Profile")}
                        className={`w-1/2 py-1 font-medium ${selected === "Profile"
                            ? "bg-purple-600 text-white text-[12px] font-semibold m-1 rounded-2xl"
                            : "bg-gray-100 text-gray-700 text-[12px] font-semibold"
                            }`}
                    >
                        Profile
                    </button>
                </div>
                <div className='flex justify-between w-[93%] mx-auto relative my-4'>
                    {selected === "Browse Projects" && (
                        <>
                            <div className='flex flex-col md:flex-row w-full justify-start items-start gap-2'>
                                <div className='flex bg-gray-200 justify-start p-1 items-center gap-2 rounded-md w-full md:w-[60%]'>
                                    <IoSearch className='absolute mx-2 text-gray-700 font-semibold' />
                                    <input type="text" placeholder='Search projects...' className='w-full px-8 py-1 border-gray-600 outline-gray-400 text-gray-700 font-medium text-sm rounded-md' />
                                </div>
                                <div className='md:mx-2 flex text-sm font-semibold text-gray-800'>
                                    <button
                                        onClick={() => setBtnColor("All")}
                                        className={`bg-gray-200 mr-1 md:mx-1 text-xs py-1 rounded-md px-2 border ${btnColor === "All"
                                            ? "bg-purple-600 text-white "
                                            : "bg-gray-100 text-gray-700 "
                                            }`}
                                    >
                                        All
                                    </button>
                                    <button
                                        onClick={() => setBtnColor("Portfolio")}
                                        className={`bg-gray-200 md:mx-1 mx-1 text-xs py-1 rounded-md px-2 border ${btnColor === "Portfolio"
                                            ? "bg-purple-600 text-white"
                                            : "bg-gray-100 text-gray-700"
                                            }`}
                                    >
                                        Portfolio
                                    </button>
                                    <button
                                        onClick={() => setBtnColor("E-commerce")}
                                        className={`bg-gray-200 md:mx-1 mx-1 text-xs py-1 rounded-md px-2 border ${btnColor === "E-commerce"
                                            ? "bg-purple-600 text-white "
                                            : "bg-gray-100 text-gray-700 "
                                            }`}
                                    >
                                        E-commerce
                                    </button>
                                    <button
                                        onClick={() => setBtnColor("Business")}
                                        className={`bg-gray-200 md:mx-1 mx-1 text-xs py-1 rounded-md px-2 border ${btnColor === "Business"
                                            ? "bg-purple-600 text-white "
                                            : "bg-gray-100 text-gray-700"
                                            }`}
                                    >
                                        Business
                                    </button>
                                </div>
                            </div>

                        </>
                    )}
                </div>
            </div>

            {/* Form Fields */}
            <div>
                {
                    selected === "Browse Projects" && (
                        <>
                            <div className='my-4'>
                                <div className='w-[90%]  m-auto border rounded-lg p-2 border-gray-400 shadow-sm'>
                                    <div className='flex justify-between md:px-2 items-center'>
                                        <div className='flex flex-col gap-2 font-bold text-gray-700'>
                                            <h1>E-commerce website for fasion brand</h1>
                                            <div className='flex text-xs gap-1'>
                                                <p className='border flex justify-center items-center gap-1 px-2  border-gray-200 rounded-xl '><LuClock2 />Hours ago</p>
                                                <p className='border flex justify-center items-center gap-1 px-2 border-gray-200 rounded-xl '><IoLocationOutline />Remote</p>
                                                <p className='border  gap-1 px-2 border-gray-200 rounded-xl '>Proposals</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='flex justify-center items-center gap-1 cursor-pointer border px-2 hover:bg-gray-200 border-gray-300 rounded-xl text-sm font-semibold text-gray-800'>Portfolio</button>
                                        </div>
                                    </div>
                                    <p className='text-sm font-mono my-5 px-2'>Need a modern e-commerce website with shopping cart, payment integration, and admin panel.</p>
                                    <div className='grid px-2 mb-6 grid-cols-3 '>
                                        <div className='font-semibold text-gray-600 text-sm'>
                                            <p className=' flex justify-start items-center text-xs text-purple-400 md:text-sm'><BsCurrencyDollar className='text-green-400 font-bold cursor-pointer text-lg' />$2,000 - $3,000</p>
                                        </div>
                                        <div className='font-semibold text-gray-600 text-sm'>
                                            <p className=' flex justify-start items-center  text-xs text-purple-400 md:text-sm'><LuClock2 className='text-green-400 font-bold cursor-pointer text-lg' />.4 - 6 weaks</p>
                                        </div>
                                        <div className='flex justify-center items-center gap-1 font-semibold text-gray-600 text-sm'>
                                            <h2 className='w-7 h-7 p-1 rounded-full bg-gray-300 text-xs md:text-sm'>AC</h2>
                                            <p className='text-xs text-purple-400 md:text-sm'>helon mak</p>
                                            <p>⭐ <span>4.8</span></p>
                                        </div>

                                    </div>
                                    <div className='flex justify-between md:px-2 items-center'>
                                        <div className='flex flex-col gap-2 font-bold text-gray-700'>
                                            <div onClick={() => setForm(true)} className='flex text-xs my-4 gap-1'>
                                                <p className='border  gap-1 px-2 border-gray-300 rounded-md py-1 cursor-pointer'>View Details</p>
                                                <p className='border flex justify-center items-center gap-1 px-2 border-gray-200 bg-purple-600 rounded-md cursor-pointer  text-white py-1 hover:bg-purple-500 '><LuSend />Submit Code Link</p>
                                            </div>
                                            <div className='absolute top-100 left-80  bg-opacity-50 '>
                                                {form && <ProposalForm />}
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex justify-center items-center gap-1 cursor-pointer border px-2  border-gray-300 rounded-md text-sm font-semibold text-gray-800'><span>7</span>Proposals Submitted</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
                {
                    selected === "My Project" && (
                        <>
                            <div className='my-4'>
                                <div className='w-[90%]  m-auto border rounded-lg p-2 border-gray-400 shadow-sm'>
                                    <div className='flex justify-between md:px-2 items-center'>
                                        <div className='flex flex-col gap-2 font-bold text-gray-700'>
                                            <h1>My Proposals</h1>
                                            <div className='flex text-xs gap-1'>
                                                <p>Track the status of your submitted proposals</p>

                                            </div>
                                        </div>

                                    </div>

                                    <div className='flex justify-center items-center'>
                                        <p className='text-sm font-mono my-5 px-2'>Your submitted proposals will appear here</p>
                                    </div>

                                </div>
                            </div>
                        </>
                    )
                }
                {
                    selected === "Active Proposals" && (
                        <>
                            <div className='my-4'>
                                <div className='w-[90%]  m-auto border rounded-lg p-2 border-gray-400 shadow-sm'>
                                    <div className='flex justify-between md:px-2 items-center'>
                                        <div className='flex flex-col gap-2 font-bold text-gray-700'>
                                            <h1>Active Projects</h1>
                                            <div className='flex text-xs gap-1'>
                                                <p>Projects you're currently working on
                                                </p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='flex justify-center items-center'>
                                        <p className='text-sm font-mono my-5 px-2'>Your active projects will appear here</p>
                                    </div>

                                </div>
                            </div>
                        </>
                    )
                }
                {
                    selected === "Profile" && (
                        <>
                            <div className='my-4'>
                                <div className='w-[90%]  m-auto border rounded-lg p-2 border-gray-400 shadow-sm'>
                                    <div className='flex justify-between md:px-2 items-center'>
                                        <div className='flex flex-col gap-1 font-bold text-gray-700'>
                                            <h1>Profile settings</h1>
                                            <p className='text-sm text-gray-600'>Manage your freelancer profile and portfolio</p>

                                        </div>

                                    </div>

                                    <div className='flex justify-start items-center gap-2 my-6 text-gray-500 font-semibold mx-2'>
                                        <div className='w-14 h-14 rounded-full bg-gray-300'></div>
                                        <div>⭐
                                            <span className='mx-1  text-[13px]'>4.8</span>
                                            <span className='mx-1  text-[13px]'>(29 Project Completed)</span>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 px-2 my-2'>
                                        <div className='text-sm font-semibold text-gray-600'>
                                            <p>Hourly Rate</p>
                                            <p>$/hour</p>
                                        </div>
                                        <div className='text-sm font-semibold text-gray-500'>
                                            <p>Experience</p>
                                        </div>
                                    </div>

                                    <div className='flex justify-between md:px-2 items-center'>
                                        <div onClick={() => setForm(true)} className='flex flex-col gap-2 font-bold text-gray-700'>
                                            <div className='flex text-xs my-4 gap-1'>
                                                <p className='border flex justify-center items-center gap-1 text-md px-3 border-gray-200 bg-purple-600 rounded-md text-white py-1.5 '>Edit Profile</p>
                                            </div>
                                            <div className='absolute top-[35%] left-[35%]  bg-opacity-50 '>
                                                {form && <ProfileForm />}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }

            </div>
        </>
    )
}

export default DeveloperPage