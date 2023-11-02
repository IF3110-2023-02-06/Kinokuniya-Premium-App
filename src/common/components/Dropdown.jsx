import React, { useState, useEffect, useRef } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedValue, setSelectedValue] = useState(''); // Added state for the selected value
  const dropdownRef = useRef(null);

  useEffect(() => {
    setSelectedValue(items[0]);
  }, [items]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleOptionClick = (item) => {
    setSelectedValue(item);
    setIsOpen(false);
  };

  return (
    <div className="relative group h-full" ref={dropdownRef}>
      <button
        id="dropdown-button"
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full h-full px-4 py-3 text-sm font-medium text-gray-200 bg-[#3f2a22] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
      >
        <span className="mr-2 text-gray-300 max-w-xs whitespace-nowrap overflow-hidden overflow-ellipsis">
          {selectedValue || 'Dropdown'}
        </span>
        <BiChevronDown className={`w-5 h-5 ml-2 -mr-1 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      <div
        id="dropdown-menu"
        className={`absolute right-0 mt-2 rounded-md shadow-lg bg-[#3f2a22] ring-1 ring-black ring-opacity-5 p-1 space-y-1 ${isOpen ? '' : 'hidden'}`}
      >
        <input
          id="search-input"
          className="block bg-[#3b2115] w-full px-4 py-2 text-gray-200 rounded-md focus:outline-none placeholder:text-gray-300 shadow-inner-md text-sm"
          type="text"
          placeholder="Search items"
          autoComplete="off"
          onChange={handleSearchInput}
        />
        {items.map((item, index) => (
          item.toLowerCase().includes(searchTerm) && (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-gray-200 hover:bg-[#5a4943] active:bg-blue-100 cursor-pointer rounded-md"
              onClick={() => handleOptionClick(item)}
            >
              {item}
            </a>
          )
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
