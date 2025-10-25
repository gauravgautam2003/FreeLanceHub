import React from 'react'
import AboutComponet from '../componets/AboutComponet'



const HomePage = () => {

    
    return (
        <>
            <div className='h-[350px] flex justify-center items-center flex-col'>
        
                <div className="flex flex-col items-center justify-center text-sm max-md:px-4">
                    <h1 className="text-xl md:text-xl text-center font-bold text-purple-800 px-10 ">Connecting Vision with Talent</h1>

                    <p className="text-sm md:text-base mt-4 text-gray-500 max-w-[650px] text-center px-2">FreelanceHub was founded on the belief that great websites shouldn't be a luxury. We bridge the gap between businesses who need professional web presence and talented developers who can make it happen.</p>
                    <div className="flex items-center gap-4 mx-4 mt-6">
                        <a href="#" className="bg-gray-800 hover:bg-black px-4 md:p-7 py-2.5 md:py-2.5 text-white rounded-md active:scale-95 transition-all">
                            Start Your Project
                        </a>
                        <a href="#" className="border border-gray-300 px-4 md:p-7 py-2.5 md:py-2.5 text-gray-800 rounded-md active:scale-95 transition-all">
                            Join our Network
                        </a>
                    </div>
                </div>
            </div>
                <AboutComponet />
            
        </>
    )
}

export default HomePage