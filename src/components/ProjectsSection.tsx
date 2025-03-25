"use client";

import Image from "next/image";
import Button from "./Button";
import ProjectCard from "./ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ProjectsSection() {

    const projectsSectionTitleRef = useRef<HTMLDivElement | null>(null);
    const projectFourTitleRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if(!projectsSectionTitleRef.current) return;

        gsap.from(projectsSectionTitleRef.current, {
            opacity: 0,
            duration: 1.5,
            clipPath: "inset(100% 0% 0% 0%)",
            scrollTrigger: {
                trigger: projectsSectionTitleRef.current,
                start: "top 170%"
            }
        })
    }, []);

    useGSAP(() => {
        if (typeof window === "undefined") return;
    
        const projectsMM = gsap.matchMedia();
    
        projectsMM.add("(min-width: 1280px) and (max-width: 1536px)", () => {
            const scrollTrigger = ScrollTrigger.create({
                trigger: ".projects-trigger",
                start: "top 0.1%", 
                end: "+=130%", 
                pin: ".projects-pin",
                pinSpacing: false,
            });
    
            return () => scrollTrigger.kill();
        });

        projectsMM.add("(min-width: 1024px) and (max-width: 1279px)", () => {
            const scrollTrigger = ScrollTrigger.create({
                trigger: ".projects-trigger",
                start: "top 0.1%",
                end: "+=80%",
                pin: ".projects-pin",
                pinSpacing: false,
            })

            return () => scrollTrigger.kill();
        })
        
        projectsMM.add("(min-width: 768px) and (max-width: 1023px)", () => {
            const scrollTrigger = ScrollTrigger.create({
                trigger: ".projects-trigger",
                start: "top 0.1%",
                end: "+=50%",
                pin: ".projects-pin",
                pinSpacing: false,
            })

            return () => scrollTrigger.kill();
        })
    
        return () => projectsMM.revert();
    }, []);

    useGSAP(() => {
        if(!projectFourTitleRef.current) return;
        
        gsap.from(projectFourTitleRef.current, {
            opacity: 0,
            duration: 0.5,
            y: 50,
            clipPath: "inset(100% 0% 0% 0%)",
            scrollTrigger: {
                trigger: ".projects-trigger",
                start: "top 40%"
            }
        })
    }, []);
    

  return (
    <div className='flex flex-col justify-between space-y-[7vh] lg:space-y-[10vh]'>
        <div className='flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between pl-[1.5vw] pr-[1.5vw] sm:pl-[4vw] sm:pr-[4vw] lg:pl-[8vw] lg:pr-[8vw]'>
            <div 
                ref={projectsSectionTitleRef}
                className="text-[27px]"
            >
                Featured Projects
            </div>
            <ProjectCard
                img="/project-1.webp"
                title="Kai Tak Sports Park"
                year={2025}
                size="small"
            />
        </div>
        <div className='pl-[1.5vw] pr-[1.5vw] sm:pl-[4vw] sm:pr-[4vw] lg:pl-[8vw] lg:pr-[8vw]'>
            <ProjectCard
                img="/project-2.webp"
                title="Tottenham Hotspur Stadium"
                year={2019}
                size="small"
            />
        </div>
        <div className='pl-[1.5vw] pr-[1.5vw] sm:pl-[4vw] sm:pr-[4vw] lg:pl-[8vw] lg:pr-[8vw]'>
            <ProjectCard
                img="/project-3.webp"
                title="BMO Centre"
                year={2024}
                size="medium"
            />
        </div>
        <div className="projects-trigger">
            <div className="projects-pin relative z-10 text-white flex flex-col items-center space-y-6 top-[57vh] mx-[30vw] xs:mx-[36vw] sm:mx-[39vw] md:space-y-0 md:mx-0 md:top-80 md:justify-around md:flex-row md:items-start">
                <div
                    ref={projectFourTitleRef}
                    className="text-3xl md:text-4xl tracking-tighter"
                >
                    Sphere
                </div>
                <div className="w-fit">
                    <Button
                        text="View Project"
                        variant="primary"
                    />
                </div>
            </div>
            <Image
                width={1181}
                height={1182}
                src={"/project-4.webp"}
                alt="project-img"
                className="cursor-pointer overflow-hidden rounded-none h-screen object-cover w-full brightness-[0.70] md:h-auto"
            />
        </div>
    </div>
  )
}

export default ProjectsSection