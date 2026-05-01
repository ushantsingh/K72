import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font1] flex items-center justify-center gap-2'>
      
      <div className='border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-[120px] h-[70px] w-[44vw] max-w-[440px] min-w-[140px] flex items-center justify-center text-white border-white rounded-full px-6 lg:px-10 uppercase'>
        <Link className='text-[8vw] sm:text-[6vw] lg:text-[8vw] mt-2 lg:mt-3' to='/project'>Work</Link>
      </div>

      <div className='border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-[120px] h-[70px] w-[52vw] max-w-[560px] min-w-[160px] flex items-center justify-center text-white border-white rounded-full px-6 lg:px-10 uppercase'>
        <Link className='text-[8vw] sm:text-[6vw] lg:text-[8vw] mt-2 lg:mt-3' to='/agence'>Agency</Link>
      </div>
    </div>
  )
}

export default HomeBottomText 