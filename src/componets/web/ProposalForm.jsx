import React, { useState } from 'react'
import { UserContext } from '../../context/UserContext'

const ProposalForm = () => {

    const [githubLink, setGithubLink] = useState("")
    const { setForm } = React.useContext(UserContext)

    const handleGithubLinkSubmit = (e) => {
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
                    Submit Project Link
                </h2>
                <p className="text-xs  text-gray-500 mb-1">
                    Submit your project link below to share your work with potential clients.
                </p>

                <div>

                    <form className="space-y-1">
                        <div>
                            <label className="text-sm font-semibold text-gray-600">Github Link</label>
                            <input
                                onChange={(e) => setGithubLink(e.target.value)}
                                value={githubLink}
                                type="text"
                                placeholder="https://github.com/repo-name"
                                className="w-full text-sm border rounded-lg px-2 py-1 mt-1  outline-gray-600  focus:ring-1 focus:ring-gray-700"
                                required
                            />
                        </div>
                    
                        <button
                            onClick={handleGithubLinkSubmit}
                            type="submit"
                            className="w-full font-semibold text-sm bg-purple-600 hover:bg-purple-700 text-white py-1 my-2 rounded-lg  transition"
                        >
                            Submit Link
                        </button>
                    </form>
                </div>
            </div >
        </div >
    );
}

export default ProposalForm