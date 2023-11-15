import { React, useState, useEffect } from "react";
import { BiUserCheck, BiSolidChevronLeftCircle, BiLineChart, BiCog, BiBook, BiLogOut } from "react-icons/bi";

import { NavLink } from "react-router-dom";
import kinoLogo from "../../../assets/LogoWhite.png"

const Sidebar = ({open, setOpen}) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    
    const Menus = [
        { title: "My Books", component: <BiBook className="text-[18px]"/>, link: "/books", id: 1 },
        { title: "Analytics", component: <BiLineChart className="text-[18px]"/>, link: "/analytics", id: 2 },
        { title: "Subscribers", component: <BiUserCheck className="text-[18px]"/>, link: "/subscribers", id: 3 },
        { title: "Settings", component: <BiCog className="text-[18px]"/>, link: "/settings", id: 4 },
        { title: "Log Out", component: <BiLogOut className="text-[18px]"/>, link: "/login", id: 5 }
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
            if (window.innerWidth <= 768) {
                setOpen(false);
            } else {
                setOpen(true);
            }
        };

        // Initial check on component mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount


    const logout = () => {
        localStorage.removeItem("token");
    }

    return (
        <aside
            className={`${
            open ? "min-w-[248px]" : "w-20"
            } fixed top-0 left-0 h-full bg-[#11101C]/50 backdrop-filter backdrop-blur-[20px] p-5 pt-8 transition-all duration-500 drop-shadow-xl`}
        >
            <div className={`absolute cursor-pointer -right-3 top-9 border-[#1c2a39] hover:border-[#537aa4]
                border-2 rounded-full duration-500 ${!open && "hidden"} ${isSmallScreen && "hidden"}`}
                onClick={() => setOpen(!open)}>
                <BiSolidChevronLeftCircle className="text-white text-2xl"/>
            </div>
            
            <div className={`flex items-center ${open ? "gap-x-4" : "ml-[2px]"}`}>

                <img
                    src={kinoLogo} 
                    className={`cursor-pointer duration-100 w-8 ${
                    open && "rotate-[360deg]"
                    }`}
                    onClick={() => setOpen(!open)}
                    >
                </img>
                <h1
                    className={`text-white origin-left font-bold text-2xl duration-100 font-['Roboto_Slab'] ${
                    !open && "opacity-0"
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
                                className={`flex rounded-md p-2 cursor-pointer hover:bg-gray-300/10 text-gray-300 text-sm items-center mt-4 ${isActive ? 'bg-gray-300/10' : ''} ${open ? "gap-x-5" : "w-fit mb-[24px]"}`}
                                onClick={() => {
                                    if (Menu.title === "Log Out") {
                                        logout();
                                    }
                                }}
                            >
                                {Menu.component}
                                <div className={`${!open && "hidden opacity-0"} origin-left duration-500 text-base text-[18px]`}>
                                    {Menu.title}
                                </div>
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