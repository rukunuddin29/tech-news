import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoLogoAmplify } from "react-icons/io5";

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className='flex justify-between items-center  mx-4 lg:mx-52'>
      <div className='flex items-center'>
        <IoLogoAmplify className='logo w-10 h-10 mr-4 text-rose-600 lg:w-20 lg:h-20' />
      </div>
      <div className='flex items-center flex-grow lg:flex-grow-0 lg:w-1/2'>
        <input
          className='bg-slate-900 border-2 border-solid border-slate-800 px-3 py-1.5 rounded-2xl lg:w-4/5 lg:h-14'
          type="text"
          placeholder='Search...'
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <CiSearch className='text-2xl -ml-8 lg:-ml-12' />
      </div>
    </div>
  );
}

export default Header;
