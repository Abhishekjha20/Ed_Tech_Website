import React from 'react'

function News_later() {
  return (
    <div className='w-full bg-[#2699fb] p-4'>

        <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
            <div className='m-2'>
                <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to learn latest I.T skills?</h1>
                <span className='text-white'>Sign up to newslater and stay up to date.</span>
            </div>

            <div className='m-2'>
                <input type='text' className='p-3 mr-2 text-slate-600 rounded mb-2 sm:w-full'placeholder='Email'/>
                <button className='bg-black text-white p-3 rounded'>Get Started</button> 
                <br/>
                <p className='text-white'>
                    We care about the proctection of your data. Read our <br/>
                    <a href='' className='text-black'> privacy policy. </a>
                </p>  
            </div>
        </div>
    </div>
  )
}

export default News_later
