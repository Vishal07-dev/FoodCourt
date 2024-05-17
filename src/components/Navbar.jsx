import React, { useState } from 'react'
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp, MdWallet } from 'react-icons/md'
import {TbTruckDelivery } from 'react-icons/tb'

const Navbar = () => {
 const [nav,setnav]=useState(false)
  return (
    <div className="max-w-[1640px] mx-auto p-4 flex justify-between items-start ">
      <div className="flex items-center">
        <div onClick={()=>setnav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30}/>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">Food <span className="font-bold">Court</span></h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white p-2 rounded-full">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/*Search area*/}
      <div className="bg-gray-200 rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px] flex items-center">
        <AiOutlineSearch size={20}/>
        <input className="bg-transparent p-2 w-full focus:outline-none" type="text" placeholder='Search Food' />
      </div>
      {/*Cart button*/ }
   
          <button className="bg-black text-white hidden md:flex py-2 rounded-full w-[90px] items-center gap-2">
            <BsFillCartFill size={20} className="ml-5"/>Cart
          </button>
     {/*Mobile menu*/}
     {nav ? <div className="fixed top-0 left-0 w-full h-screen bg-black/80 z-10">

</div>:''}
     <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
      <AiOutlineClose size={30} className="right-4 top-4 cursor-pointer absolute" onClick={()=>setnav(!nav)}/>
      
      <h2 className="text-2xl p-4">Food <span className="font-bold">Court</span></h2>
      <nav>
        <ul className="flex flex-col p-4 text-gray-800">
          <li className="text-xl py-4 flex"><TbTruckDelivery size={25} className="mr-4"/>Orders</li>
          <li className="text-xl py-4 flex"><MdFavorite size={25} className="mr-4"/>Favourites</li>
          <li className="text-xl py-4 flex"><FaWallet size={25} className="mr-4"/>Wallet</li>
          <li className="text-xl py-4 flex"><MdHelp size={25} className="mr-4"/>Help</li>
          <li className="text-xl py-4 flex"><AiFillTag size={25} className="mr-4"/>Promotions</li>
          <li className="text-xl py-4 flex"><BsFillSaveFill size={25} className="mr-4"/>Best ones</li>
          <li className="text-xl py-4 flex"><FaUserFriends size={25} className="mr-4"/>Invite friends</li>

        </ul>
      </nav>
     </div>
    </div>
  )
}

export default Navbar