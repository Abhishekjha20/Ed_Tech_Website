import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function Header() {
 const [toggle,setToggle] = useState(false);

  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center py-[12px]">
        <div className="text-3xl font-bold">Grow Tech
        </div>
        {
            toggle ?
            <IoMdClose onClick={()=>setToggle(!toggle)} className="text-white text-2xl md:hidden block "/> 
            :
            <IoMenuOutline onClick={()=>setToggle(!toggle)} className="text-white text-2xl md:hidden block "/>
        }

        <ul className=" md:flex hidden text-white gap-10">
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>


        {/* Responsive menu */}
        <ul className={` duration-300 md:hidden w-full h-screen text-white fixed bg-black  top-[92px] ${toggle?'left-[0]': 'left-[-100%]'} left-[-100%]`}>
          <li className="p-5">Home</li>
          <li className="p-5">Company</li>
          <li className="p-5">Resources</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact</li>
        </ul>


      </div>
    </div>
  );
}

export default Header;
