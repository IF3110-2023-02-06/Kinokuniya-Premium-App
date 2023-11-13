import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { REST_BASE_URL } from "./common/constants";

const Subscribers = () => {
    const [loading, setLoading] = useState(true);

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
        <div className="h-screen flex-1 p-8 min-h-screen">
            <h1 className="text-2xl font-semibold text-white">Subscribers Page</h1>
        </div>
    );
}

export default Subscribers;