import React from 'react';
import Search from './Search';
import Dropdown from './Dropdown'

function SearchPanel({setSearch}) {

  const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
  const prices = ['< Rp500k', 'Rp500k - Rp1M', '> Rp1M'];

  return (
    <div className="flex justify-center items-center p-4 flex-row gap-x-4">
        <Search onSearch={setSearch} />
        <Dropdown items={categories} />
        <Dropdown items={prices} />
    </div>
  );
}

export default SearchPanel;
