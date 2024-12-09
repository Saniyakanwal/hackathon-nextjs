import Image from 'next/image'
import React from 'react'

const Progress = () => {
  return (
    <div className='w-[1500px] h-[650px] bg-[#0D0D0DF2] text-white overflow-hidden'>
      <div className='w-[1319px] h-[247px] flex ml-28 pt-32 gap-36'>
        <div className='w-[218px] h-[247px] '>
            <Image src="/Images/logo1.png" alt='1'
            width={120} height={120}/>
            <h1 className='font-bold text-2xl mt-5 -ml-12'>Professional Chefs</h1>
            <p className='font-bold text-[40px] ml-6'>420</p>
        </div>

        <div className='w-[162px] h-[247px]'>
            <Image src="/Images/logo2.png" alt='2'
            width={120} height={120}/>
            <h1 className='font-bold text-2xl mt-5 -ml-6'>Items Of Food</h1>
            <p  className='font-bold text-[40px] ml-6'>320</p>
        </div>

        <div className='w-[248px] h-[247px]'>
            <Image src="/Images/logo3.png" alt='3'
            width={120} height={120}/>
            <h1 className='font-bold text-2xl mt-5 -ml-7'>Years Of Experienced</h1>
            <p  className='font-bold text-[40px] ml-12'>30+</p>
        </div>

        <div className='w-[206px] h-[247px]'>
            <Image src="/Images/logo4.png" alt='4'
            width={120} height={120}/>
            <h1 className='font-bold text-2xl mt-5 -ml-5'>Happy Customers</h1>
            <p  className='font-bold text-[40px] ml-10'>220</p>
        </div>
      </div>
    </div>
  )
}

export default Progress
