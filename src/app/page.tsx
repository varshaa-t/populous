"use client";

import DisciplinesSection from "@/components/DisciplinesSection";
import ExploreSection from "@/components/ExploreSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import NewsSection from "@/components/NewsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SustainabilityAndCareersSection from "@/components/SustainabilityAndCareersSection";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import {ReactLenis} from "lenis/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Home() {

  const container = useRef(null);

  useGSAP(() => {

    gsap.timeline({
      scrollTrigger: {
        trigger:".nav",
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false
      }
    })
    .to(".news", { yPercent: -1})

    const handleResize = () => ScrollTrigger.refresh();

    window.addEventListener("resize", handleResize);

    const exploreMM = gsap.matchMedia();

    exploreMM.add("(min-width: 1024px) and (max-width: 1279px)", () => {
      const scrollTrigger = ScrollTrigger.create({
        trigger: ".explore-trigger",
        start: "top 1%",
        end: "+=80%",
        pin: ".explore-pin",
        pinSpacing: true
      });
    
      return () => {
        scrollTrigger.kill();
      };
    });
    
    exploreMM.add("(min-width: 1280px)", () => {
      const scrollTrigger = ScrollTrigger.create({
        trigger: ".explore-trigger",
        start: "top 1%",
        end: "+=110%",
        pin: ".explore-pin",
        pinSpacing: true
      });
    
      return () => {
        scrollTrigger.kill();
      };
    });
    
    return () => {
      exploreMM.revert();
      window.removeEventListener("resize", handleResize);
    }
  }, { scope: container });

  return (
    <ReactLenis root>
      <div ref={container}>
        <div className="nav relative h-screen">
          <video autoPlay loop muted className="fixed brightness-50 inset-0 w-screen h-screen object-cover -z-10">
              <source src="/videos/video-1.mp4" />
          </video>
          <Navbar/>
          <HeroSection/>
        </div>
        <div className="news bg-white h-full pt-6 xs:pb-14 xs:pt-8 xl:pb-20">
          <NewsSection/>
        </div>
        <div className="explore-trigger relative h-screen">
          <video autoPlay loop muted className="w-screen brightness-50">
            <source src="/videos/video-2.mp4"/>
          </video>
          <div className="explore-pin absolute top-[30vw] xs:top-[31vw] sm:top-[32vw] md:top-[37vw] lg:top-60 lg:px-32 w-full">
            <ExploreSection/>
          </div>
        </div>
        <div className="bg-white h-full -mt-24 xs:mt-0 xs:pt-[10%] sm:pt-[20%] md:pt-[40%] lg:pt-[50%] xl:pt-[60%]">
          <ProjectsSection/>
        </div>
        <div className="bg-white h-full py-[12vw]">
          <DisciplinesSection/>
        </div>
        <div className="bg-white h-full pt-10 pb-20 xs:pb-36">
          <SustainabilityAndCareersSection/>
        </div>
        <div className="bg-dark-blue h-full xs:h-screen py-8">
          <Footer/>
        </div>
      </div>
    </ReactLenis>
  );
}
