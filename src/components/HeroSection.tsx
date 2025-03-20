import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { useRef } from "react"

gsap.registerPlugin(useGSAP);

export default function HeroSection(){

    const textRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {

        if(!textRef.current) return;

        function init(){
            gsap.from(textRef.current, {
                clipPath: "inset(0% 0% 100% 0%)",
                y: 100,
                opacity: 0,
                duration: 0.4,
                stagger: 0.1,
                autoAlpha: 0
            })
        }

        init();
    }, {scope: textRef})

    return (
        <div className="py-16">
            <div ref={textRef} className="invisible text-white tracking-tight mt-[55vh] text-[10vw] ml-[2vw] leading-[35px] xs:text-[6vw] xs:mt-[65vh] sm:w-[45vw] sm:text-[5vw] sm:mt-[65vh] sm:leading-[35px] md:mt-[50vh] md:ml-[3vw] md:leading-[50px] lg:mt-[45vh] lg:ml-[5vw] lg:leading-[60px] xl:mt-[35vh] xl:ml-[8vw] xl:leading-[75px]">
                <div>We design the</div>
                <div>places where people</div>
                <div>love to be together.</div>
            </div>
        </div>
    )
}