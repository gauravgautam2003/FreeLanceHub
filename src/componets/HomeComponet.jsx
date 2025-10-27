import React from 'react'
import { FiUsers } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";

const HomeComponet = () => {
    return (
        <>
            <div className=' bg-gray-100 flex flex-col justify-center items-center py-4'>
                <div className='mt-12 mb-6 '>
                    <h1 className='text-gray-500 font-semibold'>Why Choose Our Platform?</h1>
                </div>
                <div className='flex md:flex-row  flex-wrap flex-col gap-4 h-auto  justify-center items-center m-auto p-4'>

                    <div className="flex flex-col py-4 justify-center items-center border-1 border-gray-300 md:w-[250px] w-full  md:p-6 rounded-lg bg-white shadow-md">
                        <FiUsers className='text-5xl text-gray-700 hover:text-black mt-2' />
                        <p className="text-gray-900 text-lg font-semibold ">Vetted Freelancers</p>
                        <p className="text-gray-500 text-sm md:w-48 w-full px-4 text-center mt-2">All developers are carefully screened and verified for their skills and experience.</p>
                    </div>
                    <div className="flex flex-col py-4 justify-center items-center border-1 border-gray-300 md:w-[250px] w-full md:p-6 rounded-lg bg-white shadow-md">
                        <MdOutlineWatchLater className='text-5xl text-gray-700 hover:text-black mt-2' />
                        <p className="text-gray-900 text-lg font-semibold">Fast Delivery</p>
                        <p className="text-gray-500 text-sm md:w-48 w-full px-4 text-center mt-2">Get your website delivered on time with clear milestones and regular updates.</p>
                    </div>
                    <div className="flex flex-col py-4 justify-center items-center border-1 border-gray-300 md:w-[250px] w-full md:p-6 rounded-lg bg-white shadow-md">
                        <MdSecurity className='text-5xl text-gray-700 hover:text-black mt-2' />
                        <p className="text-gray-900 text-lg font-semibold ">Secure Payments</p>
                        <p className="text-gray-500 text-sm md:w-48 w-full px-4 text-center mt-2">Safe and secure payment processing with milestone-based releases.</p>
                    </div>
                    <div className="flex flex-col py-4 justify-center items-center border-1 border-gray-300 md:w-[250px] w-full md:p-6 rounded-lg bg-white shadow-md">
                        <FaRegStar className='text-5xl text-gray-700 hover:text-black mt-2' />
                        <p className="text-gray-900 text-lg font-semibold">Quality Guarantee</p>
                        <p className="text-gray-500 text-sm md:w-48 w-full px-4 text-center mt-2">100% satisfaction guarantee with unlimited revisions until you're happy.</p>
                    </div>
                </div>


                <div className='flex  flex-wrap flex-col gap-4 h-auto justify-center items-center m-auto md:p-4 p-2 bg-white w-full'>
                    <div className='mt-12 mb-6 '>
                        <h1 className='text-gray-500 font-semibold'>How It Works</h1>
                    </div>

                        <div className='flex items-center justify-center w-full gap-4  flex-wrap'>
                            <div className='flex flex-col  justify-center items-center w-[250px] md:w-[300px]'>
                                <h1 className='w-14 h-14 py-3 bg-gray-500 rounded-full text-center text-2xl text-white font-bold m-auto cursor-pointer  hover:bg-gray-700'>1</h1>
                                <h3 className='text-gray-700 font-semibold'>Post Your Project</h3>
                                <p className='text-sm text-center  text-gray-500'>Describe your website requirements, budget, and timeline.</p>
                            </div>
                            <div className='flex flex-col justify-center items-center w-[250px] md:w-[300px]'>
                                <h1 className='w-14 h-14 py-3 bg-gray-500 rounded-full text-center text-2xl text-white font-bold m-auto cursor-pointer  hover:bg-gray-700'>2</h1>
                                <h3 className='text-gray-700 font-semibold'>Choose a Freelancer</h3>
                                <p className='text-sm text-center  text-gray-500'>Review proposals and select the perfect developer for your project.</p>
                            </div>
                            <div className='flex flex-col justify-center items-center w-[250px] md:w-[300px]'>
                                <h1 className='w-14 h-14 py-3 bg-gray-500 rounded-full text-center text-2xl text-white font-bold m-auto cursor-pointer hover:bg-gray-700'>3</h1>
                                <h3 className='text-gray-700 font-semibold'>Get Your Website</h3>
                                <p className='text-sm  text-center text-gray-500'>Work with your freelancer and receive your completed website.</p>
                            </div>
                        </div>
                
                </div>
                <div className='mt-12 mb-6 '>
                    <h1 className='text-gray-500 font-semibold'>What Our Clients Say</h1>
                </div>

                <div className='flex justify-center items-center gap-4 mb-10 w-full flex-wrap '>
                    <div className='flex flex-col justify-center   bg-white h-35 md:w-75  w-full rounded-lg shadow-lg shadow-white  hover:ease-in hover:transition-all m-4  md:ml-4'>
                        <div className='text-sm pl-4'>⭐⭐⭐⭐⭐</div>
                        <p className='text-sm p-2 pl-4 text-gray-700 leading-tight'>"Amazing experience! Got a beautiful e-commerce site delivered ahead of schedule."</p>
                        <div className='flex pt-2 pl-4 gap-2 bottom-2'>
                            <div className='w-12 h-12 rounded-full bg-gray-300 p-3 text-gray-600 font-bold text-xl'>JS</div>
                            <div className='flex flex-col justify-center items-center leading-tight'>
                                <h2 className='text-md leading-2'>Sarah Johnson</h2>
                                <p className='text-sm text-gray-600'>Boutique Owner</p>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col justify-center  bg-white h-35 md:w-75  w-full rounded-lg shadow-lg shadow-white  hover:ease-in hover:transition-all m-4 md:ml-2'>
                        <div className='pl-4 text-sm'>⭐⭐⭐⭐⭐</div>
                        <p className='text-sm pl-4 p-2 text-gray-700 leading-tight'>"Amazing experience! Got a beautiful e-commerce site delivered ahead of schedule."</p>
                        <div className='flex pt-2 gap-2  pl-4'>
                            <div className='w-12 h-12 rounded-full bg-gray-300 p-3 text-gray-600 font-bold text-xl'>JS</div>
                            <div className='flex flex-col justify-center items-center leading-tight'>
                                <h2 className='text-md leading-2'>Sarah Johnson</h2>
                                <p className='text-sm text-gray-600'>Boutique Owner</p>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col justify-center  bg-white h-35 md:w-75  w-full rounded-lg shadow-lg shadow-white m-4 hover:ease-in hover:transition-all md:ml-2'>
                        <div className='pl-4 text-sm'>⭐⭐⭐⭐⭐</div>
                        <p className='text-sm pl-4 p-2 text-gray-700 leading-tight'>"Amazing experience! Got a beautiful e-commerce site delivered ahead of schedule."</p>
                        <div className='flex pt-2 gap-2 pl-4'>
                            <div className='w-12 h-12 rounded-full bg-gray-300 p-3 text-gray-600 font-bold text-xl'>JS</div>
                            <div className='flex flex-col justify-center items-center leading-tight'>
                                <h2 className='text-md leading-2'>Sarah Johnson</h2>
                                <p className='text-sm text-gray-600'>Boutique Owner</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComponet