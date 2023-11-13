import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { REST_BASE_URL } from "./common/constants";

const Subscribers = () => {
    const [loading, setLoading] = useState(true);
    const [pendingSubs, setPendingSubs] = useState(['cristiano', 'therock']);
    const [subsList, setSubsList] = useState(['francisngannou', 'thenotoriousmma', 'alexpoatanpereira', 'stricklandmma']);

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

    if (loading) {
        return (
            <div className="h-full w-full flex-1 p-8 min-h-screen"></div>
        )
    }

    return (
        <div className="h-full flex-1 p-8 min-h-screen">
            <div className="flex flex-col gap-8">
                {pendingSubs.length > 0 && (
                    <div className="flex flex-col gap-4">
                        <h1 className="text-xl font-semibold text-white px-2">Pending Request</h1>
                        <div className="flex flex-col w-full gap-3">
                            {pendingSubs.map((subs) => (
                                <div className="flex bg-[#222637] w-full px-6 py-3 justify-between items-center rounded-lg">
                                    <div className="text-white">
                                        <span className="font-bold">@{subs.toLowerCase()}</span> requested to follow you
                                    </div>
                                    <div className="flex gap-4">
                                        <button className="flex items-center justify-center rounded-lg bg-[#66acff] shadow-sm text-md text-white py-2 px-5 my-1 border-none">
                                            Accept
                                        </button>
                                        <button className="flex items-center justify-center rounded-lg shadow-sm text-md text-white py-2 px-5 my-1 border border-gray-400 hover:border-red-500 hover:text-red-500">
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
    
                {subsList.length > 0 && (
                    <div className="flex flex-col gap-4">
                        <h1 className="text-xl font-semibold text-white px-2">Subscribers</h1>
                        <div className="flex flex-col w-full gap-3">
                            {subsList.map((subs) => (
                                <div className="flex bg-[#222637] w-full px-6 py-3 justify-between items-center rounded-lg">
                                    <div className="text-white">
                                        <span className="font-bold">@{subs.toLowerCase()}</span> is a loyal subscriber
                                    </div>
                                    <button className="flex items-center justify-center rounded-lg shadow-sm text-md text-white py-2 px-5 my-1 border border-gray-400 hover:border-red-500 hover:text-red-500">
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
    
                {pendingSubs.length === 0 && subsList.length === 0 && (
                    <div className="text-white text-xl font-semibold">No subscriber requests yet...</div>
                )}
            </div>
        </div>
    );
}

export default Subscribers;