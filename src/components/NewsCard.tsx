import Image from "next/image";
import NewsTag from "./NewsTag";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "./Button";

gsap.registerPlugin(useGSAP);

type NewsCardProps = {
    date: string;
    title: string;  
    img: string;
}

export default function NewsCard({date, title, img}: NewsCardProps){

    const imageRef = useRef<HTMLImageElement | null>(null);
    const [showButton, setShowButton] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const newsCardRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if (!imageRef.current) return;

        const animation = gsap.to(imageRef.current, {
            scale: 1.05,
            duration: 0.4,
            ease: "power1.inOut",
            paused: true
        });

        const handleMouseEnter = () => {
            animation.play();
            setShowButton(true);
        };

        const handleMouseLeave = () => {
            animation.reverse();
            setShowButton(false);
        };

        const imgElement = imageRef.current;
        imgElement.addEventListener("mouseenter", handleMouseEnter);
        imgElement.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            imgElement.removeEventListener("mouseenter", handleMouseEnter);
            imgElement.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = imageRef.current?.getBoundingClientRect();
        if (!rect) return;

        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    useGSAP(() => {

        if(!newsCardRef.current) return ;

        gsap.from(newsCardRef.current.children, {
            y: 100,
            opacity: 0,
            scale: 1.05,
            duration: 0.7,
            scrollTrigger: {
                trigger: newsCardRef.current,
                start: "top 85%"
            }
        })

    }, { scope: newsCardRef })

    return (
        <div ref={newsCardRef} className="flex flex-col space-y-3 h-full bg-white px-2 py-6 sm:px-6 group">
            <NewsTag/>
            <div className="overflow-hidden">
                <Image
                    ref={imageRef}
                    width={587}
                    height={330}
                    src={img}
                    alt="news-img"
                    className="rounded-md relative cursor-pointer w-[630px]"
                    onMouseMove={handleMouseMove}
                />
                {showButton && (
                    <div
                        className="absolute transition-opacity duration-300 pointer-events-none"
                        style={{
                            left: `${position.x + 23}px`,
                            top: `${position.y + 80}px`,   
                        }}
                    >
                        <Button text="View" variant="tertiary" />
                    </div>
                )}
            </div>
            <div className="flex flex-col text-[13px] space-y-4">
                <h3>{date}</h3>
                <p className="group-hover:underline text-[22px] w-[75vw] xs:w-[70vw] md:w-[30vw] lg:w-[23vw] tracking-tight leading-6 hover:underline underline-offset-2 cursor-pointer">{title}</p>
            </div>
        </div>
    )
}