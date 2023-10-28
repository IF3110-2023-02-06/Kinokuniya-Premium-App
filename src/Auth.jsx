import React from "react";
import Header from "./components/AuthHeader";
import { Outlet } from "react-router";

const Auth = () => {
    return(
        <div className={"bg-[url(/src/assets/Kino%20BG.svg)] min-h-full h-screen w-full"}>
            <div className="bg-clip-padding bg-black backdrop-filter backdrop-blur-sm bg-opacity-20 w-full h-full py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                <div className="max-w-md w-full space-y-8 p-8 rounded-lg">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
};

export default Auth;