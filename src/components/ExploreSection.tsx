import React from 'react'
import Button from './Button'

function ExploreSection() {
  return (
    <div className='flex flex-col items-center space-y-4 text-center lg:text-left lg:items-start lg:space-y-0 lg:flex-row justify-between text-white'>   
        <div className='text-[2.5vw] w-[35vw] tracking-tighter leading-10'>Explore some of our best work around the world</div>
        <div className='flex flex-col items-center lg:items-start'>
            <p className='w-[40vw] pb-2 lg:w-[20vw] lg:pb-10'>
                Discover how we transform ideas into 
                reality, fostering connections that bridge 
                cultures and celebrate the beauty of 
                human interaction.
            </p>
            <div className='w-fit'>
              <Button
                  text='Start'
                  variant='primary'
              />
            </div>
        </div>
    </div>
  )
}

export default ExploreSection