import React from "react";
import { BiSearch } from "react-icons/bi";
import { REST_BASE_URL } from "../../constants";

const Search = ({ onSearch, selectedValue, setSearchQuery }) => {
    const debounce = (func, delay) => {
        let debounceTimer;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        }
    }

    const handleSearch = debounce(async (e) => {
        try {
            // Request for books with title containing search query
            const query = e.target.value;

            const response = await fetch(`${REST_BASE_URL}/book?title=${query}&series=${selectedValue}`, {
                headers: {
                    "Authorization": localStorage.getItem("token") ?? ""
                }
            });

            if (!response.ok) {
                const data = await response.json();
                console.error(data.message);
                return;
            }

            const data = await response.json();

            onSearch(data.data);
            setSearchQuery(query);

        } catch (error) {
            console.error(error);
        }
    }, 500);

    return (
        <div className="flex items-center w-full h-full">
            <div className="flex w-full flex-row h-full">
                <input
                    type="text"
                    className="flex w-full h-full px-4 py-3 text-gray-200 rounded-tl-md rounded-bl-md bg-[#222637] drop-shadow-xl focus:outline-none placeholder:text-gray-300 text-md border-none"
                    placeholder="Search books..."
                    onChange={(e) => handleSearch(e)}
                />
                <button className="px-4 text-white rounded-tr-md rounded-br-md bg-[#222637] hover:transform-none">
                    <BiSearch className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}

export default Search;
