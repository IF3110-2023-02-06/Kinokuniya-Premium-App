import { React, useState } from "react";
import { BiLogoReact, BiSolidChevronLeftCircle, BiLineChart, BiCog, BiBook, BiLogOut } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { NavLink, Outlet } from "react-router-dom";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", component: <RxDashboard className="text-xl"/>, link: "/dashboard" },
        { title: "My Books", component: <BiBook className="text-xl"/>, link: "/books" },
        { title: "Analytics", component: <BiLineChart className="text-xl"/>, link: "/analytics" },
        { title: "Settings", component: <BiCog className="text-xl"/>, link: "/settings" },
        { title: "Log Out", component: <BiLogOut className="text-xl"/>, link: "/logout" }
    ];

    return (
        <div className="flex bg-[#1c2a39]">
            <aside
                className={` ${
                open ? "w-64" : "w-20 "
                } bg-[#11101D] h-screen p-5  pt-8 relative duration-300`}
            >
                <div className={`absolute cursor-pointer -right-3 top-9 border-[#1c2a39] hover:border-[#66acff]
                    border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}>
                    <BiSolidChevronLeftCircle className="text-white text-2xl"/>
                </div>
                
                <div className="flex gap-x-4 items-center">

                <div className={`cursor-pointer duration-500 ${
                    open && "rotate-[360deg]"
                    }`}>
                    <BiLogoReact className="text-3xl text-[#04d8f9]" />
                </div>
                <h1
                    className={`text-white origin-left font-bold text-2xl duration-200 ${
                    !open && "scale-0"
                    }`}
                >
                    Kinokuniya 
                </h1>
                </div>
                <ul className="pt-6">
                {Menus.map((Menu, index) => (
                    <NavLink to={Menu.link}>
                        {
                            ({isActive}) => 
                            <li
                                key={index}
                                className={`flex rounded-md p-2 cursor-pointer hover:bg-gray-300/10 text-gray-300 text-sm items-center gap-x-4 mt-4 ${isActive ? 'bg-gray-300/10' : ''}`}
                            >
                                {Menu.component}
                                <span className={`${!open && "hidden"} origin-left duration-400 text-xl ease-linear`}>
                                    {Menu.title}
                                </span>
                            </li>
                        }
                    </NavLink>
                ))}
                </ul>
            </aside>
            <Outlet />
        </div>
    );
}

export default Sidebar;