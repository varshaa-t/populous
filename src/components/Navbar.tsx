"use client";

import Close from "@/icons/Close";
import Menu from "@/icons/Menu";
import Image from "next/image";
import { useState } from "react";

export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex justify-between pl-10 pr-4 pt-7">
            <div className="text-xl font-extrabold text-white cursor-pointer">
                POPULOUS
            </div>
            <div 
                className="flex md:hidden cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Menu/>
            </div>
            {!isOpen &&
            <div className="text-white hidden md:flex md:space-x-[15vw] xl:space-x-[18vw]">
                <div className="flex flex-col">
                    <div className="hover:underline decoration-1 underline-offset-2 cursor-pointer">Explore</div>
                    <div className="hover:underline decoration-1 underline-offset-2 cursor-pointer">Projects</div>
                    <div className="hover:underline decoration-1 underline-offset-2 cursor-pointer">Disciplines</div>
                </div>
                <div className="flex flex-col">
                    <div className="hover:underline decoration-1 underline-offset-2 cursor-pointer">Sustainability</div>
                    <div className="hover:underline decoration-1 underline-offset-2 cursor-pointer">Digital Future</div>
                    <div className="hover:underline decoration-1 underline-offset-2 cursor-pointer">Careers</div>
                </div>
                <div
                    className="cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Menu/>
                </div>
            </div>
            }
            {isOpen && 
                <div className="bg-white fixed z-0 flex flex-col space-y-[310px] md:space-y-[280px] xl:space-y-64 px-2 md:px-4 py-4 content-between w-full h-full rounded-none right-0 top-0 md:w-[50vw] md:h-[635px] md:rounded-md md:right-4 md:top-8 lg:px-6">
                    <div className="flex flex-col text-5xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tighter cursor-pointer">
                        <div className="hover:underline decoration-2 underline-offset-4">Explore</div>
                        <div className="hover:underline decoration-2 underline-offset-4">Projects</div>
                        <div className="hover:underline decoration-2 underline-offset-4">Disciplines</div>
                    </div>
                    <div className="flex flex-col space-y-8 font-medium">
                        <div className="flex space-x-60 md:space-x-[10vw] lg:space-x-[15.5vw]">
                            <div className="text-gray">Who we are</div>
                            <div>
                                <div className="hover:underline decoration-1 underline-offset-2 cursor-pointer">About</div>
                                <div className="hover:underline decoration-1 underline-offset-2 cursor-pointer">Team</div>
                                <div className="hover:underline decoration-1 underline-offset-2 cursor-pointer">Careers</div>
                            </div>
                        </div>
                        <div className="flex space-x-[280px] md:space-x-[14.3vw] lg:space-x-[18.5vw] xl:space-x-[18vw]">
                            <div className="text-gray">Impact</div>
                            <div>
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