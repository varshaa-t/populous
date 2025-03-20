import React, { useRef } from 'react'
import Button from './Button'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP);

function ExploreSection() {

  const exploreSectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {

    gsap.from(exploreSectionRef.current, {
      opacity: 0,
      y: 50,
      clipPath: "inset(0% 0% 100% 0%)",
      duration: 0.4,
      scrollTrigger: {
        trigger: exploreSectionRef.current,
        start: "top 95%"
      }
    })

  }, []);

  return (
    <div className='flex flex-col items-center space-y-4 text-center lg:text-left lg:items-start lg:space-y-0 lg:flex-row justify-between text-white'>   
        <div ref={exploreSectionRef} className='text-2xl w-[80vw] xs:text-xl xs:w-[50vw] xs:leading-10 sm:text-2xl sm:w-[35vw] md:w-[42vw] lg:w-[35vw] md:text-[27px] lg:text-[2.5vw] tracking-tighter'>
          <div>Explore some of our best work</div> 
          <div>around the world</div>
        </div>
        <div className='flex flex-col items-center lg:items-start'>
            <p className='pb-2 w-[70vw] xs:w-[50vw] text-sm sm:text-base sm:w-[40vw] lg:w-[20vw] lg:pb-10'>
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