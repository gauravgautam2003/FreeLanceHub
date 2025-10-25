import React from 'react'
import ServiceComponet from '../componets/ServiceComponet'



const ServicePage = () => {

    
    return (
        <>
            <div className='h-[400px] flex justify-center items-center'>
        
                <div className="flex flex-col items-center justify-center text-sm max-md:px-4">
                    <h1 className="text-xl md:text-xl text-center font-bold text-purple-800 px-10 ">Professional Web Development Services</h1>

                    <p className="text-sm md:text-base mt-4 text-gray-500 max-w-[650px] text-center px-2">From simple landing pages to complex web applications, our network of expert developers can bring any digital vision to life.</p>
                    <div className="flex items-center gap-4 mx-4 mt-6">
                        <a href="#" className="bg-gray-800 hover:bg-black px-4 md:p-7 py-2.5 md:py-2.5 text-white rounded-md active:scale-95 transition-all">
                            Get started today
                        </a>
                    </div>
                </div>
            </div>
            <ServiceComponet />
            
        </>
    )
}

export default ServicePage