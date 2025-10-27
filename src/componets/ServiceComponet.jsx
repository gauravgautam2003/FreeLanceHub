import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { MdContentPasteSearch } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";
import { LuSmartphone } from "react-icons/lu";
import { PiBracketsAngleBold } from "react-icons/pi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FiDatabase } from "react-icons/fi";

const ServiceComponet = () => {
    return (
        <div>
            <div className=' bg-gray-100 flex flex-col justify-center items-center py-4'>
                <div className='mt-12 mb-6 '>
                    <h1 className='text-gray-500 font-semibold'>What Our Clients Say</h1>
                </div>

                <div className='flex flex-wrap gap-4 w-[80%] justify-center items-center'>
                    <div className='flex flex-col border-1 bg-white border-gray-400 rounded-md gap-2'>
                        <FiShoppingCart className='text-4xl mx-4 my-2 cursor-pointer ' />
                        <h1 className='text-md font-bold mx-4  cursor-pointer '>E-commerce website</h1>
                        <p className='text-sm w-70 mx-4 text-gray-500 font-semibold cursor-pointer '>Complete online stores with shopping carts, payment processing, inventory management, and customer accounts.</p>

                        <h2 className='text-md font-bold text-gray-600 mx-4 cursor-pointer '>Key Features.</h2>
                        <div className='grid grid-cols-2 text-[12px] gap-1 font-semibold mx-4'>
                            <p className='bg-gray-300 rounded-md px-2 '>Payment Integration</p>
                            <p className='bg-gray-300 rounded-md px-2'>Inventory Management</p>
                            <p className='bg-gray-300 rounded-md px-2'>Customer Accounts</p>
                            <p className='bg-gray-300 rounded-md px-2'>Order Tracking</p>
                            <p className='bg-gray-300 rounded-md px-2'>Mobile Responsive</p>
                        </div>
                        <div className='grid grid-cols-2 text-[12px] gap-1 font-semibold mx-4'>
                            <div className=' py-2'>
                                <h3 className='font-bold text-md text-gray-800'>Starting at</h3>
                                <p className='text-purple-600 font-bold cursor-pointer'>$2,000 -  $10,000</p>
                            </div>
                            <div className=' py-2'>
                                <h3 className='font-bold text-md text-gray-800'>TimeLine</h3>
                                <p className='text-purple-600 font-bold cursor-pointer'>4-8 weeks</p>
                            </div>
                        </div>
                        <button className='bg-purple-600 m-4 text-sm p-1 text-white font-semibold cursor-pointer hover:bg-purple-500 rounded-lg border-none'>Sign Up to Start</button>
                    </div>
                    <div className='flex flex-col border-1 bg-white border-gray-400 rounded-md gap-2'>
                        <LuBriefcaseBusiness className='text-4xl mx-4 my-2 cursor-pointer ' />
                        <h1 className='text-md font-bold mx-4  cursor-pointer '>Business Websites</h1>
                        <p className='text-sm w-70 mx-4 text-gray-500 font-semibold cursor-pointer '>Professional corporate websites that establish credibility and attract customers to your business.</p>

                        <h2 className='text-md font-bold text-gray-600 mx-4 cursor-pointer '>Key Features.</h2>
                        <div className='grid grid-cols-2 text-[12px] gap-1 font-semibold mx-4'>
                            <p className='bg-gray-300 rounded-md px-2 '>Professional Design</p>
                            <p className='bg-gray-300 rounded-md px-2'>Contact Forms</p>
                            <p className='bg-gray-300 rounded-md px-2'>SEO Optimization</p>
                            <p className='bg-gray-300 rounded-md px-2'>Content Managemen</p>
                            <p className='bg-gray-300 rounded-md px-2'>Analytics</p>
                        </div>
                        <div className='grid grid-cols-2 text-[12px] gap-1 font-semibold mx-4'>
                            <div className=' py-2'>
                                <h3 className='font-bold text-md text-gray-800'>Starting at</h3>
                                <p className='text-purple-600 font-bold cursor-pointer'>$800 -  $3,000</p>
                            </div>
                            <div className=' py-2'>
                                <h3 className='font-bold text-md text-gray-800'>TimeLine</h3>
                                <p className='text-purple-600 font-bold cursor-pointer'>2-4 weeks</p>
                            </div>
                        </div>
                        <button className='bg-purple-600 m-4 text-sm p-1 text-white font-semibold cursor-pointer hover:bg-purple-500 rounded-lg border-none'>Sign Up to Start</button>
                    </div>
                    <div className='flex flex-col border-1 bg-white border-gray-400 rounded-md gap-2'>
                        <FiUser className='text-4xl mx-4 my-2 cursor-pointer ' />
                        <h1 className='text-md font-bold mx-4  cursor-pointer '>Portfolio Websites</h1>
                        <p className='text-sm w-70 mx-4 text-gray-500 font-semibold cursor-pointer '>Stunning showcase websites for creatives, professionals, and freelancers to display their work.</p>

                        <h2 className='text-md font-bold text-gray-600 mx-4 cursor-pointer '>Key Features.</h2>
                        <div className='grid grid-cols-2 text-[12px] gap-1 font-semibold mx-4'>
                            <p className='bg-gray-300 rounded-md px-2 '>Gallery Systems</p>
                            <p className='bg-gray-300 rounded-md px-2'>Project Showcases</p>
                            <p className='bg-gray-300 rounded-md px-2'>Contact Integration</p>
                            <p className='bg-gray-300 rounded-md px-2'>Custom Design</p>
                            <p className='bg-gray-300 rounded-md px-2'>Fast Loading</p>
                        </div>
                        <div className='grid grid-cols-2 text-[12px] gap-1 font-semibold mx-4'>
                            <div className=' py-2'>
                                <h3 className='font-bold text-md text-gray-800'>Starting at</h3>
                                <p className='text-purple-600 font-bold cursor-pointer'>$500 -  $2,000</p>
                            </div>
                            <div className=' py-2'>
                                <h3 className='font-bold text-md text-gray-800'>TimeLine</h3>
                                <p className='text-purple-600 font-bold cursor-pointer'>2-3 weeks</p>
                            </div>
                        </div>
                        <button className='bg-purple-600 m-4 text-sm p-1 text-white font-semibold cursor-pointer hover:bg-purple-500 rounded-lg border-none'>Sign Up to Start</button>
                    </div>
                    <div className='flex flex-col border-1 bg-white border-gray-400 rounded-md gap-2'>
                        <MdContentPasteSearch className='text-4xl mx-4 my-2 cursor-pointer ' />
                        <h1 className='text-md font-bold mx-4  cursor-pointer '>Blog & Content Sites</h1>
                        <p className='text-sm w-70 mx-4 text-gray-500 font-semibold cursor-pointer '>Content-focused websites with publishing tools, comment systems, and audience engagement features.</p>

                        <h2 className='text-md font-bold text-gray-600 mx-4 cursor-pointer '>Key Features.</h2>
                        <div className='grid grid-cols-2 text-[12px] gap-1 font-semibold mx-4'>
                            <p className='bg-gray-300 rounded-md px-2 '>CMS Integration</p>
                            <p className='bg-gray-300 rounded-md px-2'>Comment System</p>
                            <p className='bg-gray-300 rounded-md px-2'>Social Sharing</p>
                            <p className='bg-gray-300 rounded-md px-2'>SEO Tools</p>
                            <p className='bg-gray-300 rounded-md px-2'>Email Subscription</p>
                        </div>
                        <div className='grid grid-cols-2 text-[12px] gap-1 font-semibold mx-4'>
                            <div className=' py-2'>
                                <h3 className='font-bold text-md text-gray-800'>Starting at</h3>
                                <p className='text-purple-600 font-bold cursor-pointer'>$800 -  $2,500</p>
                            </div>
                            <div className=' py-2'>
                                <h3 className='font-bold text-md text-gray-800'>TimeLine</h3>
                                <p className='text-purple-600 font-bold cursor-pointer'>2-4 weeks</p>
                            </div>
                        </div>
                        <button className='bg-purple-600 m-4 text-sm p-1 text-white font-semibold cursor-pointer hover:bg-purple-500 rounded-lg border-none'>Sign Up to Start</button>
                    </div>
                    <div className='flex flex-col border-1 bg-white border-gray-400 rounded-md gap-2'>
                        <BsLightningCharge className='text-4xl mx-4 my-2 cursor-pointer ' />
                        <h1 className='text-md font-bold mx-4  cursor-pointer '>Landing Pages</h1>
                        <p className='text-sm w-70 mx-4 text-gray-500 font-semibold cursor-pointer '>High-converting single-page websites designed to drive specific actions and capture leads.</p>

                        <h2 className='text-md font-bold text-gray-600 mx-4 cursor-pointer '>Key Features.</h2>
                        <div className='grid grid-cols-2 text-[12px] gap-1 font-semibold mx-3'>
                            <p className='bg-gray-300 rounded-md px-1 '>Conversion Optimization</p>
                            <p className='bg-gray-300 rounded-md px-2'>Lead Capture</p>
                            <p className='bg-gray-300 rounded-md px-2'>A/B Testing Ready</p>
                            <p className='bg-gray-300 rounded-md px-2'>Analytics Integration</p>
                            <p className='bg-gray-300 rounded-md px-2'>Fast Performance</p>
                        </div>
                        <div className='grid grid-cols-2 text-[12px] gap-1 font-semibold mx-4'>
                            <div className=' py-2'>
                                <h3 className='font-bold text-md text-gray-800'>Starting at</h3>
                                <p className='text-purple-600 font-bold cursor-pointer'>$300 -  $1,500</p>
                            </div>
                            <div className=' py-2'>
                                <h3 className='font-bold text-md text-gray-800'>TimeLine</h3>
                                <p className='text-purple-600 font-bold cursor-pointer'>1-2 weeks</p>
                            </div>
                        </div>
                        <button className='bg-purple-600 m-4 text-sm p-1 text-white font-semibold cursor-pointer hover:bg-purple-500 rounded-lg border-none'>Sign Up to Start</button>
                    </div>
                    <div className='flex flex-col border-1 bg-white border-gray-400 rounded-md gap-2'>
                        < LuSmartphone className='text-4xl mx-4 my-2 cursor-pointer ' />
                        <h1 className='text-md font-bold mx-4  cursor-pointer '>Web Applications</h1>
                        <p className='text-sm w-70 mx-4 text-gray-500 font-semibold cursor-pointer '>Custom web applications with complex functionality, user authentication, and database integration.</p>

                        <h2 className='text-md font-bold text-gray-600 mx-4 cursor-pointer '>Key Features.</h2>
                        <div className='grid grid-cols-2 text-[12px] gap-1 font-semibold mx-4'>
                            <p className='bg-gray-300 rounded-md px-2 '>User Authentication</p>
                            <p className='bg-gray-300 rounded-md px-2'>Database Integration</p>
                            <p className='bg-gray-300 rounded-md px-2'>API Development</p>
                            <p className='bg-gray-300 rounded-md px-2'>
                                Admin Panels</p>
                            <p className='bg-gray-300 rounded-md px-2'>Real-time Features</p>
                        </div>
                        <div className='grid grid-cols-2 text-[12px] gap-1 font-semibold mx-4'>
                            <div className=' py-2'>
                                <h3 className='font-bold text-md text-gray-800'>Starting at</h3>
                                <p className='text-purple-600 font-bold cursor-pointer'>$4000 -  $20,000+</p>
                            </div>
                            <div className=' py-2'>
                                <h3 className='font-bold text-md text-gray-800'>TimeLine</h3>
                                <p className='text-purple-600 font-bold cursor-pointer'>6-16 weeks</p>
                            </div>
                        </div>
                        <button className='bg-purple-600 m-4 text-sm p-1 text-white font-semibold cursor-pointer hover:bg-purple-500 rounded-lg border-none'>Sign Up to Start</button>
                    </div>
                </div>
            </div>
            <div className=' bg-white flex flex-col justify-center items-center py-4'>
                <div className='mt-12 mb-6 '>
                    <h1 className='text-gray-500 font-semibold'>What Our Clients Say</h1>
                </div>

                <div className='flex gap-4 flex-wrap justify-center itmes-center'>
                    <div className='flex flex-col justify-center items-center border-1 bg-white border-gray-400 rounded-md gap-1'>
                        <PiBracketsAngleBold className='text-4xl mx-4 my-2 cursor-pointer ' />
                        <h2 className='text-md font-bold mx-4  cursor-pointer '>Frontend Development</h2>
                        <p className='text-sm w-60 text-center mx-2 mb-4 text-gray-500 font-semibold cursor-pointer '>Modern, responsive user interfaces using React, Next, or vanilla JavaScript.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center border-1 bg-white border-gray-400 rounded-md gap-1'>
                        <IoColorPaletteOutline className='text-4xl mx-4 my-2 cursor-pointer ' />
                        <h2 className='text-md font-bold mx-4  cursor-pointer '>UI/UX Design</h2>
                        <p className='text-sm w-60 text-center mx-2 mb-4 text-gray-500 font-semibold cursor-pointer '>User-centered design that creates intuitive and engaging experiences.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center border-1 bg-white border-gray-400 rounded-md gap-1'>
                        <FiDatabase className='text-4xl mx-4 my-2 cursor-pointer ' />
                        <h2 className='text-md font-bold mx-4  cursor-pointer '>Backend Development</h2>
                        <p className='text-sm w-60 text-center mx-2 mb-4 text-gray-500 font-semibold cursor-pointer '>Robust server-side solutions with databases, APIs, and AI integration.</p>
                    </div>
                </div>
            </div>
            <div className=' bg-gray-100 flex flex-col justify-center items-center py-4'>
                <div className='mt-12 mb-6 '>
                    <h1 className='text-gray-500 font-semibold'>How it work</h1>
                </div>

                <div className='flex items-center justify-center w-full gap-4  flex-wrap'>
                    <div className='flex flex-col  justify-center items-center w-[250px] md:w-[200px] '>
                        <h1 className='w-12 h-12 py-2 bg-gray-500 rounded-full text-center text-2xl text-white font-bold m-auto cursor-pointer  hover:bg-gray-700'>1</h1>
                        <h3 className='text-gray-700 font-semibold'>Sign Up & Project Brief</h3>
                        <p className='text-sm text-center  text-gray-500'>Create your account and tell us about your vision, requirements, and goals.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[250px] md:w-[200px]'>
                        <h1 className='w-12 h-12 py-2 bg-gray-500 rounded-full text-center text-2xl text-white font-bold m-auto cursor-pointer  hover:bg-gray-700'>2</h1>
                        <h3 className='text-gray-700 font-semibold'>Developer Matching</h3>
                        <p className='text-sm text-center  text-gray-500'>We connect you with pre-vetted developers who specialize in your project type.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[250px] md:w-[200px]'>
                        <h1 className='w-12 h-12 py-2 bg-gray-500 rounded-full text-center text-2xl text-white font-bold m-auto cursor-pointer hover:bg-gray-700'>3</h1>
                        <h3 className='text-gray-700 font-semibold'>Proposal Review</h3>
                        <p className='text-sm  text-center text-gray-500'>Review detailed proposals with timelines, milestones, and pricing.</p>
                    </div>
                    <div className='flex flex-col  justify-center items-center w-[250px] md:w-[200px]'>
                        <h1 className='w-12 h-12 py-2 bg-gray-500 rounded-full text-center text-2xl text-white font-bold m-auto cursor-pointer  hover:bg-gray-700'>4</h1>
                        <h3 className='text-gray-700 font-semibold'>Development</h3>
                        <p className='text-sm text-center  text-gray-500'>Work directly with your chosen developer through regular updates and reviews.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[250px] md:w-[200px]'>
                        <h1 className='w-12 h-12 py-2 bg-gray-500 rounded-full text-center text-2xl text-white font-bold m-auto cursor-pointer  hover:bg-gray-700'>5</h1>
                        <h3 className='text-gray-700 font-semibold'>Launch & Support</h3>
                        <p className='text-sm text-center  text-gray-500'>Launch your website with testing, optimization, and ongoing support options.</p>
                    </div>
                </div>
            </div>

            <div className=' bg-white flex flex-col justify-center items-center py-4'>
                <div className='mt-12 mb-6 '>
                    <h1 className='text-gray-500 font-semibold'>Transparent Pricing</h1>
                </div>
                <div className='flex gap-4 flex-wrap justify-center itmes-center'>
                    <div className='flex flex-col justify-center items-center border-1 bg-white border-gray-400 rounded-md gap-2'>
                        
                        <h2 className='text-2xl text-purple-600 font-bold mx-4 my-4 cursor-pointer '>No Hidden Fees</h2>
                        <p className='text-sm w-60 text-center mx-2 mb-4 text-gray-500 font-semibold cursor-pointer '>What you see is what you pay. All costs are discussed upfront.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center border-1 bg-white border-gray-400 rounded-md gap-2'>
                        
                        <h2 className='text-2xl text-purple-600 font-bold mx-4 my-4 cursor-pointer '>Milestone Payments</h2>
                        <p className='text-sm w-60 text-center mx-2 mb-4 text-gray-500 font-semibold cursor-pointer '>Pay as work is completed, ensuring quality and peace of mind.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center border-1 bg-white border-gray-400 rounded-md gap-2'>
                    
                        <h2 className='text-2xl text-purple-600 font-bold mx-4 my-4 cursor-pointer '>Money Return</h2>
                        <p className='text-sm w-60 text-center mx-2 mb-4 text-gray-500 font-semibold cursor-pointer '>100% satisfaction guaranteed or your money back..</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceComponet