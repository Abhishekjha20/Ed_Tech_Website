import React from 'react'
import Typed from 'react-typed';

function Banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[50px]'>
        <div className='max-w-[1240px] mx-auto text-center font-bold'>
           <div className='text-xl md:text-3xl md:p-[24px]'>
            Learn with us
           </div>
           <h2 className='text-white text-5xl md:text-[80px] md:p-[24px]'> Grow with us.</h2>
           <div className='text-[20px] md:text-[50px] md:p-[24px] text-white'>
            Learn 
            <Typed
            className='pl-3'
                    strings={['Web Development, App Development']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={120}
                />
           </div>
           <button className='bg-black text-white p-3 rounded'>Get Started</button>
        </div>
    </div>
  )
}
export default Banner;
