import React from 'react'
import Button from './Button'

function ExploreSection() {
  return (
    <div className='flex justify-between text-white'>   
        <div className='text-[2.5vw] w-[35vw] tracking-tighter leading-10'>Explore some of our best work around the world</div>
        <div>
            <p className='w-[20vw] pb-10'>
                Discover how we transform ideas into 
                reality, fostering connections that bridge 
                cultures and celebrate the beauty of 
                human interaction.
            </p>
            <Button
                text='Start'
                variant='primary'
            />
        </div>
    </div>
  )
}

export default ExploreSection