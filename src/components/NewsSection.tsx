"use client";

import LeftArrow from "@/icons/LeftArrow";
import RightArrow from "@/icons/RightArrow";
import NewsCard from "./NewsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation } from 'swiper/modules';
import Button from "./Button";

export default function NewsSection(){

    const news = [
        {
            date: "February 19, 2025",
            title: "Populous and Penn State Athletics Unveil Details, New Renderings on Beaver Stadium Revitalization",
            img: "/news-1.webp"
        }, 
        {
            date: "February 13, 2025",
            title: "Populous Announces New CEO and Leadership Roles",
            img: "/news-2.webp"
        },
        {
            date: "February 6, 2025",
            title: "Populous Partners with Portland Thorns and WNBA Expansion for First-of-its-Kind Training Facility",
            img: "/news-3.webp"
        },
        {
            date: "February 6, 2025",
            title: "Leading transport designer joins Populous to head Australia and New Zealand aviation practice",
            img: "/news-4.webp"
        },
        {
            date: "February 4, 2025",
            title: "Como 1907 Announces First Stage of Populous-designed Stadio Giuseppe Sinigaglia Redevelopment",
            img: "/news-5.webp"
        },
        {
            date: "February 3, 2025",
            title: "Wrexham AFC Unveils Design of New Kop Stand",
            img: "/news-6.webp"
        },
        {
            date: "November 22, 2024",
            title: "Populous-Designed Cleveland Clinic Global Peak Performance Center Wins Top Honors in International Design Awards",
            img: "/news-7.webp"
        },
        {
            date: "November 18, 2024",
            title: "Populous-Designed King Salman Stadium Set to Become Global Sporting Icon",
            img: "/news-8.webp"
        },
        {
            date: "October 17, 2024",
            title: "Populous to Design Charlotte Hornets' New State-of-the-Art Performance Center",
            img: "/news-9.webp"
        }
    ]

    return (
        <div>
            <div className="text-[27px] pl-[1.5vw] w-[370px] pb-32 xs:w-[460px] sm:text-3xl sm:w-[520px] sm:pl-[4vw] md:pb-52 lg:w-[610px] lg:pl-[8vw]">
                We’re a global design firm
                with colleagues spanning
                four continents creating
                experiences that amplify
                the joy felt in shared human
                moments.
            </div>
            <div className="flex justify-between items-center pl-[1.5vw] pr-[1.5vw] sm:pl-[4vw] sm:pr-[4vw] lg:pl-[8vw] lg:pr-[8vw]">
                <div className="text-3xl tracking-tight">News</div>
                <div className="flex space-x-2 lg:space-x-6 items-center">
                    <div className="flex space-x-1 md:space-x-2">
                        <div id="left-arrow" className="border px-2 py-2 rounded-md cursor-pointer hover:text-white hover:bg-[#1c19b5]">
                            <LeftArrow/>
                        </div>
                        <div id="right-arrow" className="border px-2 py-2 rounded-md cursor-pointer hover:text-white hover:bg-[#1c19b5]">
                            <RightArrow/>
                        </div>
                    </div>
                    <Button 
                        text="View All"
                        variant="primary"
                    />
                </div>
            </div>
            <div className="sm:pl-[1.5vw] md:pl-[2vw] lg:pl-[6vw] xl:pl-[6.5vw]">
                <Swiper 
                    grabCursor={true}
                    breakpoints={{
                        370: { slidesPerView: 1, slidesPerGroup: 1},
                        768: {slidesPerView: 2.2, slidesPerGroup: 2 }
                    }}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '#right-arrow',
                        prevEl: '#left-arrow'
                    }}
                >
                {news.map((news, index) => (
                        <SwiperSlide key={index}>
                            <NewsCard
                                date={news.date}
                                title={news.title}
                                img={news.img}
                            />
                        </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </div>
    )
}