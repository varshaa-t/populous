"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

type FooterLinksProps = {
    title?: string;
    links: string[];
}

function FooterLinks({title = "", links}: FooterLinksProps) {

    const [showFooter, setShowFooter] = useState(false);
    const footerTitleRef = useRef<HTMLDivElement | null>(null);
    const footerTextRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const pageHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;

            if(scrollY + windowHeight > pageHeight - 500){
                setShowFooter(true);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if(!footerTitleRef.current || !footerTextRef.current) return;

        if(showFooter){
            gsap.from(footerTitleRef.current, {
                opacity: 0,
                clipPath: "inset(100% 0% 0% 0%)",
                autoAlpha: 0,
                y: 25,
                delay: 0.7
            })

            gsap.from(footerTextRef.current, {
                opacity: 0,
                clipPath: "inset(0% 50% 100% 0%)",
                autoAlpha: 0,
                delay: 0.3
            })
        }
    }, [showFooter]);

  return (
    <div className="flex flex-col space-y-2 md:space-y-10">
        <div 
            ref={footerTitleRef} 
            className="invisible min-h-6 text-gray text-[10px] font-extrabold tracking-tight"
        >
            {title}
        </div>
        <div ref={footerTextRef} className="invisible">
            {links.map((link, index) => (
                <div key={index} className="flex flex-col text-[15px] xs:text-sm sm:text-[15px] lg:whitespace-nowrap lg:text-base xl:text-[17px] cursor-pointer hover:underline">
                    {link}
                </div>
            ))}
        </div>
    </div>
  )
}

export default FooterLinks