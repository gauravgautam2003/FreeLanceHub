import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
    const { setFrom, selected, currState, name, email, password, compony, setselected, setCurrState, setName, setEmail, setPassword, setCompony } = useContext(UserContext);

    const navigate = useNavigate();

    const handleSignupForm = (e) => {
        e.preventDefault();

        if (!name && !email && !password || !compony) {
            console.log("enter the all values")
        }

        const userData = { name, email, password, compony };
        if(selected === "client"){
            navigate("/client");
        }
        else{
            navigate("/developer");
        }

    }

    return (
        <div className=" flex  w-full items-center justify-center relative bg-gray-400 rounded-lg shadow-xl shadow-gray-800 bg-opacity-90 ">
            {/* Form Container */}
            <div className="bg-white w-full max-w-md rounded-lg   px-6 py-2">
                {/* Close Button */}
                <button onClick={() => setFrom(false)} className="absolute right-4 top-4 text-gray-500 hover:text-gray-800">
                    ✕
                </button>

                {/* Title */}
                <h2 className="text-md font-semibold text-center text-gray-800">
                    Join Our Platform
                </h2>
                <p className="text-sm text-center text-gray-500 mb-1">
                    Create your account to get started
                </p>

                {/* Tabs */}
                <div className="md:w-[400px] w-full flex border rounded-2xl overflow-hidden">
                    <button
                        onClick={() => setselected("client")}
                        className={`w-1/2 py-1 font-medium ${selected === "client"
                            ? "bg-purple-600 text-white text-[12px] font-semibold rounded-2xl m-1"
                            : "bg-gray-100 text-gray-700 text-[12px] font-semibold"
                            }`}
                    >
                        Client 
                    </button>
                    <button
                        onClick={() => setselected("developer")}
                        className={`w-1/2 py-1 font-medium ${selected === "developer"
                            ? "bg-purple-600 text-white text-[12px] font-semibold rounded-2xl m-1"
                            : "bg-gray-100 text-gray-700 text-[12px] font-semibold"
                            }`}
                    >
                        Developer
                    </button>
                </div>

                {/* Form Fields */}
                <div>
                    <h3 className="text-sm font-bold text-gray-700 ">
                        {selected === "client"
                            ? "Client Registration"
                            : "Developer Registration"}
                    </h3>
                    <p className="text-xs text-gray-500 mb-1">
                        {selected === "client"
                            ? "Get started with your website project"
                            : "Join to find amazing projects"}
                    </p>

                    {
                        currState === "signup" ?
                            <>
                                <form className="space-y-1">
                                    <div>
                                        <label className="text-sm font-semibold text-gray-600">Full Name</label>
                                        <input
                                            onChange={(e) => setName(e.target.value)}
                                            value={name}
                                            type="text"
                                            placeholder="Enter your full name"
                                            className="w-full text-sm border rounded-lg px-2 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-700"
                                            required
                                        />
                                    </div>

                                    {selected === "client" && (
                                        <div>
                                            <label className="text-sm font-semibold  text-gray-600">Company (Optional)</label>
                                            <input
                                                onChange={(e) => setCompony(e.target.value)}
                                                value={compony}
                                                type="text"
                                                placeholder="Your company name"
                                                className="w-full text-sm border rounded-lg px-2 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-700"

                                            />
                                        </div>
                                    )}

                                    {selected === "developer" && (
                                        <>
                                            <div>
                                                <label className="text-sm font-semibold text-gray-600">Professional Description</label>
                                                <textarea

                                                    type="text"
                                                    rows={2}
                                                    placeholder="Breif description of your expertise"
                                                    className="w-full text-sm border rounded-lg px-2 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-700"

                                                ></textarea>
                                            </div>

                                            <div>
                                                <label className="text-sm font-semibold  text-gray-600">Skills (comma seprated)</label>
                                                <input

                                                    type="text"
                                                    placeholder="React, node.js, PHP, etc"
                                                    className="w-full text-sm border rounded-lg px-2 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-700"

                                                />
                                            </div>

                                            <div className="flex gap-4">
                                                <div>
                                                    <label className="text-sm font-semibold
                                                     text-gray-600">Experience</label>
                                                    <input

                                                        type="number"
                                                        placeholder="5+ years"
                                                        className="w-full text-sm border rounded-lg px-2 py-1  focus:outline-none focus:ring-2 focus:ring-gray-700"

                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-sm font-semibold text-gray-600">Hourly rate ($)</label>
                                                    <input

                                                        type="number"
                                                        placeholder="50"
                                                        className="w-full text-sm border rounded-lg px-2 py-1  focus:outline-none focus:ring-2 focus:ring-gray-700"

                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    <div>
                                        <label className="text-sm font-semibold
                                         text-gray-600">Email</label>
                                        <input
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full text-sm border rounded-lg px-2 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-700"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-semibold text-gray-600">Password</label>
                                        <input
                                            onChange={(e) => setPassword(e.target.value)}
                                            value={password}
                                            type="password"
                                            placeholder="Enter your password"
                                            className="w-full text-sm border rounded-lg px-2 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-700"
                                            required
                                        />
                                    </div>

                                    <button
                                        onClick={handleSignupForm}
                                        type="submit"
                                        className="w-full font-semibold text-sm bg-purple-600 hover:bg-purple-700 text-white py-1 rounded-lg  transition"
                                    >
                                        Create Account
                                    </button>
                                </form>
                            </>
                            :
                            <>
                                <form className="space-y-2">
                                    <div>
                                        <label className="text-sm font-semibold text-gray-600">Email</label>
                                        <input
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full text-sm border rounded-lg px-2 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-700"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-semibold text-gray-600">Password</label>
                                        <input
                                            onChange={(e) => setPassword(e.target.value)}
                                            value={password}
                                            type="password"
                                            placeholder="Enter your password"
                                            className="w-full text-sm border rounded-lg px-2 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-700"
                                            required
                                        />
                                    </div>

                                    <button
                                        onClick={handleSignupForm}
                                        type="submit"
                                        className="w-full bg-purple-600 text-white py-1.5 rounded-lg text-sm hover:bg-purple-700 transition"
                                    >
                                        Sign In
                                    </button>
                                </form>
                            </>
                    }

                    {
                        currState === "signup" ?
                            <p className="text-center text-sm text-gray-600 mt-2">
                                Already have an account?{" "}
                                <span onClick={() => setCurrState("signin")} className="text-blue-600 hover:underline cursor-pointer">
                                    Sign in
                                </span>
                            </p>
                            :
                            <p className="text-center text-sm text-gray-600 mt-2">
                                Already have an account?{" "}
                                <span onClick={() => setCurrState("signup")} className="text-blue-600 hover:underline cursor-pointer">
                                    Sign Up
                                </span>
                            </p>

                    }
                </div>
            </div>
        </div>
    );
};

export default SignupPage;