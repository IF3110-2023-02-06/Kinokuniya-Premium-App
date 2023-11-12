import React, { useState } from 'react';
import Search from './Search';
import Dropdown from './Dropdown'

function SearchPanel({ setSearch, categories }) {

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedValue, setSelectedValue] = useState('All Series');

  return (
    <div className="flex justify-center items-center p-4 flex-row gap-x-4">
        <Search onSearch={setSearch} selectedValue={selectedValue} setSearchQuery={setSearchQuery} />
        <Dropdown items={categories} selectedValue={selectedValue} setSelectedValue={setSelectedValue} searchQuery={searchQuery} onSearch={setSearch} />
    </div>
  );
}

export default SearchPanel;
