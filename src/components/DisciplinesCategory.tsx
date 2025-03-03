"use client";

import BigRightArrow from '@/icons/BigRightArrow';
import React, { useState } from 'react'

type DisciplinesCategoryProps = {
    text: string;
}

function DisciplinesCategory({text}: DisciplinesCategoryProps) {

    const [icon, setIcon] = useState(false);

  return (
    <div 
        className='flex items-center text-[6.5vw] xs:[5.5vw] sm:text-[5vw] md:space-x-1 md:text-[3.5vw] lg:text-[2.7vw] xl:text-[2.5vw] hover:cursor-pointer' 
        onMouseOver={() => setIcon(true)} 
        onMouseLeave={() => setIcon(false)}
    >
        <div className={`${icon ? "invisible lg:visible text-dark-blue" : "invisible"}`}>
            <BigRightArrow/>
        </div>
        <div className='flex justify-between -mx-[6vw] xs:-mx-8 lg:mx-0 hover:text-dark-blue border-t-[1px] border-slate-300'>
            <div className='w-[90vw] xs:w-[88vw] sm:w-[84vw] md:w-[40vw] tracking-tighter'>{text}</div>
            <div className='block lg:hidden'>
                <BigRightArrow/>
            </div>
        </div>
    </div>
  )
}

export default DisciplinesCategory