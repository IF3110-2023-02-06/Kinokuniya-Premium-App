import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { REST_BASE_URL } from "./common/constants";

const Settings = () => {
    const navigate = useNavigate();

    const checkAuth = async () => {
		const response = await fetch(`${REST_BASE_URL}/user/check`,
		{
		  headers: {
			"Authorization": localStorage.getItem("token") ?? ""
		  }
		});

		
		if (!response.ok) {
			navigate('/login');
		}

        setLoading(false);
	};

    useEffect(() => {
		checkAuth();
	}, []);

    useEffect(() => {
        if (window.location.pathname === '/') {
            navigate('/books');
        }
    });

    return (
        <div className="h-full w-full flex-1 p-8 min-h-screen">
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
