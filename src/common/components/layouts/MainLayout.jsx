import React from "react";
import Sidebar from "../nav/Sidebar";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";

const MainLayout = () => {

    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        if (window.location.pathname === '/') {
            navigate('/books');
        }
    });

    useEffect(() => {
        setLoading(false);
    });

    if (loading) return (
        <div></div>
    )

    return (
        <div className={`flex bg-gradient-to-r from-[#161C30] to-[#1E1E1E] via-[rgba(35, 48, 74, 0.00)] h-full w-full`}>
            <Sidebar/>
            <Outlet/>
        </div>
    )
}

export default MainLayout;