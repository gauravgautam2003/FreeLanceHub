import React, { useState } from 'react'
import { MdMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { BiMessageRounded } from "react-icons/bi";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const ContactComponet = () => {
    const {
        name,
        setName,
        email,
        setEmail,
        compony,
        setCompony,
        subject,
        projectType,
        message,
        setSubject,
        setProjectType,
        setMessage
    } = useContext(UserContext);

    const handleMessage = (e) => {
        e.preventDefault();
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
            {/* Page Title */}

            <div className="grid lg:grid-cols-2 gap-10 w-full max-w-5xl">
                {/* Left Section - Contact Info */}
                <div className="space-y-6">
                    <div className="p-6 bg-white rounded-2xl shadow">
                        <div className="flex gap-2 items-center">
                            < MdMailOutline className="text-center w-6 h-6 p-1 rounded-lg bg-gray-300 text-2xl" />
                            <h2 className="text-lg font-semibold text-gray-700 ">Email Us</h2>
                        </div>
                        <p className="text-gray-600">gauravgautam9865@gmail.com</p>
                        <p className="text-sm text-gray-500 mt-1">Get in touch for general inquiries and support.</p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl shadow">
                        <div className="flex gap-2 items-center">
                            < LuPhone className="text-center w-6 h-6 p-1 rounded-lg bg-gray-300 text-2xl" />
                            <h2 className="text-lg font-semibold text-gray-700 ">Call Us</h2>
                        </div>
                        <p className="text-gray-600">+91 0557799584</p>
                        <p className="text-sm text-gray-500 mt-1">Speak directly with our team during business hours.</p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl shadow">
                        <div className="flex gap-2 items-center">
                            <GrLocation className="text-center w-6 h-6 p-1 rounded-lg bg-gray-300 text-2xl" />
                            <h2 className="text-lg font-semibold text-gray-700 ">Visit Us</h2>
                        </div>
                        <p className="text-gray-600">Uttar Predesh, Agra at Sewla</p>
                        <p className="text-sm text-gray-500 mt-1">Our headquarters is in the heart of Silicon Valley.</p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl shadow">
                        <div className="flex gap-2 items-center">
                            <FaRegClock className="text-center w-6 h-6 p-1 rounded-lg bg-gray-300 text-2xl" />
                            <h2 className="text-lg font-semibold text-gray-700">Business Hours</h2>
                        </div>
                        <p className="text-gray-600">Mon-Fri: 9AM-6PM PST</p>
                        <p className="text-sm text-gray-500 mt-1">We're here to help during business hours.</p>
                    </div>
                </div>

                {/* Right Section - Form */}
                <div className="p-8 bg-white rounded-2xl shadow">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Send us a Message</h2>
                    <p className="text-sm text-gray-500 mb-2">
                        Fill out the form below and we’ll get back to you within 24 hours.
                    </p>

                    <form className="space-y-2">
                        <div className='flex gap-2'>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full border bg-gray-100 border-gray-300 rounded-lg px-2 py-1 focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full border bg-gray-100 border-gray-300 rounded-lg px-2 py-1 focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                            <input
                                onChange={(e) => setProjectType(e.target.value)}
                                value={projectType}
                                type="text"
                                placeholder="Enter your project type"
                                className="w-full border bg-gray-100 border-gray-300 rounded-lg px-2 py-1 focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <input
                                onChange={(e) => setSubject(e.target.value)}
                                value={subject}
                                type="text"
                                placeholder="what's this about?"
                                className="w-full border bg-gray-100 border-gray-300 rounded-lg px-2 py-1 focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Company (Optional)</label>
                            <input
                                onChange={(e) => setCompony(e.target.value)}
                                value={compony}
                                type="text"
                                placeholder="Enter your company name"
                                className="w-full border bg-gray-100 border-gray-300 rounded-lg px-2 py-1 focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                            <textarea
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                placeholder="Tell us about your project or ask a question"
                                rows="3"
                                className="w-full border bg-gray-100 border-gray-300 rounded-lg p-2 focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                                required
                            ></textarea>
                        </div>

                        <button
                            onSubmit={handleMessage}
                            type="submit"
                            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-800 transition duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
            <div className='  flex flex-col justify-center items-center py-4'>
                <div className='mt-12 mb-6 '>
                    <h1 className='text-gray-500 font-semibold'>Frequently Asked Questions</h1>
                </div>
                <div className='flex flex-wrap gap-4 justify-center items-center'>
                    <div className="flex  flex-col py-4 px-2  border-1 border-gray-300 md:w-[330px] w-full  md:p-6 rounded-lg bg-white shadow-md">
                        <FiUsers className='text-3xl text-gray-700 hover:text-black mt-1 mb-2' />
                        <p className="text-gray-900 text-lg font-semibold ">How do you vet your freelancers?</p>
                        <p className="text-gray-500 text-sm  w-full  mt-2">All freelancers undergo a rigorous screening process including portfolio review, technical assessments, and background checks.</p>
                    </div>
                    <div className="flex flex-col py-4 px-2  border-1 border-gray-300 md:w-[330px] w-full  md:p-6 rounded-lg bg-white shadow-md">
                        <BiMessageRounded className='text-3xl text-gray-700 hover:text-black mt-1 mb-2' />
                        <p className="text-gray-900 text-lg font-semibold ">How does communication work during projects?</p>
                        <p className="text-gray-500 text-sm  w-full  mt-2">You'll have direct communication with your developer through our platform, with regular updates and milestone check-ins.</p>
                    </div>
                    <div className="flex flex-col py-2 px-2  border-1 border-gray-300 md:w-[330px] w-full  md:p-6 rounded-lg bg-white shadow-md">
                        <FaRegCircleQuestion className='text-3xl text-gray-700 hover:text-black mt-1 mb-2' />
                        <p className="text-gray-900 text-lg font-semibold ">What if I'm not satisfied with the work?</p>
                        <p className="text-gray-500 text-sm  w-full  mt-2">We offer unlimited revisions during the project and a 100% money-back guarantee if you're not completely satisfied.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContactComponet