import React from 'react'
import Videos from './Videos'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-5 text-center'>
      <div className='text-white flex items-center justify-center text-[9.5vw] uppercase leading-[8vw]'>
        The spark for
      </div>
      <div className='text-white flex items-start justify-center  text-[9.5vw] uppercase leading-[8vw]'>
        all
        <div className='rounded-full overflow-hidden -mt-3 h-[7vw] w-[16vw]'>
          <Videos/>
        </div>
        things
      </div>
      <div className='text-white flex items-center justify-center text-[9.5vw] uppercase leading-[8vw]'>
        creative
      </div>
    </div>
  )
}

export default HomeHeroText