import React, { useState } from 'react'

const DeveloperPage = () => {

    const [selected, setSelected] = useState("Browse Projects");
    return (
        <>
            <div className='flex md:justify-between flex-col gap-2 md:flex-row  w-full md:h-16 m-auto items-center h-26 px-4 border-b-1 border-b-gray-400'>
                <div>
                    <h1 className='font-bold md:text-lg text-xl text-gray-700'>Developer Dashboard</h1>
                    <p className='text-sm text-gray-500 font-semibold '>Welcome back</p>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='text-sm px-2 text-gray-500 font-semibold'><span className='px-0.5'>⭐</span>4.8<span className='px-2'>(projects)</span></div>
                    <button className='border-1 text-sm md:text-md font-semibold rounded-lg px-4 bg-white md:mx-2 mx-4 cursor-pointer text-gray-700 py-1 hover:bg-purple-500'>Logout</button>
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
                    selected === "My Project"
                }

            </div>
        </>
    )
}

export default DeveloperPage