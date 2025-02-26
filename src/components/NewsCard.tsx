import Image from "next/image";
import NewsTag from "./NewsTag";

type NewsCardProps = {
    date: string;
    title: string;  
    img: string;
}

export default function NewsCard({date, title, img}: NewsCardProps){

    return (
        <div className="flex flex-col space-y-3 h-full bg-white px-6 py-6">
            <NewsTag/>
            <div>
                <Image
                    width={587}
                    height={330}
                    src={img}
                    alt="news-img"
                    className="rounded-md relative"
                />
            </div>
            <div className="flex flex-col text-[13px] space-y-4">
                <h3>{date}</h3>
                <p className="text-[22px] w-[23vw] tracking-tight leading-6 hover:underline underline-offset-2 cursor-pointer">{title}</p>
            </div>
        </div>
    )
}