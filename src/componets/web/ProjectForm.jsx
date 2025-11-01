import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';

const ProjectForm = () => {

    const { setForm, projectTitle, setProjectTitle, category, setCategory, projectDesc, setProjectDesc, budget, setBudget, timeline, setTimeline,userData, setUserData } = useContext(UserContext)
    


    const handleProjectPost = (e) => {
        e.preventDefault();
      
    }

    return (
        <div className=" flex  w-full items-center justify-center relative bg-gray-400 rounded-lg shadow-xl shadow-gray-800 bg-opacity-90 ">
            {/* Form Container */}
            <div className="bg-white w-full max-w-md rounded-lg   px-6 py-2">
                {/* Close Button */}
                <button onClick={() => setForm(false)} className="absolute right-4 top-4 text-gray-500 hover:text-gray-800">
                    ✕
                </button>

                {/* Title */}
                <h2 className="text-md font-bold my-1 text-gray-600">
                    Post a New Project
                </h2>
                <p className="text-xs  text-gray-500 mb-1">
                    Fill out the details below to post your project and receive proposals from freelancers.
                </p>

                <div>

                    <form className="space-y-1">
                        <div>
                            <label className="text-sm font-semibold text-gray-600">Project Title</label>
                            <input
                                onChange={(e) => setProjectTitle(e.target.value)}
                                value={projectTitle}
                                type="text"
                                placeholder="e.g., Modern  E-commerce Website"
                                className="w-full text-sm border rounded-lg px-2 py-1 mt-1  outline-gray-600  focus:ring-1 focus:ring-gray-700"
                                required
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label id='category' className="text-sm font-semibold  text-gray-600">Category</label>

                            <select
                                onChange={(e) => setCategory(e.target.value)}
                                value={category}
                                className='border px-2 outline-gray-600 border-gray-600 text-sm py-1 rounded-md cursor-pointer' id="category">
                                <option value="Business">Business</option>
                                <option className='text-gray-700 cursor-pointer ' value="E-commerce">E-commerce</option>
                                <option className='text-gray-700 cursor-pointer ' value="Portfolio">Portfolio</option>
                                <option className='text-gray-700 cursor-pointer ' value="Blog">Blog</option>
                                <option className='text-gray-700 cursor-pointer ' value="Web Application">Web Application</option>
                                <option className='text-gray-700 cursor-pointer ' value="Landing Page">Landing Page</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-600">Project Description</label>
                            <textarea
                                onChange={(e) => setProjectDesc(e.target.value)}
                                value={projectDesc}
                                type="text"
                                rows={2}
                                placeholder="Breif description of your expertise"
                                className="w-full text-sm border rounded-lg px-2 py-1 mt-1 focus:outline-none focus:ring-1 focus:ring-gray-600"

                            ></textarea>
                        </div>

                        <div className="flex gap-2 py-2 font-semibold">
                            <div className='flex flex-col w-full'>
                                <label id='category' className="text-sm font-semibold  text-gray-600">budget</label>

                                <select
                                    onChange={(e) => setBudget(e.target.value)}
                                    value={budget}
                                    className='border px-2 outline-gray-600 border-gray-600 text-sm py-1 rounded-md cursor-pointer' id="category">
                                    <option value="$500-$1,000">$500-$1,000</option>
                                    <option className='text-gray-700 cursor-pointer ' value="$1,00-$2,000">$1,000-$2,000</option>
                                    <option className='text-gray-700 cursor-pointer ' value="$2.000-$5,000">$2,000-$5,000</option>
                                    <option className='text-gray-700 cursor-pointer ' value="$5,000+">$5,000+</option>
                                </select>
                            </div>

                            <div className='flex flex-col w-full'>
                                <label id='category' className="text-sm font-semibold  text-gray-600">Timeline</label>

                                <select
                                    onChange={(e) => setTimeline(e.target.value)}
                                    value={timeline}
                                    className='border px-2 outline-gray-600 border-gray-600 text-sm py-1 rounded-md cursor-pointer' id="category">
                                    <option value="1-2 weaks">1-2 weaks</option>
                                    <option className='text-gray-700 cursor-pointer ' value="2-4 weaks">2-4 weaks</option>
                                    <option className='text-gray-700 cursor-pointer ' value="1-2 months">1-2 months</option>
                                    <option className='text-gray-700 cursor-pointer ' value="2+ months">2+ months</option>
                                </select>
                            </div>

                        </div>
                        <button
                            onClick={handleProjectPost}
                            type="submit"
                            className="w-full font-semibold text-sm bg-purple-600 hover:bg-purple-700 text-white py-1 rounded-lg  transition"
                        >
                            Post Project
                        </button>
                    </form>
                </div>
            </div >
        </div >
    );
}

export default ProjectForm