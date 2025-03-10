"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image'
import React, { useRef } from 'react'

gsap.registerPlugin(useGSAP);

type ProjectCardProps = {
    img: string;
    title?: string;
    year?: number;
    size: "small" | "medium" | "large";
}

const sizeClasses = {
    "small": "rounded-md w-full md:w-[45vw] lg:w-[41vw]",
    "medium": "rounded-md w-full",
    "large": "rounded-none h-screen object-cover md:h-auto w-full brightness-[0.80]"
}

const sizeAttributes = {
    small: { width: 493, height: 277 },
    medium: { width: 1007, height: 598 },
    large: { width: 1181, height: 1182}
}

function ProjectCard({img, title, year, size}: ProjectCardProps) {

    const {width, height} = sizeAttributes[size];

    
    const projectImageRef = useRef<HTMLImageElement | null>(null);

    useGSAP(() => {
        if(!projectImageRef.current) return;

        const animation = gsap.to(projectImageRef.current, {
            scale: 1.05,
            duration: 0.4,
            ease: "power1.inOut",
            paused: true
        })

        const handleMouseEnter = () => animation.play();
        const handleMouseLeave = () => animation.reverse();
        
        const imgElement = projectImageRef.current;

        imgElement.addEventListener("mouseenter", handleMouseEnter);
        imgElement.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            imgElement.removeEventListener("mouseenter", handleMouseEnter);
            imgElement.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

  return (
    <div className={`flex flex-col justify-between space-y-2 ${sizeClasses[size]} group`}>
        <div className='overflow-hidden'>
            <Image
                ref={projectImageRef}
                width={width}
                height={height}
                src={img}
                alt='project-img'
                className={`cursor-pointer ${sizeClasses[size]}`}
            />
        </div>
        <div className='flex justify-between text-[17px] hover:cursor-pointer'>
            <div className='group-hover:underline'>{title}</div>
            <div>{year}</div>
        </div>
    </div>
  )
}

export default ProjectCard