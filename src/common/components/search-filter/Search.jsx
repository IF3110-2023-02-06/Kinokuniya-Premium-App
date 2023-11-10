import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {  
    return (
        <div className="flex items-center w-full h-full">
            <div className="flex w-full flex-row h-full">
                <input
                    type="text"
                    className="flex w-full h-full px-4 py-3 text-gray-200 rounded-tl-md rounded-bl-md bg-gradient-to-r from-[#2B3242] to-[#2a334e] backdrop-filter backdrop-blur-[20px] bg-opacity-10 drop-shadow-xl focus:outline-none placeholder:text-gray-300 text-md"
                    placeholder="Search books..."
                />
                <button className="px-4 text-white rounded-tr-md rounded-br-md bg-[#2a334e] hover:transform-none">
                    <BiSearch className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}

export default Search;