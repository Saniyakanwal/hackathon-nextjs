import Image from 'next/image'
import React from 'react'
import {FaCheck} from "react-icons/fa"

const About = () => {
  return (
    <div className=' w-full md:w-[1500px] h-[750px] bg-[#0D0D0DF2] text-white flex items-center overflow-hidden'>
      <div className=' w-full md:w-[562px] h-[562px] px-2 sm:px-8 lg:px-16 '>
        <p className='font-vibe text-[#FF9F0D] text-[32px]  ml-5 md:ml-20'>About us</p>
        <h1 className='font-bold text-5xl  ml-3 md:ml-20 mt-3 text-[#FF9F0D]   '>We  
         <span className='text-[#ffffff]'> Create the best
              foody product
          </span></h1> 
          <p className='font-inter  text-[16px] lg:text-[17px]  ml-3 md:ml-20 w-[526px] mt-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
          <div className='flex items-center  ml-4 md:ml-20 mt-6'>
          <FaCheck size={17}
          className='text-white '/>
          <p className='ml-2 font-inter'> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
      </div>
      <div className='flex items-center  ml-4 md:ml-20 mt-6'>
          <FaCheck size={17}
          className='text-white '/>
          <p className='ml-2 font-inter text-[15px]'>  Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
      </div>
      <div className='flex items-center  ml-4 md:ml-20 mt-6'>
          <FaCheck size={17}
          className='text-white '/>
          <p className='ml-2 font-inter text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <button className='bg-[#FF9F0D] w-[190px] h-[60px] rounded-[30px] ml-20 mt-6 font-inter text-white '>Read More</button>
    </div>

    {/* images */}
    <div className='flex flex-col mt-8 md:mt-0  px-4 sm:px-8 lg:px-16'>
        {/* image 1 */}
    <div className=' justify-center flex mb-4'>
        <Image src="/Images/food1.png" alt='1'
        width={660} height={330}
        className='ml-36 mt-6'/>
                </div>

                {/* image2 & 3 */}
       <div className='flex  ml-0 md:ml-36'>
        <Image src="/Images/food2.png" alt='2'
        width={322} height={194}/>


      <Image src="/Images/food3.png" alt='3'
      width={322} height={194}
      className='ml-4'/>
    </div>
    </div>
    </div>
  )
}

export default About
