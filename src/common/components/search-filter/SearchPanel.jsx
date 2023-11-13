import React, { useState } from 'react';
import Search from './Search';
import Dropdown from './Dropdown'
import { BiPlusCircle } from 'react-icons/bi';
import { useNavigate } from "react-router";

function SearchPanel({ setSearch, categories }) {

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedValue, setSelectedValue] = useState('All Series');

  const navigate = useNavigate();

  const handleAddBook = () => {
      navigate("/books/add");
  }

  return (
    <div className="flex justify-center items-center p-4 flex-row gap-x-4">
        <Search onSearch={setSearch} selectedValue={selectedValue} setSearchQuery={setSearchQuery} />
        <Dropdown items={categories} selectedValue={selectedValue} setSelectedValue={setSelectedValue} searchQuery={searchQuery} onSearch={setSearch} />
        <button onClick={handleAddBook} className='border-none' >
          <BiPlusCircle className="w-8 h-8 text-white rounded-full hover:text-[#66acff]" />
        </button>
    </div>
  );
}

export default SearchPanel;
