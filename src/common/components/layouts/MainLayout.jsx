import React from "react";
import Sidebar from "../nav/Sidebar";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { REST_BASE_URL } from "../../constants";

const MainLayout = () => {

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
        if (window.location.pathname === '/') {
            navigate('/dashboard');
        }
    });
	
	useEffect(() => {
		checkAuth();
	}, []);

    if (loading) return (
        <div></div>
    )

    return (
        <div className={`flex bg-[#1d1617]`}>
            <Sidebar/>
            <Outlet/>
        </div>
    )
}

export default MainLayout;