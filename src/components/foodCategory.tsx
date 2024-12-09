import Image from 'next/image'
import React from 'react'

const FoodCategory = () => {
  return (
    <div className=" w-full md:w-[1500px] h-[1300px] bg-[#0D0D0DF2] text-white overflow-hidden">
      <h3 className='text-[#FF9F0D] font-vibe text-[32px] ml-[600px] pt-10'> Food Category</h3>
      <h1 className='text-[#FF9F0D] font-bold text-5xl ml-[450px]'> Ch<span className='text-white'>oose Food Iteam</span></h1>
      <div className='ml-[1050px] '>
        <Image src="/Images/leaf.png" alt='leaf'
        width={444.1} height={532.2}/>
      </div>
      <div className='w-[1320px] h-[329px] rounded-md flex gap-6 -mt-[500px] ml-14'>
        <Image src="/Images/food4.png" alt='4'
        width={306} height={329}/>

       <Image src="/Images/food5.png" alt='5'
        width={306} height={329}/>

       <Image src="/Images/food6.png" alt='6'
        width={306} height={329}/>

        <Image src="/Images/food7.png" alt='7'
        width={306} height={329}/>
      </div>
      
      {/* why choose us */}
      <div className='w-[1320px] h-[716px] mt-20 ml-14'>
        <Image src="/Images/Why chose us.png" alt='whychooseus'
        width={1320} height={716}/>
      </div>
    </div>
  )
}

export default FoodCategory
