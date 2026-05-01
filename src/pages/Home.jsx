import React from 'react'
import Videos from '../components/home/Videos'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'

const Home = () => {
  return (
    <div>
          <div className='h-screen w-screen fixed '>
          <Videos />
          </div>     
          
          <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
              <HomeHeroText />
              <HomeBottomText />
          </div>
    </div>
  )
}

export default Home
