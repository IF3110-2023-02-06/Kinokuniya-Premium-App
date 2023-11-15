import React from "react";
import Sidebar from "../nav/Sidebar";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";

const MainLayout = () => {

    const [open, setOpen] = useState(true);

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
        <div className={`flex bg-gradient-to-r from-[#161C30] to-[#1E1E1E] via-[rgba(35, 48, 74, 0.00)] h-full w-full overflow-hidden`}>
            <Sidebar open={open} setOpen={setOpen}/>
            <main className={`flex-1 overflow-y-auto w-full transition-all duration-100 ${open ? 'ml-[248px]' : 'ml-20'}`}>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout;