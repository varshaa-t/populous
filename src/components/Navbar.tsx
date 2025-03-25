"use client";

import Close from "@/icons/Close";
import Menu from "@/icons/Menu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false);
    const navColumnOne = useRef<HTMLDivElement | null>(null);
    const navColumnTwo = useRef<HTMLDivElement | null>(null); 
    const menuRef = useRef<HTMLDivElement | null>(null);
    const logoRef = useRef<HTMLDivElement | null>(null);
    const sideColumnOneRef = useRef<HTMLDivElement | null>(null);
    const sideColumnTwoRef = useRef<HTMLDivElement | null>(null);
    const sideColumnThreeRef = useRef<HTMLDivElement | null>(null);
    const sideColumnFourRef = useRef<HTMLDivElement | null>(null);
    const sideColumnFiveRef = useRef<HTMLDivElement | null>(null);
    const logoRefTwo = useRef<HTMLDivElement | null>(null);;

    useGSAP(() => {

        const navColumns = [navColumnOne.current, navColumnTwo.current];
        const logos = [menuRef.current, logoRef.current, logoRefTwo.current];

        navColumns.forEach((col) => {
            if(!col) return ;

            function init(){
                gsap.from(col, {
                    clipPath: "inset(0% 0% 100% 0%)",
                    y: 50,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.4,
                    delay: 0.4,
                    autoAlpha: 0
                })
            }

            init();
        })

        logos.forEach((logo) => {
            if(!logo) return;

            function init(){
                gsap.from(logo, {
                    y: 30,
                    opacity: 0,
                    duration: 0.4,
                    delay: 0.4,
                    autoAlpha: 0
                })
            }

            init();
        })
    }, [isOpen])

    useGSAP(() => {

        const sideColumns = [sideColumnOneRef.current, sideColumnThreeRef.current, sideColumnFiveRef.current];

        sideColumns.forEach((col) => {
            if(!col) return ;

            gsap.from(col.children, {
                y: 50,
                opacity: 0,
                duration: 0.4,
                delay: 0.2,
                stagger: 0.1,
                clipPath: "inset(0% 0% 100% 0%)"
            })
        })

        const leftColumns = [sideColumnTwoRef.current, sideColumnFourRef.current];

        leftColumns.forEach((col) => {
            if(!col) return ;

            gsap.from(col, {
                y: 30,
                opacity: 0,
                duration: 0.4,
                delay: 0.5,
                clipPath: "inset(0% 0% 100% 0%)"
            })
        })

    }, [isOpen])

    return (
        <nav className="flex justify-between pl-3 pr-4 pt-3 xs:pl-10 xs:pt-7">
            <div 
                ref={logoRef}
                className="text-xl font-extrabold text-white cursor-pointer invisible"
            >
                POPULOUS
            </div>
            <div 
                ref={logoRefTwo}
                className="flex md:hidden cursor-pointer invisible"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Menu/>
            </div>
            {!isOpen &&
            <div className="text-white hidden md:flex md:space-x-[15vw] xl:space-x-[18vw]">
                <div 
                    ref={navColumnOne}    
                    className="flex flex-col invisible"
                >
                    <div className="hover:underline decoration-1 underline-offset-2 cursor-pointer">Explore</div>
                    <div className="hover:underline decoration-1 underline-offset-2 cursor-pointer">Projects</div>
                    <div className="hover:underline decoration-1 underline-offset-2 cursor-pointer">Disciplines</div>
                </div>
                <div 
                    ref={navColumnTwo}
                    className="flex flex-col invisible"
                >
                    <div className="hover:underline decoration-1 underline-offset-2 cursor-pointer">Sustainability</div>
                    <div className="hover:underline decoration-1 underline-offset-2 cursor-pointer">Digital Future</div>
                    <div className="hover:underline decoration-1 underline-offset-2 cursor-pointer">Careers</div>
                </div>
                <div
                    ref={menuRef}
                    className="cursor-pointer invisible"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Menu/>
                </div>
            </div>
            }
            {isOpen && 
                <div className="bg-white fixed z-10 flex flex-col space-y-[310px] md:space-y-[280px] xl:space-y-64 px-2 md:px-4 py-4 content-between w-full h-full rounded-none right-0 top-0 md:w-[50vw] md:h-[635px] md:rounded-md md:right-4 md:top-8 lg:px-6">
                    <div 
                        ref={sideColumnOneRef}
                        className="flex flex-col text-5xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tighter cursor-pointer"
                    >
                        <div className="hover:underline decoration-2 underline-offset-4">Explore</div>
                        <div className="hover:underline decoration-2 underline-offset-4">Projects</div>
                        <div className="hover:underline decoration-2 underline-offset-4">Disciplines</div>
                    </div>
                    <div className="flex flex-col space-y-8 font-medium">
                        <div className="flex space-x-32 xs:space-x-60 md:space-x-[10vw] lg:space-x-[15.5vw]">
                            <div
                                ref={sideColumnTwoRef}
                                className="text-gray"
                            >
                                Who we are
                            </div>
                            <div
                                ref={sideColumnThreeRef}
                            >
                                <div className="hover:underline decoration-1 underline-offset-2 cursor-pointer">About</div>
                                <div className="hover:underline decoration-1 underline-offset-2 cursor-pointer">Team</div>
                                <div className="hover:underline decoration-1 underline-offset-2 cursor-pointer">Careers</div>
                            </div>
                        </div>
                        <div className="flex space-x-[165px] xs:space-x-[280px] md:space-x-[14.3vw] lg:space-x-[18.5vw] xl:space-x-[18vw]">
                            <div 
                                ref={sideColumnFourRef}
                                className="text-gray"
                            >
                                Impact
                            </div>
                            <div
                                ref={sideColumnFiveRef}
                            >
                                <div className="hover:underline decoration-1 underline-offset-2 cursor-pointer">Sustainability</div>
                                <div className="hover:underline decoration-1 underline-offset-2 cursor-pointer">Digital Future</div>
                                <div className="hover:underline decoration-1 underline-offset-2 cursor-pointer">News</div>
                                <div className="hover:underline decoration-1 underline-offset-2 cursor-pointer">Contact</div>
                            </div>
                        </div>
                    </div>
                    <div 
                        className="fixed right-2 -top-72 md:right-8 md:-top-[230px] xl:-top-52"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Close/>
                    </div>
                </div>
            }
        </nav>
    )
}