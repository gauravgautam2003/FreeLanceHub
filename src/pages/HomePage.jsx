import React from 'react'
import HomeComponet from '../componets/HomeComponet'


const HomePage = () => {

    
    return (
        <>
            <div className='h-[400px] flex justify-center items-center'>
        
                <div className="flex flex-col items-center justify-center text-sm max-md:px-4">
                    <h1 className="text-2xl md:text-4xl text-center font-bold text-purple-800 px-10 ">Build Your Dream Website with Expert Freelancers</h1>

                    <p className="text-sm md:text-base mt-4 text-gray-500 max-w-md text-center px-2">Connect with talented web developers and designers who will bring your vision to life. From simple landing pages to complex web applications.</p>
                    <div className="flex items-center gap-4 mx-4 mt-6">
                        <a href="#" className="bg-purple-600 hover:bg-purple-500 px-4 md:p-7 py-2.5 md:py-2.5 text-white rounded-md active:scale-95 transition-all">
                            I Need a Website
                        </a>
                        <a href="#" className="border border-gray-300 px-4 md:p-7 py-2.5 md:py-2.5 text-gray-800 rounded-md active:scale-95 transition-all">
                            I'm a Developer
                        </a>
                    </div>
                </div>
            </div>
            <HomeComponet />
        </>
    )
}

export default HomePage