"use client";

import BigRightArrow from '@/icons/BigRightArrow';
import React, { useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from "react";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type DisciplinesCategoryProps = {
    text: string;
}

function DisciplinesCategory({text}: DisciplinesCategoryProps) {

    const [icon, setIcon] = useState(false);
    const disciplinesCategoryTextRef = useRef<HTMLDivElement | null>(null);
    const disciplinesCategoryArrowRef = useRef<HTMLDivElement | null>(null);
    const tweenRef = useRef<gsap.core.Tween | null>(null);

    useGSAP(() => {
        if(!disciplinesCategoryTextRef.current) return ;

        gsap.from(disciplinesCategoryTextRef.current, {
            opacity: 0,
            delay: 0.2,
            y: 50,
            duration: 0.5,
            clipPath: "inset(0% 0% 100% 0%)",
            scrollTrigger: {
                trigger: disciplinesCategoryTextRef.current,
                start: "top 110%"
            }
        })

        ScrollTrigger.refresh();

    }, []);

    useEffect(() => {
        if(!disciplinesCategoryArrowRef.current) return ;

        tweenRef.current = gsap.fromTo(
            disciplinesCategoryArrowRef.current, 
            { opacity: 0, x: -25, clipPath: "inset(0% 0% 0% 100%)"},
            { opacity: 1, x: 0, duration: 0.3, ease: "power1.out", paused: true, clipPath: "inset(0% 0% 0% 0%)" }
        );

        const handleMouseOver = () => tweenRef.current?.play();
        const handleMouseLeave = () => tweenRef.current?.reverse();

        const textElement = disciplinesCategoryTextRef.current;
        if(textElement){
            textElement.addEventListener("mouseover", handleMouseOver);
            textElement.addEventListener("mouseleave", handleMouseLeave);
        }

        return () =>{
            if(textElement){
                textElement.removeEventListener("mouseover", handleMouseOver);
                textElement.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);

  return (
    <div 
        ref={disciplinesCategoryTextRef}
        className='flex items-center text-[6.5vw] xs:[5.5vw] sm:text-[5vw] md:space-x-1 md:text-[3.5vw] lg:text-[2.7vw] xl:text-[2.5vw] hover:cursor-pointer' 
        onMouseOver={() => setIcon(true)} 
        onMouseLeave={() => setIcon(false)}
    >
        <div
            ref={disciplinesCategoryArrowRef}
            className={`${icon ? "invisible lg:visible text-dark-blue" : "invisible"}`}>
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