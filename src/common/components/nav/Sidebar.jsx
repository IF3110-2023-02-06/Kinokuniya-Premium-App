import { React, useState } from "react";
import { BiUserCheck, BiSolidChevronLeftCircle, BiLineChart, BiCog, BiBook, BiLogOut } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import kinoLogo from "../../../assets/LogoWhite.png"

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", component: <RxDashboard className="text-xl"/>, link: "/dashboard", id: 1 },
        { title: "My Books", component: <BiBook className="text-xl"/>, link: "/books", id: 2 },
        { title: "Analytics", component: <BiLineChart className="text-xl"/>, link: "/analytics", id: 3 },
        { title: "Subscribers", component: <BiUserCheck className="text-xl"/>, link: "/subscribers", id: 4 },
        { title: "Settings", component: <BiCog className="text-xl"/>, link: "/settings", id: 5 },
        { title: "Log Out", component: <BiLogOut className="text-xl"/>, link: "/login", id: 6 }
    ];

    const logout = () => {
        localStorage.removeItem("token");
    }

    return (
        <aside
            className={` ${
            open ? "w-60" : "w-20 "
            } bg-gradient-to-r from-[#2B3242] to-[#161C30] backdrop-filter backdrop-blur-[20px] bg-opacity-10 p-5  pt-8 relative duration-500 drop-shadow-xl`}
        >
            <div className={`absolute cursor-pointer -right-3 top-9 border-[#1c2a39] hover:border-[#537aa4]
                border-2 rounded-full duration-300 ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)}>
                <BiSolidChevronLeftCircle className="text-white text-2xl"/>
            </div>
            
            <div className="flex gap-x-4 items-center">

            <img
                src={kinoLogo} 
                className={`cursor-pointer duration-500 w-8 ${
                open && "rotate-[360deg]"
                }`}>
            </img>
            <h1
                className={`text-white origin-left font-bold text-2xl duration-200 font-['Roboto_Slab'] ${
                !open && "scale-0"
                }`}
            >
                Kinokuniya 
            </h1>
            </div>
            <ul className="pt-6">
            {Menus.map((Menu) => (
                <NavLink to={Menu.link} key={Menu.id}>
                    {
                        ({ isActive }) => (
                            <li
                                className={`flex rounded-md p-2 cursor-pointer hover:bg-gray-300/10 text-gray-300 text-sm items-center gap-x-4 mt-4 ${isActive ? 'bg-gray-300/10' : ''}`}
                                onClick={() => {
                                    if (Menu.title === "Log Out") {
                                        logout();
                                    }
                                }}
                            >
                                {Menu.component}
                                <span className={`${!open && "hidden"} origin-left duration-400 text-base ease-linear`}>
                                    {Menu.title}
                                </span>
                            </li>
                        )
                    }
                </NavLink>
            ))}

            </ul>
        </aside>
    );
}

export default Sidebar;