"use client";

import { useRef } from "react"
import Button from "./Button"
import SustainabilityAndCareersComponent from "./SustainabilityAndCareersComponent"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function SustainabilityAndCareersSection() {

  const sacsTextRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if(!sacsTextRef.current) return;

    const sacsMM = gsap.matchMedia();

    sacsMM.add("(min-width: 380px)", () => {
      gsap.from(sacsTextRef.current, {
        opacity: 0,
        clipPath: "inset(0% 0% 100% 0%)",
        y: 50,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sacsTextRef.current,
          start: "top 10%"
        }
      })
  
      ScrollTrigger.refresh();
    })

    sacsMM.add("(max-width: 379px)", () => {
      gsap.from(sacsTextRef.current, {
        opacity: 0,
        clipPath: "inset(0% 0% 100% 0%)",
        y: 50,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sacsTextRef.current,
          start: "top 85%"
        }
      })
  
      ScrollTrigger.refresh();
    })
  }, []);

  return (
    <div className="flex flex-col space-y-16 xs:space-y-40 pl-[1.5vw] pr-[1.5vw] sm:pl-[4vw] sm:pr-[4vw] lg:pl-[8vw] lg:pr-[8vw]">
        <SustainabilityAndCareersComponent
            img="/sustainability.webp"
            alt="sustainability-img"
            title="Crafting a Sustainable Future"
            text="Populous has been at the forefront of environmentally sustainable design solutions for public assembly venues since the formation of our practice."
            buttonText="Sustainability"
            type="type-1"
        />
        <SustainabilityAndCareersComponent
            img="/careers.webp"
            alt="careers-img"
            title="We Can’t Do It Without You"
            text="Populous is all about people — it’s in our name. Attracting and retaining talented people who are passionate about their work is what makes us thrive. Learn more about working at Populous, and view our open positions."
            buttonText="Careers"
            type="type-2"
        />
        <div className="mx-auto flex pt-20 flex-col items-center space-y-12 lg:space-y-20">
          <div ref={sacsTextRef} className="text-4xl w-[70vw] tracking-tighter leading-[1] xs:text-[5.2vw] xs:w-[45vw] text-center">
            <div>Have a question?</div>
            <div>Want to work with us?</div>
          </div>
          <div className="w-fit">
            <Button
              text="Contact"
              variant="secondary"
            />
          </div>
        </div>
    </div>
  )
}

export default SustainabilityAndCareersSection