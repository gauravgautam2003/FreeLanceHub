import React, { useState } from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuClock2 } from "react-icons/lu";

const ClientPage = () => {

    const [selected, setSelected] = useState("My Project");
    return (
        <>
            <div className='flex md:justify-between flex-col gap-2 md:flex-row  w-full md:h-16 m-auto items-center h-26 px-4 border-b-1 border-b-gray-400'>
                <div>
                    <h1 className='font-bold md:text-lg text-xl text-gray-700'>Client Dashboard</h1>
                    <p className='text-sm text-gray-500 font-semibold '>Welcome back<span className='px-4'>username</span></p>
                </div>
                <div>
                    <button className='border-1 text-sm md:text-md font-semibold rounded-lg px-4 bg-purple-600  cursor-pointer text-white py-1 hover:bg-purple-500'>+<span className='px-4'>Post new project</span></button>
                    <button className='border-1 text-sm md:text-md font-semibold rounded-lg px-4 bg-white md:mx-2 mx-4 cursor-pointer text-gray-700 py-1 hover:bg-purple-500 hover:text-white'>Logout</button>
                </div>
            </div>
            <div className='my-6 mx-6'>
                <div className="md:w-[400px] w-full flex border rounded-2xl overflow-hidden">
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
                        onClick={() => setSelected("Completed")}
                        className={`w-1/2 py-1 font-medium ${selected === "Completed"
                            ? "bg-purple-600 text-white text-[12px] font-semibold m-1 rounded-2xl"
                            : "bg-gray-100 text-gray-700 text-[12px] font-semibold"
                            }`}
                    >
                        Completed
                    </button>
                </div>
                <div className='flex justify-between w-[80%] mx-auto  my-4'>
                    <div className='font-semibold text-gray-800'>All Projects</div>
                    <div className='font-semibold text-sm text-gray-600'><span className='mx-1'>0</span>Total projects</div>
                </div>
            </div>

            {/* Form Fields */}
            <div>
                {
                    selected === "My Project" && (
                        <>
                            <div className='my-4'>
                                <div className='w-[90%]  m-auto border rounded-lg p-2 border-gray-400 shadow-sm'>
                                    <div className='flex justify-between md:px-2 items-center'>
                                        <div className='flex flex-col gap-2 font-bold text-gray-700'>
                                            <h1>E-commerce website for fasion brand</h1>
                                            <div className='flex text-xs gap-1'>
                                                <p className='border  px-2 bg-gray-200 border-gray-300 rounded-xl'>E-commerce</p>
                                                <p className='border flex justify-center items-center gap-1 px-2 bg-blue-200 border-gray-300 rounded-xl text-blue-500'><LuClock2 />Active</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='flex justify-center items-center gap-1 cursor-pointer border px-2 hover:bg-gray-200 border-gray-300 rounded-xl text-sm font-semibold text-gray-800'><MdOutlineRemoveRedEye />View details</button>
                                        </div>
                                    </div>
                                    <p className='text-sm font-mono my-5 px-2'>Need a modern e-commerce website with shopping cart, payment integration, and admin panel.</p>
                                    <div className='grid px-2 mb-6 grid-cols-4'>
                                        <div className='font-semibold text-gray-600 text-sm'>
                                            <h2 className='text-xs md:text-sm'>Budget</h2>
                                            <p className='text-xs text-purple-400 md:text-sm'>$2,000 - $3,000</p>
                                        </div>
                                        <div  className='font-semibold text-gray-600 text-sm'>
                                            <h2 className='text-xs md:text-sm'>Timeline</h2>
                                            <p className='text-xs text-purple-400 md:text-sm'>4 - 6 weaks</p>
                                        </div>
                                        <div  className='font-semibold text-gray-600 text-sm'>
                                            <h2 className='text-xs md:text-sm'>Proposals</h2>
                                            <p className='text-xs text-purple-400 md:text-sm'>12 received</p>
                                        </div>
                                        <div  className='font-semibold text-gray-600 text-sm'>
                                            <h2 className='text-xs md:text-sm'>Posted</h2>
                                            <p className='text-xs text-purple-400 md:text-sm'>1/02/2025</p>
                                        </div>
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
                                            <h1>Active Proposals</h1>
                                            <div className='flex text-xs gap-1'>
                                                <p>Projects currently receiving proposals from freelancers</p>
                                            
                                            </div>
                                        </div>
                                    
                                    </div>
                                    
                                    <div className='flex justify-center items-center'>
                                        <p className='text-sm font-mono my-5 px-2'>Projects with active proposals will appear here</p>
                                    </div>
                                
                                </div>
                            </div>
                        </>
                    )
                }
                {
                    selected === "Completed" && (
                        <>
                            <div className='my-4'>
                                <div className='w-[90%]  m-auto border rounded-lg p-2 border-gray-400 shadow-sm'>
                                    <div className='flex justify-between md:px-2 items-center'>
                                        <div className='flex flex-col gap-2 font-bold text-gray-700'>
                                            <h1>Completed Projects</h1>
                                            <div className='flex text-xs gap-1'>
                                                <p>Your successfully completed website projects</p>
                                            
                                            </div>
                                        </div>
                                    
                                    </div>
                                    
                                    <div className='flex justify-center items-center'>
                                        <p className='text-sm font-mono my-5 px-2'>Completed projects will appear here</p>
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

export default ClientPage