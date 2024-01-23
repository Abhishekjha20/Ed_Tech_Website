import React from "react";
import laptop from "../assest/Image/laptop.jpg";

function Experts() {
  return (
    <div className="max-w-[1240px] p-2 mx-auto my-1 md:grid grid-cols-2">
      <div className="col-span-1 md:w-[80%] text-center">
        <img src={laptop} alt="" className="inline" />
      </div>
      <div className="col-span-1 flex flex-col justify-center">
        <h1 className="text-[#00df9a] font-bold my-2">LAERN FROM EXPERTS</h1>
        <p className="my-2 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sunt exercitationem nemo nesciunt a quaerat nisi nam dolore necessitatibus molestias alias ex, voluptate, reprehenderit est, minus error sapiente sint doloribus.
        </p>
        <button className="bg-black text-white p-3 rounded w-[30%]">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Experts;
