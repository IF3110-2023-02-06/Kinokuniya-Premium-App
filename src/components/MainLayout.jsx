import React from "react";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { REST_BASE_URL } from "../common/constants";

const MainLayout = () => {

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
	};
	
	useEffect(() => {
		checkAuth();
	}, []);

    return (
        <div className={`flex bg-[#1d1617]`}>
            <Sidebar/>
            <Outlet/>
        </div>
    )
}

export default MainLayout;