import Link from 'next/link'
import React from 'react'
import { FaSearch, FaShoppingBag } from 'react-icons/fa'

const Header = () => {
  return (
    <div className=' w-full md:w-[1500px] h-[250px] bg-[#0D0D0DF2] overflow-hidden'>
    <div className='max-w-[1320px] mx-auto h-[87px]'>
        <h1 className='font-bold text-2xl  text-center md:ml-[100px] pt-7 text-[#FF9F0D]'>Food <span className='text-[#ffffff]'>tuck </span></h1>
            {/* navbar */}
        <nav className=' text-white'>
            <ul className='flex font-inter text-[16px]  gap-4 md:gap-7 ml-4 md:ml-2 mt-6'>
                <Link href="/" className='text-[#FF9F0D]'>Home</Link> 
                <li>Menu</li>
                <Link href="/Faq">FAQ</Link>
                <Link href="/4O4">4O4</Link>
                <li>About </li>
                <li>Shop </li>
                <li>Contact </li>
            </ul>
            {/* search bar and shopping bag */}
            <div className='w-[300px] mt-4 md:mt-0 h-[54px] border border-[#FF9F0D] rounded-[27px] ml-4 md:ml-[1000px] '>
                {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        className=" bg-transparent text-white placeholder-white focus:outline-none ml-4 mt-3"
      />
            <FaSearch size={24} 
            className='ml-64 -mt-5'/>
           <FaShoppingBag size={24}
           className='ml-[305px] -mt-6' />
            </div>
        </nav>
        </div>
        </div>
  )
}

export default Header
