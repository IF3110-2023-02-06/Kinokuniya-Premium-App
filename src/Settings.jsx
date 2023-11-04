import React from "react";

const Settings = () => {
    return (
        <div className="h-screen flex-1 p-8">
            <h1 className="text-2xl font-semibold text-white">Settings Page</h1>
            <div>
                <h1 className="text-xl pt-6 font-semibold text-white">Email</h1>
                <input type="text" 
                className="flex w-full h-full px-4 py-3 text-gray-200 rounded-md bg-[#3f2a22] focus:outline-none placeholder:text-gray-300 text-md"
                placeholder="Enter Email ..."></input>
            </div>
            <div>
                <h1 className="text-xl pt-6 font-semibold text-white">Username</h1>
                <input type="text" 
                className="flex w-full h-full px-4 py-3 text-gray-200 rounded-md bg-[#3f2a22] focus:outline-none placeholder:text-gray-300 text-md"
                placeholder="Enter Username ..."></input>
            </div>
            <div>
                <h1 className="text-xl pt-6 font-semibold text-white">Name</h1>
                <input type="text" 
                className="flex w-full h-full px-4 py-3 text-gray-200 rounded-md bg-[#3f2a22] focus:outline-none placeholder:text-gray-300 text-md"
                placeholder="Enter Name ..."></input>
            </div>
            <div className="relative">
                <h1 className="text-xl pt-6 font-semibold text-white">Password</h1>
                <input type="text" 
                className="flex w-full h-full px-4 py-3 text-gray-200 rounded-md bg-[#3f2a22] focus:outline-none placeholder:text-gray-300 text-md"
                placeholder="Enter Password ..."></input>
            </div>
            <div>
                <button className="px-4 py-3 mt-8 text-white rounded-md bg-[#a0522d] hover:transform-none absolute bottom-100 right-8 ">Save</button>
            </div>

        </div>
    );
}

export default Settings;
